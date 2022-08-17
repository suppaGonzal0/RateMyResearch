import express from "express"
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controller/UsersController.js"
import { verifyAdmin, verifyUser } from "../verifyToken.js"

const router = express.Router()

router.put("/updateUser/:id", verifyUser, updateUser)

router.delete("/deleteUser/:id", verifyUser, deleteUser)

router.get("/getUser/:id", verifyUser, getUserById)

router.get("/getAllUsers", verifyAdmin, getAllUsers)

export default router