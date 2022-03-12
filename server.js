require("dotenv/config");
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection to MongoDb"))
  .catch(() => console.error("MongoDb Connection Failed"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
