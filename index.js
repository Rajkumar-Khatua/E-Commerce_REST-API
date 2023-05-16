const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
dotenv.config();

// Mongoose Connections String
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongo DB is Connected!")).catch(err => console.log(err));

app.use(express.json());
// End Points

// auth route
app.use("/api/auth", authRoute);

// user route
app.use("/api/users", userRoute);

const port = 5000
app.listen(port, () => {
    console.log("Backend is listening on port " + port)
});
