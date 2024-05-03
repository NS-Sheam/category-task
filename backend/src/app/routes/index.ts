import { Router } from "express";
import { CategoryRoutes } from "../modules/Category/category.routes";
import { ProductRoutes } from "../modules/Product/product.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
