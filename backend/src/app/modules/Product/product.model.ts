import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specification: {
    type: Object,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  images: {
    type: [String],
  },
});

export const Product = model<TProduct>("Product", productSchema);
