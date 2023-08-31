const connect = require("./config/connect");
const bcrypt = require("bcrypt");
connect()
  .then((client) => {
    client
      .db("ReactPin")
      .collection("users")
      .insertOne({
        username: "admin",
        password: bcrypt.hashSync("admin@123", 10),
      });
    //client.close();
  })
  .catch((err) => {
    console.log(err);
  });
