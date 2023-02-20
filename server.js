const express = require("express");
const connectDB = require("./config/db");
const userApi = require("./routes/api/users");
const authApi = require("./routes/api/auth");

const app = express();

//Database Connection
connectDB();

// Init Middlware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Api Running"));

//routes
app.use("/api/users", userApi);
app.use("/api/auth", authApi);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
