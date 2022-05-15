const express = require("express")
const router = express.Router();
const tvShows = require("../Models/TvShows.schema")
const crudController = require("../Controllers/Crud.Controller")
const tvShowsController = crudController(tvShows)

router.get("/",tvShowsController.getAll)
router.get("/:id",tvShowsController.getOne)

module.exports = router