import express from "express"
import {removeAsses, removeClass} from "../controller/remove.js"

const router = express.Router()


router.delete("/remove-asses", removeAsses)
router.delete("/remove-class", removeClass)


export default router