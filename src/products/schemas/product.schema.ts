import { Schema } from 'mongoose';

export const ProductShema = new Schema({
  name: { type: String, required: true },
  price: Number,
  status: Boolean,
//   created_at: {
//       type: Date,
//       default: Date.now,
//   },
});
