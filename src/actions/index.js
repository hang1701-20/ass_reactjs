import apiRequest from '../api/productApi';
import apiCategory from '../api/categoryApi'
import apiCategoryPost from '../api/categoryPostApi'
import apiPost from '../api/postApi'
export const DELETE_ITEM = 'DELETE_ITEM';
export const ALL_ITEM = 'ALL_ITEM';
export const DETAILS_ITEM = 'DETAILS_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ALL_CATE = 'ALL_CATE';
export const ALL_CATEPOST = 'ALL_CATEPOST';
export const ALL_POST = 'ALL_POST';
export const DETAILS_CATE = 'DETAILS_CATE';
export const CATE = 'CATE';

export const redux_all_Product = (text) => async (dispatch, getState) => {
    const { data } = await apiRequest.getAll();
    const action = {
        type: ALL_ITEM,
        payload: data
    }
    dispatch(action)
}
export const redux_all_Category = (text) => async (dispatch, getState) => {
    const { data } = await apiCategory.getAll();
    const action = {
        type: ALL_CATE,
        payload: data
    }
    dispatch(action)
}

export const redux_all_CategoryPost = (text) => async (dispatch, getState) => {
    const { data } = await apiCategoryPost.getAll();
    const action = {
        type: ALL_CATEPOST,
        payload: data
    }
    dispatch(action)
}

export const redux_all_Post = (text) => async (dispatch, getState) => {
    const { data } = await apiPost.getAll();
    const action = {
        type: ALL_POST,
        payload: data
    }
    dispatch(action)
}

export const redux_details_Product = (id) => async (dispatch) => {
    const { data } = await apiRequest.getAll(); 
    const action = {
        type: DETAILS_ITEM,
        payload: data
    }
    dispatch(action)
}

export const redux_details_Category = (id) => async (dispatch) => {
    const { data } = await apiCategory.getAll(); 
    const action = {
        type: DETAILS_CATE,
        payload: data
    }
    dispatch(action)
}

export const redux_add_Product = async (dispatch) => {
    const { data } = await apiRequest.post(); 
    console.log(data);
    const action = {
        type: ADD_ITEM,
        payload: data
    }
    dispatch(action)
}

export const redux_delete_Product = (id) => async (dispatch) => {
    const { data } = await apiRequest.delete(`/${id}`);
    console.log(data);
    const action = {
        type: DELETE_ITEM,
        payload: data
    }
    dispatch(action)
}





