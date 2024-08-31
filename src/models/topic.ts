import mongoose, { Schema, Types } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
