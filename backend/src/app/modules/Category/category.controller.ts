import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const addCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.addCategoryIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

export const CategoryController = {
  addCategory,
};
