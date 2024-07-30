const express = require("express");
const app = express();
const DBconnect = require("./src/db/connection");
const todoRouter = require("./src/routes/todoroute");

const PORT = 3004;

app.use(express.json());
DBconnect();

app.use("/api/todos", todoRouter);

app.get("/", (req, res) => {
    console.log("checking");
    res.json({ message: "res from api" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
