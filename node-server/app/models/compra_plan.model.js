module.exports = (sequelize, Sequelize) => {
    const ComprasPlan = sequelize.define("comprasPlanes", {
      nombre_plan: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.FLOAT
      },
      nombre_cliente: {
        type: Sequelize.STRING
      },
      tipo_documento_cliente: {
        type: Sequelize.STRING
      },
      cedula_cliente: {
        type: Sequelize.INTEGER
      },
      email_cliente: {
        type: Sequelize.STRING
      },
      telefono_cliente: {
        type: Sequelize.INTEGER
      },
      fecha_inicio_compra_plan: {
        type: Sequelize.DATE
      },
      fecha_fin_vencimiento_plan: {
        type: Sequelize.DATE
      }

    });
    return ComprasPlan;
  };