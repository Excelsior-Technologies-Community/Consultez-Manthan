import Category from "../models/Category.js";

// GET /api/categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

// POST /api/categories
export const createCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;

    if (!name || !slug) {
      return res.status(400).json({
        message: "Name and slug are required",
      });
    }

    const exists = await Category.findOne({ slug });
    if (exists) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }

    const category = await Category.create({ name, slug });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create category",
    });
  }
};
