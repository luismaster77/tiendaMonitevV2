module.exports = app => {
    const planes = require("../controllers/planes.controller.js");
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();
    // Create a new plan
    router.post("/createPlan", planes.createPlan);
    // Retrieve all Tutorials
    router.get("/findPlanes", planes.findAll);
    // Retrieve all published Tutorials
    router.get("/published", planes.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", planes.findOne);
    // Update a Tutorial with id
    router.put("/:id", planes.update);
    // Delete a Tutorial with id
    router.delete("/:id", planes.delete);
    // Create a new Tutorial
    router.delete("/", planes.deleteAll);
    // Create user request
    router.post("/createUser", user.createUserRequest);
    // Find user request
    router.post("/findUser", user.findAll);

    app.use('/api/planes', router);
  };