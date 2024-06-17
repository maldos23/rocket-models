import { model, Schema } from "mongoose";

const identitySchema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
 
});

const productSchema = new Schema({
  productID: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: false },
  sku: { type: String, required: false },
});

const Product = model("products", productSchema);

export default Product;
