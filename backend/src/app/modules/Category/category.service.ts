import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const addCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

export const CategoryService = {
  addCategoryIntoDB,
};
