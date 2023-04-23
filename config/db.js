const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const connectDB = async () =>
  mongoose.connect("mongodb+srv://ramansaini:Depender1@splitit.ine8kor.mongodb.net/?retryWrites=true&w=majority",
    (err, client) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("connected now");
      }
    }
  );

module.exports = connectDB;


