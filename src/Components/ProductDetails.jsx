import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "./Redux/Actions/ProductActions";

export const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { category, description, image, title, price } = product;
    const dispatch = useDispatch();
    const { productId } = useParams();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                // Fixed the template literal syntax with backticks
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                dispatch(selectedProduct(response.data));
            } catch (err) {
                console.log("Error while Fetching: ", err);
            }
        };

        if (productId && productId !== "") fetchProductDetails();

        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [dispatch, productId]);

    return (
        <div className="container mx-auto px-4 py-8">
            {Object.keys(product).length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl font-medium text-gray-600">Loading Product...</div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Product Image Section */}
                        <div className="md:w-1/2 bg-gray-50">
                            <div className="h-96 p-6 flex items-center justify-center">
                                <img 
                                    src={image} 
                                    alt={title} 
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Product Info Section */}
                        <div className="md:w-1/2 p-6">
                            {/* Title with fixed height to accommodate both single and double line titles */}
                            <div className="min-h-[4rem] mb-4">
                                <h1 className="text-2xl font-bold text-gray-800 leading-tight">{title}</h1>
                            </div>
                            
                            {/* Category */}
                            <div className="mb-4">
                                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                    {category}
                                </span>
                            </div>
                            
                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-gray-900">${price}</span>
                            </div>
                            
                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-2">Description</h3>
                                <p className="text-gray-600">{description}</p>
                            </div>
                            
                            {/* Purchase Button */}
                            <div className="mt-auto">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
                                    Purchase
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};