import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./movie.css"
import { getMovieData, filterByGenre } from '../Redux/actions'

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const ProductsDashboard = () => {

  const movieStore = useSelector((store) => store.filterData)
  const dispatch = useDispatch()
  console.log("redux all data", movieStore)

  //   // to get all movies list on component mounts
  // useEffect(() => {
  //   //   dispatch an action to the store 

  // }, [dispatch]);

  const navigate = useNavigate();

  const [allMovie, setAllMovies] = useState([])
  console.log(allMovie)

  useEffect(() => {
    axios.get("https://movie-fake-server.herokuapp.com/data")
      .then(({ data }) => {
        setAllMovies(data)
        dispatch(getMovieData(data));
      })
  }, [])


  //    filter by genre 
  const handleFilter = (e) => {
    const payload = e.target.value
    dispatch(filterByGenre(payload))
  }
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {genres.map(a => {
          return <option key={a} value={a} >{a}</option>
        })}
      </select>


      <div className="movies-list">
        <table border="0">

          {movieStore.map(a => {
            return (

              <tr >
                <th>Movie name : </th>

                <td onClick={() => {
                  navigate(`/movies/${a.id}`)
                }}> {a.movie_name} </td>

                <th>Genre : </th>
                <td>  {a.genre} </td>
                <th> Release_date : </th>
                <td> {a.release_date} </td>

              </tr>
            )

          })}
        </table>
      </div>
    </>
  );
};
