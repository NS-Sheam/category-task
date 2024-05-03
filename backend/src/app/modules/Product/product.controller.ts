import { Request, Response } from "express";
import { ProductService } from "./product.service";

const addProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.addProductIntoDB(req.body, req.files);
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getProductByIdFromDB(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "All products fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

const getProductByCategory = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getProductByCategoryFromDB(req.params.category);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

export const ProductController = {
  addProduct,
  getAllProducts,
  getProductById,
  getProductByCategory,
};
