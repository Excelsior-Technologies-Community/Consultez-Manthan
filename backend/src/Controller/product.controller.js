import Product from "../models/Product.js";

// POST /api/products
export const createProduct = async (req, res) => {
  try {
    const { title, slug, price, image, category } = req.body;

    if (!title || !slug || !price || !image || !category) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await Product.findOne({ slug });
    if (exists) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const product = await Product.create({
      title,
      slug,
      price,
      image,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
};

// GET /api/products
export const getProducts = async (req, res) => {
  try {
    const query = { published: true };

    if (req.query.category) {
      query.category = req.query.category;
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};
