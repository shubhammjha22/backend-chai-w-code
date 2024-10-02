import mongoose from "mongoose";

//category, kis user ne create kiya

const product = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  stock:{ 
    type: Number,
    default: 0,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{timestamps: true});

export const Product = mongoose.model("Product",product);
