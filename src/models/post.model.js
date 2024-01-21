import { mongoose, Schema } from "mongoose"

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: text,
        required: true,
    },
    save_count: {
        type: Number,
        default: 0
    },
    like_count: {
        type: Number,
        default: Number,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Category"
        }
    ],
    tag_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tag"
        }
    ],
    status: {
        type: String,
        default: true,
    },
}, { timestamps: true })

export const Post = mongoose.model("Post", postSchema)