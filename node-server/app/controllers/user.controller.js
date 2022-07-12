const db = require("../models");
const bcrypt = require('bcrypt');
const UserRequest = db.userRequest;
const Op = db.Sequelize.Op;

encrypPassword = (password) => {
  return bcrypt.hashSync(password, 12);
}

//CREAR USER_REQUEST
exports.createUserRequest = (req, res) => {
  let passwordEncrypt = encrypPassword(req.body.password);
  if (!req.body.username && !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const userRequest = {
   username: req.body.username,
   password: passwordEncrypt
  };
  // Guadar plan en base de datos
  UserRequest.create(userRequest)
    .then(data => {
      console.log(userRequest)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error mientras se creaba un plan."
      });
    });
  
};

exports.findAll = (req,res) => {
  const nombre = req.query.nombre;
  console.log(req);
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
  UserRequest.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al intentar consultar plan."
      });
    });

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};