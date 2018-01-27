import axios from 'axios'
import API_GET_CATEGORIES from '../constents'

export function getCategories(){
    return (dispatch) => {
        axios.get(API_GET_CATEGORIES)
        .then((response) =>{
            dispatch({type:"FETCH_CATEGORIES",payload: response.data})
        })
        .catch((error) => {
            dispatch({type:"CATEGORIES_ERROR",payload: error})
        })
    }
}