// import axios for getting data from API
import axios from 'axios';
import url from './url'

// export action that get notes
export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(`${url}notes`)
    }
}

export const getSort = (sort, search) => {
    return {
        type: 'GET_SORT_NOTES',
        payload: axios.get(`${url}notes?sort=${sort}&search=${search}`)
    }
}

export const getMoreData = (page) => {
    return {
        type: 'GET_MORE_NOTES',
        payload: axios.get(`${url}notes?page=${page}`)
    }
}

export const getSearchedNotes = (search) => {
    return {
        type: 'GET_NOTES_SEARCHED',
        payload: axios.get(`${url}notes?search=${search}`)
    }
}

export const deleteNotes = (id) => {
    return {
        type: 'DELETE_NOTES',
        payload: axios.delete(`${url}notes/${id}`)
    }
}

export const getNotesByCategory = (categoryId) => {
    return {
        type: 'GET_NOTES_CATEGORY',
        payload: axios.get(`${url}notes-category/${categoryId}`)
    }
}

export const addNotes = (data) => {
    return {
        type: 'ADD_NOTES',
        payload: axios.post(`${url}notes`, data)
    }
}

export const updateNotes = (data, id) => {
    return {
        type: 'EDIT_NOTES',
        payload: axios.patch(`${url}notes/${id}`, data)
    }
}

export const setSearch = (data) => {
    console.log("data: " + data)
    return {
        type: 'SET_SEARCH',
        payload: data
    }
}



// export const updateNote = (id) => {
//     return {
//         type: 'GET_NOTES',
//         payload: axios.get('https://randomuser.me/api/id)
//     }
// }

// export const getCategory = () => {
//     return {
//         type: 'GET_NOTES',
//         payload: axios.get('https://randomuser.me/api?results=10')
//     }
// }
