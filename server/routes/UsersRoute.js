import express from "express"
import { deleteUser, getAllUsers, getUserById, updateBanStatus, updateUser } from "../controller/UsersController.js"
import { verifyAdmin, verifyUser } from "../verifyToken.js"

const router = express.Router()

// router.put("/updateUser/:id", verifyUser, updateUser)

// router.put("/updateBanStatus/:id", verifyAdmin, updateBanStatus)

// router.delete("/deleteUser/:id", verifyUser, deleteUser)

// router.get("/getUser/:id", verifyUser, getUserById)

// router.get("/getAllUsers", verifyAdmin, getAllUsers)

router.put("/updateUser/:id", updateUser)

router.put("/updateBanStatus/:id", updateBanStatus)

router.delete("/deleteUser/:id", deleteUser)

router.get("/getUser/:id", getUserById)

router.get("/getAllUsers", getAllUsers)

export default router