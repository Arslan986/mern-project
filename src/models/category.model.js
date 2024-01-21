import {mongo, mongoose, Schema} from "mongoose";

const categoryScehma = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    staus: {
        type: String,
        default: true,
    },
},{timestamps: true})

export const Category = mongoose.model("Catgory", categoryScehma) 