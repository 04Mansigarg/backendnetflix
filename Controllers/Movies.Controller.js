const express = require("express")
const router = express.Router();
const movies = require("../Models/Movies.schema")
const crudController = require("./Crud.Controller")
const moviesController = crudController(movies)

router.get("/",moviesController.getAll)
router.get("/:id",moviesController.getOne)

module.exports = router