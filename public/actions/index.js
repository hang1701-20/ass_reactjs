import axios from 'axios';
import {api} from '../Api';
export const ALL_ITEM = 'ALL_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const LOADING ='LOADING';
export const EDIT_ITEM = 'EDIT_ITEM';

export const redux_all_User = () => async (dispatch) => {
    const res = await axios.get(api);
    dispatch({
        type: ALL_ITEM,
        payload: res.data,
    })
}

export const redux_delete_User = (id) => async (dispatch) =>{
    const res = await axios.delete(`${api}/${id}`);
    dispatch({
        type: DELETE_ITEM,
        payload: res.data.id
    })
}
const addUser = async data =>{
    const result = await axios.post(api,{name:data});
    return result.data;
    
    }
    const editUser =  async id =>{
        const data = await axios.get(`${api}/${id}`)
        return data.data
    }
export const redux_add_User = (user) => async (dispatch) => {
    dispatch({
        type: ADD_ITEM,
        payload: addUser(user)
    })
}

export const redux_edit_User = (id) => async (dispatch) =>{
    dispatch({
        type: EDIT_ITEM,
        payload: editUser(id)
    })
}
