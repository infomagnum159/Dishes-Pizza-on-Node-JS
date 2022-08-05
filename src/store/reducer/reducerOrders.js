import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAILURE,
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_FAILURE,
} from '../actions/actionsOrders';

const initialState = {
    loading: false,
    fetchLoading: false,
    error: null,
    fetchError: null,
    orders: [],
};


const reducerOrders = (state = initialState, action) => {
    switch (action.type) {
      case ORDER_REQUEST:
        return {...state, loading: true};
      case ORDER_SUCCESS:
        return {...state, loading: false};
      case ORDER_FAILURE:
        return {...state, loading: false, error: action.payload};
      case FETCH_ORDER_REQUEST:
        return {...state, fetchLoading: true, fetchError: null};
      case FETCH_ORDER_SUCCESS:

        return {...state, orders: action.payload, fetchLoading: false};
      case FETCH_ORDER_FAILURE:
        return {...state, fetchLoading: false, fetchError: action.payload};
      default:
        return state;
    }
  };
  
  export default reducerOrders;