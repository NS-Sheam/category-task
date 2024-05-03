import { NextFunction, Request, Response, Router } from "express";
import { ProductController } from "./product.controller";
import { upload } from "../../utils/sendImageToCloudinary";

const router = Router();

router.post(
  "/add",
  upload.array("files", 10),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  ProductController.addProduct
);

router.get("/all", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

router.get("/category/:category", ProductController.getProductByCategory);

export const ProductRoutes = router;
