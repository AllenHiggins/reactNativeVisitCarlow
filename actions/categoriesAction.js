import axios from 'axios'

export function getCategories(){ 
    return (dispatch) => {
        axios.get('http://inframe.pythonanywhere.com/category')
        .then((response) =>{
            dispatch({
                type:"FETCH_CATEGORIES",
                payload: response.data.Catagories
            })
        })
        .catch((error) => {
            dispatch({
                type:"CATEGORIES_ERROR",
                payload: error
            })
        })
    }
}