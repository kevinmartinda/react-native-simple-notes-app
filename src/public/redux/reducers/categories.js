
const initialState = {
    number: 10,
    data: [],
    results: [],
    isLoading: false,
    isError: false,
    isDeleted: false
}

export default categories = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES_PENDING': 
            return {
                isLoading: true
            }
        case 'GET_CATEGORIES_REJECTED': 
            return {
                isLoading: false,
                isError: true,
            }
        case 'GET_CATEGORIES_FULFILLED': 
            return {
                isLoading: false,
                isError: false,
                data: action.payload.data.values
            }
        //ADD Category
        case 'ADD_CATEGORIES_PENDING':
            console.log('pending')
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_CATEGORIES_REJECTED': 
            console.log('rejected')
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'ADD_CATEGORIES_FULFILLED': 
            console.log('fulfilled ' + state.notes)
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [...state.data, action.payload.data.values]
            }
        //DELETE note
        case 'DELETE_CATEGORIES_PENDING':
            return {
                ...state,
                isDeleted:true
            }
        case 'DELETE_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'DELETE_CATEGORIES_FULFILLED':
           return {
               ...state,
               isLoading: false,
               isError: false,
               data: state.data.filter(category => (category.id !== parseInt(action.payload.data.values))),
               isDeleted: false
           }
        default:
            return state
        }
    }