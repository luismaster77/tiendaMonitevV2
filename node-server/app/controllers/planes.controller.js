const db = require("../models");
const Plan = db.planes;
const CompraPlan = db.comprasPlan;
const Op = db.Sequelize.Op;

// CREAR PLANES
exports.createPlan = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Crear planes
  const plan = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    num_dispositivos_conectados: req.body.num_dispositivos_conectados,
    num_usuarios: req.body.num_usuarios,
    num_puntos_mes: req.body.num_puntos_mes,
    soporte_email: req.body.soporte_email ? req.body.soporte_email : false,
    configurar_logo: req.body.configurar_logo ? req.body.configurar_logo :false,
    personalizar_colores: req.body.personalizar_colores ? req.body.personalizar_colores : false
  };

  // Guardar plan en base de datos
  Plan.create(plan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error mientras se creaba un plan."
      });
    });
  
};

// CREAR COMPRA_PLANES
exports.create = (req, res) => {
  if (!req.body.nombre_plan) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Crear planes
  const compraPlan = {
    nombre_plan: req.body.nombre,
    precio: req.body.precio,
    nombre_cliente: req.body.nombre_cliente,
    tipo_documento_cliente: req.body.tipo_documento_cliente,
    cedula_cliente: req.body.cedula_cliente,
    email_cliente: req.body.email_cliente,
    telefono_cliente: req.body.telefono,
    fecha_inicio_compra_plan: req.body.fecha_inicio_compra_plan,
    fecha_fin_vencimiento_compra_plan: req.body.fecha_fin_vencimiento_compra_plan
  };

  // Guadar plan en base de datos
  CompraPlan.create(compraPlan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error mientras se creaba un plan."
      });
    });
  
};



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    Plan.findAll({ where: condition })
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