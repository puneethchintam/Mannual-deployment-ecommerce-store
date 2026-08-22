const mongoose = require("mongoose");
require("dotenv/config");

const Product = require("./model/ProductModal");
const SHOP_DATA = require("./shop-data");

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDB = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(SHOP_DATA);

    console.log("Products added successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
};

seedDB();