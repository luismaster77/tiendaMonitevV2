const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
const db = require("./app/models");
db.sequelize.sync();

/* db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}); */

app.use(cors(corsOptions));
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a nuestro sitio." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8081;
require("./app/routes/planes.routes")(app);
app.listen(PORT, () => {
  console.log(`Servidor activo por el puerto ${PORT}.`);
});