import {
    DISHES_REQUEST,
    DISHES_SUCCESS,
    DISHES_FAILURE,
    FETCH_PIZZA_REQUEST,
    FETCH_PIZZA_SUCCESS,
    FETCH_PIZZA_FAILURE,
} from '../actions/actionsDishes';

const initialState = {
    loading: false,
    fetchLoading: false,
    error: null,
    fetchError: null,
    pizza: [],
};

const reducerAddPizza = (state = initialState, action) => {
    switch (action.type) {
      case DISHES_REQUEST:
        return {...state, loading: true};
      case DISHES_SUCCESS:
        return {...state, loading: false};
      case DISHES_FAILURE:
        return {...state, loading: false, error: action.payload};
      case FETCH_PIZZA_REQUEST:
        return {...state, fetchLoading: true, fetchError: null};
      case FETCH_PIZZA_SUCCESS:
        return {...state, pizza: action.payload, fetchLoading: false};
      case FETCH_PIZZA_FAILURE:
        return {...state, fetchLoading: false, fetchError: action.payload};
      default:
        return state;
    }
  };
  
  export default reducerAddPizza;