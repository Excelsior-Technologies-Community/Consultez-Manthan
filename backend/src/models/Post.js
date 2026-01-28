import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    image: String,

    category: {
      type: String, // slug store karenge
    },

    tags: [
      {
        type: String, // slug store karenge
      },
    ],

    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
