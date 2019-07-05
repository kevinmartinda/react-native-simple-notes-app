import axios from 'axios';

import url from './url'

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(`${url}categories`)
    }
}

export const addCategories = (data) => {
    return {
        type: 'ADD_CATEGORIES',
        payload: axios.post(`${url}categories`, data)
    }
}

export const deleteCategories = (id) => {
    return {
        type: 'DELETE_CATEGORIES',
        payload: axios.delete(`${url}categories/${id}`)
    }
}