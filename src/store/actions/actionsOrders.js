import axiosApi from '../../axiosApi';

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';

export const orderRequest = () => ({ type: ORDER_REQUEST });
export const orderSuccess = () => ({ type: ORDER_SUCCESS });
export const orderFailure = error => ({ type: ORDER_FAILURE, payload: error });

export const fetchOrderRequest = () => ({ type: FETCH_ORDER_REQUEST });
export const fetchOrderSuccess = order => ({ type: FETCH_ORDER_SUCCESS, payload: order });
export const fetchOrderFailure = error => ({ type: FETCH_ORDER_FAILURE, payload: error });

export const fetchOrder = () => {
    return async dispatch => {
        try {
            dispatch(fetchOrderRequest());
            const response = await axiosApi.get('pizzaTypes.json');


            const order = Object.keys(response.data).map(id => ({
                ...response.data[id],
                id
            }));

            dispatch(fetchOrderSuccess(order));
        } catch (e) {
            dispatch(fetchOrderFailure(e));
        }
    };
}

export const deleteOrder = (id) => {
    return async dispatch => {
      try {
        dispatch(orderRequest());
        await axiosApi.delete('pizzaTypes/' + id + '.json');
        dispatch(orderSuccess());
      } catch (error) {
        dispatch(fetchOrderFailure(error));
        throw error;
      }
    }
  };