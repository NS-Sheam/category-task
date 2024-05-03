import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
    const { productData, relatedProducts } = useLoaderData();
    const [selectedImage, setSelectedImage] = useState(productData.images[0]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="container mx-auto py-10 px-4 bg-slate-100">
            {/* Main Product section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Product Image */}
                <div className="flex flex-col w-96 mx-auto ">
                    <img src={selectedImage} alt="" className="w-full h-96 mb-4 object-contain" />
                    <div className="flex justify-center gap-3">
                        {productData.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className="w-1/4 cursor-pointer max-h-32 object-contain"
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>
                {/* Product Information */}
                <div>
                    <h1 className="text-3xl font-semibold mb-4">{productData.name}</h1>
                    <p className="text-lg mb-6">{productData.description}</p>
                    {/* Specifications */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
                        <ul className="list-disc pl-6">
                            {Object.entries(productData.specification).map(([key, value]) => (
                                <li key={key} className="mb-2">
                                    <strong>{key}:</strong> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related Products section */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {relatedProducts.map((relatedProduct) => (
                        <ProductCard product={relatedProduct} key={relatedProduct?._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
