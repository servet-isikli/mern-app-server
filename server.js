const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const productRoutes = require("./routes/productRoutes"); // Örnek olarak ürün rotalarını içe aktarıyoruz
app.use("/api/products", productRoutes);

module.exports = app; // Uygulamayı dışa aktar
