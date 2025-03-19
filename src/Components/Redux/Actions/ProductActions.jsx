export const ActionTypes = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    SELECTED_PRODUCT: 'SELECTED_PRODUCT',
    REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECT_PRODUCT',
    ADD_TO_CART: 'ADD_TO_CART',
};

export const setProduct = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
}

export const removeSelectedProduct = () =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
}