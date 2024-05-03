import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router();

router.post("/add", CategoryController.addCategory);

export const CategoryRoutes = router;
