import productService from '../../services/product';

export const getAllProducts =()=>{

    return (dispatch) => {
        productService.getAllProducts()
            .then(response=> dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: response
            }))
            .catch(error=> dispatch({
                type: "GET_ALL_PRODUCTS_ERROR",
                payload: error
            }))
    }
}