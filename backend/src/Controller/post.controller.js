import Post from "../models/Post.js";

/**
 * =====================================================
 * GET /api/posts
 * - Pagination
 * - Search
 * - Only published posts
 * =====================================================
 */
export const getPosts = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const query = { published: true };

    // 🔍 search
    if (req.query.search) {
      query.title = {
        $regex: req.query.search,
        $options: "i",
      };
    }

    // 📂 category filter
    if (req.query.category) {
      query.category = req.query.category;
    }

    // 🏷️ tag filter
    if (req.query.tag) {
      query.tags = req.query.tag;
    }

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
        limit,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

/**
 * =====================================================
 * GET /api/posts/:slug
 * - Single post by slug
 * =====================================================
 */
export const getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const post = await Post.findOne({
      slug,
      published: true,
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Get post by slug error:", error.message);
    res.status(500).json({ message: "Failed to fetch post" });
  }
};

/**
 * =====================================================
 * POST /api/posts
 * - Create new post (admin use, no auth yet)
 * =====================================================
 */
export const createPost = async (req, res) => {
  try {
    const { title, slug, content, image, category, tags, published } = req.body;

    if (!title || !slug || !content) {
      return res
        .status(400)
        .json({ message: "Title, slug and content are required" });
    }

    const existingPost = await Post.findOne({ slug });
    if (existingPost) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    const post = await Post.create({
      title,
      slug,
      content,
      image,
      category,
      tags,
      published,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Create post error:", error.message);
    res.status(500).json({ message: "Failed to create post" });
  }
};
