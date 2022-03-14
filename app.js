require("express-async-error");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./routers/userRouter.js");
const error = require("./middlewares/error.js");
const categoryRouter = require("./routers/categoryRouter.js");
const productRouter = require("./routers/productRouter.js");

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);

app.use(error);

module.exports = app;
