const express = require("express")
const router = express.Router();
const bannerTv = require("../Models/Banner_tv.schema")
const crudController = require("./Crud.Controller")
const BannerTvController = crudController(bannerTv)

router.get("/",BannerTvController.getAll)
router.get("/:id",BannerTvController.getOne)

module.exports = router