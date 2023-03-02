import { getOrderNumberAction, orderErrorAction } from "../store/orderReducer"

const orderUrl = 'https://norma.nomoreparties.space/api/orders'

export const fetchOrder = (idArray) => {
    return function (dispatch) {
        fetch(orderUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: idArray }),
        })
        .then((response) => response.json())
        .then((res) => {
            dispatch(getOrderNumberAction(res.order.number))})
        .catch((error) => {
            dispatch(orderErrorAction(error.message))
            dispatch(getOrderNumberAction(null))
          })
        }
    }
