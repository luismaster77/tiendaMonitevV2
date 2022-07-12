module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("planes", {
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.FLOAT,
      },
      num_dispositivos_conectados: {
        type: Sequelize.STRING
      },
      num_usuarios: {
        type: Sequelize.INTEGER
      },
      num_puntos_mes: {
        type: Sequelize.STRING
      },
      soporte_email: {
        type: Sequelize.BOOLEAN
      },
      configura_logo: {
        type: Sequelize.BOOLEAN
      },
      personaliza_colores: {
        type: Sequelize.BOOLEAN
      }
    });
    return Plan;
  };