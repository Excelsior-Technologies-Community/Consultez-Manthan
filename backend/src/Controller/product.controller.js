import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
  const products = await Product.find({ published: true }).sort({
    createdAt: -1,
  });
  res.json(products);
};

// GET single product by slug
export const getProductBySlug = async (req, res) => {
  const product = await Product.findOne({
    slug: req.params.slug,
    published: true,
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// CREATE product
export const createProduct = async (req, res) => {
  const { title, slug, description, price, image, category } = req.body;

  const product = await Product.create({
    title,
    slug,
    description,
    price,
    image,
    category,
  });

  res.status(201).json(product);
};
