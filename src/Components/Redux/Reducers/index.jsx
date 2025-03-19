import { combineReducers } from 'redux'
import { ProductReducer, selectedProductReducer } from './ProductReducer';

export const rootReducer = combineReducers({
    allProducts: ProductReducer, 
    product: selectedProductReducer,
});