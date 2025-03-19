import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Product = () => {
  const products = useSelector((state) => state.allProducts.products) || [];

  return (
    <div className="container mx-auto px-4 mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mt-96">
        {products.map((product) => {
          const { id, image, title, price, category } = product;
          return (
            <Link to={`/product/${id}`} key={id} className="block">
              <div className="product-card border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col overflow-hidden hover:bg-slate-200">
                <div className="product-image p-4 flex justify-center bg-slate-150">
                  <img 
                    src={image} 
                    alt={title} 
                    className="h-48 object-contain"
                  />
                </div>
                <div className="product-details flex flex-col flex-grow">
                  <div className="h-14 mb-2">
                    <h2 className="text-lg font-medium line-clamp-2 pl-3.5">{title}</h2>
                  </div>
                  <div className=" text-sm text-gray-500 mb-2 pl-3.5">{category}</div>
                  <div className="text-lg font-bold mt-auto mb-3">${price}</div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-blue py-2 px-4 rounded transition-colors duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};