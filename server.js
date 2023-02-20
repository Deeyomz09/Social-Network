const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Database Connection
connectDB();

app.get("/", (req, res) => res.send("Api Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const user = { name: "Diomedes", age: 27, isPrgramming: true };
