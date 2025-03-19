import { Product } from "./Product";
import { setProduct } from "./Redux/Actions/ProductActions";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from 'react-loading'

export const Products = () =>{

    const products = useSelector((state) => state.allProducts.products) || [];
    const dispatch = useDispatch();

    useEffect (() => {
        const fetchProducts = async () =>{
            await axios(`https://fakestoreapi.com/products?limit=15`)
                .then((res) =>{
                    dispatch(setProduct(res.data));
                })
                .catch((err) => console.log(err));
        }
        fetchProducts();
    },[dispatch]);

    return (
        <div className="products mt-16 pt-8">
            <div className="productswrapper mt-3.5">
                {products ? <Product products={products}/> : <ReactLoading type="spin" color="black" width='20px' height="20px"/>}
                {/* {products? <Product/>: null} */}
                {/* {products.length === 0 ? <h2>Loading Products...</h2> : <Product products={products} />} */}
            </div>
        </div>
    );

}

