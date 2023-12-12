import express from "express"

import {grabAsses,grabClasses, grabAssesComplete } from "../controller/grab.js"

const router = express.Router()

router.get("/grab-asses", grabAsses)
router.get("/grab-classes",grabClasses)
router.get("/grab-asses-complete", grabAssesComplete)
export default router