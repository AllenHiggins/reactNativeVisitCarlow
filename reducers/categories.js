export default function categories(state={
    list: [],
    error: null
},action){
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return{
                ...state,
                list: action.payload
            }
        case 'CATEGORIES_ERROR':
            return{
                ...state,
                error: action.payload
            }
            break;
        default:
            return state
    }
}
