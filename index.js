const express = require("express");
const server = require("./configs/server");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/api/v1/chats", (req, res, next) => {
  res.send([{ chatName: "omar", id: "1" }]);
});

dotenv.config();
server(app);
