import express from "express"
import {addClass, addAsses} from "../controller/add.js"

const router = express.Router()


router.post("/add-class", addClass)
router.post("/add-asses", addAsses)

export default router