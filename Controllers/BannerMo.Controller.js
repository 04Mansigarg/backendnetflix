const express = require("express")
const router = express.Router();
const bannerMo = require("../Models/Banner_mo.schema")
const crudController = require("../Controllers/Crud.Controller")
const BannerMoController = crudController(bannerMo)

router.get("/",BannerMoController.getAll)
router.get("/:id",BannerMoController.getOne)

module.exports = router