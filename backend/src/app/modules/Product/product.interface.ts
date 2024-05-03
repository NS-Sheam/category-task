import { Types } from "mongoose";

export type TSpecification = {
  [key: string]: string;
};

export type TProduct = {
  name: string;
  description: string;
  specification: TSpecification;
  price: number;
  category: Types.ObjectId;
  images?: string[];
};
