import Tag from "../models/Tag.js";

export const getTags = async (req, res) => {
  const tags = await Tag.find().sort({ name: 1 });
  res.json(tags);
};

export const createTag = async (req, res) => {
  const { name, slug } = req.body;

  if (!name || !slug) {
    return res.status(400).json({ message: "Name and slug required" });
  }

  const exists = await Tag.findOne({ slug });
  if (exists) {
    return res.status(400).json({ message: "Tag already exists" });
  }

  const tag = await Tag.create({ name, slug });
  res.status(201).json(tag);
};
