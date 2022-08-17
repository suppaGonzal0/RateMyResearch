import express from "express"
import { addPaper, deletePaper, getAllPapers, getPaperById, updatePaper } from "../controller/PapersController.js"
import { verifyAdmin, verifyUser } from "../verifyToken.js"

const router = express.Router()

router.post("/addPaper", verifyAdmin, addPaper)

router.put("/updatePaper/:id", verifyAdmin, updatePaper)

router.delete("/deletePaper/:id", verifyUser, deletePaper)

router.get("/getPaper/:id", verifyUser, getPaperById)

router.get("/getAllPapers", verifyUser, getAllPapers)

export default router