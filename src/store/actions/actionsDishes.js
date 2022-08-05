import axiosApi from '../../axiosApi';

export const DISHES_REQUEST = 'DISHES_REQUEST';
export const DISHES_SUCCESS = 'DISHES_SUCCESS';
export const DISHES_FAILURE = 'DISHES_FAILURE';

export const FETCH_PIZZA_REQUEST = 'FETCH_PIZZA_REQUEST';
export const FETCH_PIZZA_SUCCESS = 'FETCH_PIZZA_SUCCESS';
export const FETCH_PIZZA_FAILURE = 'FETCH_PIZZA_FAILURE';

export const dishesRequest = () => ({ type: DISHES_REQUEST });
export const dishesSuccess = () => ({ type: DISHES_SUCCESS });
export const dishesFailure = error => ({ type: DISHES_FAILURE, payload: error });

export const fetchPizzaRequest = () => ({ type: FETCH_PIZZA_REQUEST });
export const fetchPizzaSuccess = pizza => ({ type: FETCH_PIZZA_SUCCESS, payload: pizza });
export const fetchPizzaFailure = error => ({ type: FETCH_PIZZA_FAILURE, payload: error });

export const createPizza = (dishesData) => {
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosApi.post('pizzaTypes.json', dishesData);
            dispatch(dishesSuccess());
        } catch (error) {
            dispatch(dishesFailure(error));
            throw error;
        }
    }
};

export const fetchPizza = () => {
    return async dispatch => {
        try {
            dispatch(fetchPizzaRequest());
            const response = await axiosApi.get('pizzaTypes.json');

            const pizza = Object.keys(response.data).map(id => ({
                ...response.data[id],
                id
            }));

            dispatch(fetchPizzaSuccess(pizza));
        } catch (e) {
            dispatch(fetchPizzaFailure(e));
        }
    };
}

export const editPizza = (id , editPizzaData) => {
    return async dispatch => {
      try {
        dispatch(dishesRequest());
        await axiosApi.put('pizzaTypes/' + id + '.json', editPizzaData);
        dispatch(dishesSuccess());
      } catch (error) {
        dispatch(dishesFailure(error));
        throw error;
      }
    }
  };

  export const deletePizza = (id) => {
    return async dispatch => {
      try {
        dispatch(dishesRequest());
        await axiosApi.delete('pizzaTypes/' + id + '.json');
        dispatch(dishesSuccess());
      } catch (error) {
        dispatch(dishesFailure(error));
        throw error;
      }
    }
  };