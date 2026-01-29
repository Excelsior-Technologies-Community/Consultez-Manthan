import express from "express";
import {
  getCategories,
  createCategory,
} from "../Controller/category.controller.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory); // 👈 THIS IS REQUIRED

export default router;
