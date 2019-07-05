import { combineReducers } from 'redux';

// import all reducers
import notes from './notes';
import categories from './categories';

// combine them
const appReducer = combineReducers({
    categories,
    notes
})

export default appReducer;