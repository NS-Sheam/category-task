/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div key={product?.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="w-full h-48 ">
                <img src={product?.images[0]} alt={product?.name} className="w-full h-full object-contain " />
            </div>
            <Link to={`/${product._id}`}>
                <h2 className="text-xl font-semibold mt-2 text-blue-800 hover:underline cursor-pointer">{product.name}</h2>

            </Link>
            <p className="text-gray-600 font-bold">Price: ${product?.price}</p>
        </div>
    );
};

export default ProductCard;