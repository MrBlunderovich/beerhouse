const mongoose = require("mongoose");
const { CATEGORIES, UNITS, CONDITIONS } = require("../common/constants");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  identification_number: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    enum: UNITS,
  },
  category: {
    type: String,
    required: true,
    enum: CATEGORIES,
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0,
  },
  price: {
    type: Number,
    default: 0,
    min: 0,
  },
  state: {
    type: String,
    default: "normal",
    enum: CONDITIONS,
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

productSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

productSchema.pre("save", function (next) {
  this.id = this._id;
  next();
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
