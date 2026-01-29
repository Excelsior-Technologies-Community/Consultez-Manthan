import express from "express";
import {
  createProduct,
  getProducts,
} from "../Controller/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);

export default router;
