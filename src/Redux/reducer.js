import {
    ADD_MOVIE,
    FILTER_MOVIE
} from "./actionTypes";

const initState = {
    data: [],
    filterData: [],
    isLoading: false,
    isError: false
}

export const Reducer = (state = initState, {
    type,
    payload
}) => {
    // add the switch statement for different actions
    switch (type) {
        case ADD_MOVIE: {
            return {
                ...state,
                data: payload,
                filterData: payload
            }
        }

        case FILTER_MOVIE: {
            console.log("filter by ", payload)

            let newData = state.data.filter(a => {
                if (a.genre.indexOf(payload) !== -1) {
                    return a;
                }
            });

            console.log(newData)

            return {
                ...state,
                filterData: newData
            }

        }

        default:
            return state
    }


}