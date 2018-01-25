import axios from 'axios'

export function getCategories(){
    return (dispatch) => {
        axios.get()
        .then((response) =>{
            dispatch({type:"FETCH_CATEGORIES",payload: response.data})
        })
        .catch((error) => {
            dispatch({type:"CATEGORIES_ERROR",payload: error})
        })
    }
}