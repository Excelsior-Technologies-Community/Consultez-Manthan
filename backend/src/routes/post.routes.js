import express from "express";
import { getPosts, getPostBySlug, createPost } from "../Controller/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:slug", getPostBySlug);
router.post("/", createPost);

export default router;
