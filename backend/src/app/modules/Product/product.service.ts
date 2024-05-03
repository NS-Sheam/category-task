import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const addProductIntoDB = async (payload: TProduct, files: any) => {
  const images: string[] = [];
  if (files && files.length > 0) {
    for (const file of files) {
      const imageName = file?.filename;
      const path = file?.path;

      const { secure_url } = await sendImageToCloudinary(imageName, path);
      console.log(secure_url);

      images.push(secure_url as string);
    }
  }
  payload.images = images;
  const result = (await Product.create(payload)).populate("category");
  console.log(result);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find().populate("category");
  return result;
};

const getProductByCategoryFromDB = async (category: string) => {
  const result = await Product.find({ category: category }).populate("category");
  return result;
};

export const ProductService = {
  addProductIntoDB,
  getAllProductsFromDB,
  getProductByCategoryFromDB,
};
