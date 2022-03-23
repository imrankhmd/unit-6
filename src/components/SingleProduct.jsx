import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovieData, filterByGenre } from '../Redux/actions'
import axios from "axios";

export const SingleProduct = () => {

  const { id } = useParams("id");
  const dispatch = useDispatch

  const [specificMovie, setSpecificMovie] = useState([])
  console.log(specificMovie)


  useEffect(() => {
    axios.get(`https://movie-fake-server.herokuapp.com/data/${id}`)
      .then(({ data }) => {
        setSpecificMovie(data)
      })
  }, [])

  // make a request to get the details
  return <>
    Single Movie {id}

    <h1>MOVIE NAME : {specificMovie.movie_name}</h1>
    <h1>Rating : {specificMovie.rating} start</h1>
    <h1>Release Date : {specificMovie.release_date}</h1>
    <img src={specificMovie.image_url} />
    <h3>Genre : {specificMovie.genre}</h3>
  </>;
};
