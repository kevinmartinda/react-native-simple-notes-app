
const initialState = {
    number: 10,
    data: [],
    results: [],
    isLoading: true,
    isError: false,
    page: 1,
    search: '',
    isSearching: false,
    pageName: 'Home'
}

// create a reducer for getting network from RESTful API
export default notes = (state = initialState, action) => {
    switch(action.type){
        // SET SEARCH PARAM
        case 'SET_SEARCH': 
            return {
                ...state,
                isSearching: true,
                search: action.payload
            }
        //GET Notes
        case 'GET_NOTES_PENDING':
            return {
                ...state,
            }
        case 'GET_NOTES_REJECTED': 
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTES_FULFILLED': 
            return {
                ...state,
                isLoading: false,
                isFooter: false,
                isError: false,
                data: action.payload.data.values,
                page: action.payload.data.totalPage,
                pageName: 'Home'
            }
        //GET more Notes
        case 'GET_MORE_NOTES_PENDING':
            return {
                ...state,
                isFooter: true
            }
        case 'GET_MORE_NOTES_REJECTED': 
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_MORE_NOTES_FULFILLED': 
            return {
                ...state,
                isLoading: false,
                isError: false,
                isFooter: false,
                data: [...state.data, ...action.payload.data.values]
            }
        //GET sort Notes
        case 'GET_SORT_NOTES_PENDING':
            return {
                ...state,
                isLoading: true,
            }
        case 'GET_SORT_NOTES_REJECTED': 
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_SORT_NOTES_FULFILLED': 
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.values
            }
        //GET Seacrhed Notes
        case 'GET_NOTES_SEARCHED_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_SEARCHED_REJECTED': 
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTES_SEARCHED_FULFILLED': 
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.values,
                page: action.payload.data.totalPage
            }
        //GET Notes by Category
        case 'GET_NOTES_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_CATEGORY_REJECTED': 
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTES_CATEGORY_FULFILLED': 
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.values,
                page: action.payload.data.totalPage,
                pageName: 'Category'
            }
        //DELETE note
        case 'DELETE_NOTES_PENDING':
            return {
                ...state
            }
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'DELETE_NOTES_FULFILLED':
           return {
               ...state,
               isLoading: false,
               isError: false,
               data: state.data.filter(note => (note.id !== parseInt(action.payload.data.values)))
           }
          
        //ADD note
        case 'ADD_NOTES_PENDING':
            console.log('pending')
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_NOTES_REJECTED': 
            console.log('rejected')
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'ADD_NOTES_FULFILLED': 
            console.log('fulfilled ' + state.notes)
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [action.payload.data.values, ...state.data]
            }
        //EDIT note
        case 'EDIT_NOTES_PENDING': 
            console.log('pending')
            return {
                ...state,
                isLoading: true
            }
        case 'EDIT_NOTES_REJECTED': 
            console.log('rejected')
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'EDIT_NOTES_FULFILLED': 
            console.log('fulfilled ' + state.notes)
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.map(note => note.id === action.payload.data.values.id ? action.payload.data.values : note)
            }
        default:
            return state;
    }
}