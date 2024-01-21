import { mongo, mongoose, Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role_id: {
        type: Schema.types.ObjectId,
        ref: Role,
        required: true,
    },
    status: {
        type: String,
        default: true,
    },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);