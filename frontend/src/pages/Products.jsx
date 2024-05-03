import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/product/all`)
      .then(res => res.json())
      .then(data => {
        setProducts(data?.data)
      })

  }, [])

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="w-full h-48 ">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain " />
            </div>
            <Link to={`/${product._id}`}>
              <h2 className="text-xl font-semibold mt-2 text-blue-800 hover:underline cursor-pointer">{product.name}</h2>

            </Link>
            <p className="text-gray-600 font-bold">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
