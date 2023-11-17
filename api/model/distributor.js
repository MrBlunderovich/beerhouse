import mongoose from "mongoose";

const distributorSchema = new mongoose.Schema({
  barcode: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  condition_ok: {
    type: Boolean,
    default: true,
  },
  is_archived: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
});

export const Distributor = mongoose.model("Distributor", distributorSchema);
