const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
    max: 40,
  },
  items: [
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("product", ProductSchema);