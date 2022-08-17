import express from "express"
import { login, logout, register } from "../controller/AuthController.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)

export default router