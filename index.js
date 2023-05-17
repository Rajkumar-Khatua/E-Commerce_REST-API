const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
dotenv.config();

// Mongoose Connections String
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongo DB is Connected!")).catch(err => console.log(err));

app.use(cors());
app.use(express.json());
// End Points

// auth route
app.use("/api/auth", authRoute);

// user route
app.use("/api/users", userRoute);

// product route
app.use("/api/products", productRoute);

// cart route
app.use("/api/carts", cartRoute);

// order route
app.use("/api/orders", orderRoute);

const port = 5000
app.listen(port, () => {
    console.log("Backend is listening on port " + port)
});
