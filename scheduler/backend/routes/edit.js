import express from "express"
import {edituser, editFname,editLname,editSchool, editComplete } from "../controller/edit.js"

const router = express.Router()


router.put("/edituser", edituser)
router.put("/editfname", editFname)
router.put("/editlanme", editLname)
router.put("/editschool", editSchool)
router.put("/edit-complete", editComplete)
export default router