const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

// mongoose
//   .connect(`${process.env.DATABASE}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connected to DB"));

mongoose
  .connect(`mongodb+srv://timothydeng93:KnesorS8pNn5N6yM@cluster0.vauqr1p.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"));


mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
