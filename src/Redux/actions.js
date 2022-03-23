// thunk call to fetch movie list

import {
    ADD_MOVIE,
    FILTER_MOVIE
} from "./actionTypes";

export const getMovieData = (payload) => ({
    type: ADD_MOVIE,
    payload
});

// action object for filter  feature

export const filterByGenre = (payload) => ({
    type: FILTER_MOVIE,
    payload
});
