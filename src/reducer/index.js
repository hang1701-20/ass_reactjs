import apiRequest from '../api/axiosHttp'
import { ALL_ITEM, DETAILS_ITEM, ALL_CATE, DETAILS_CATE, ALL_CATEPOST,ALL_POST } from '../actions';

const initState = {
    data: [],
}

const dataFetchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ALL_ITEM':
            return {
                ...state,
                data: action.payload,
            };
        case 'DETAILS_ITEM':
            return {
                ...state,
                data: action.payload,
            }
        case 'DETAILS_CATE':
            return {
                ...state,
                data: action.payload,
            }
        case 'ADD_ITEM':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case 'ALL_CATE':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case 'ALL_CATEPOST':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case 'ALL_POST':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state;

    }
};

export default dataFetchReducer;
