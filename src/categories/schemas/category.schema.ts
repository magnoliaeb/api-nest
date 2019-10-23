import { Schema } from 'mongoose';

export const CategorySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});
