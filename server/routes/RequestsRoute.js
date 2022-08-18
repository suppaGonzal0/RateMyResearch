import express from "express"
import { approveRequest, deleteRequest, getAllRequests, sendRequest } from "../controller/RequestsController.js"
import { verifyAdmin, verifyUser } from "../verifyToken.js"

const router = express.Router()

// router.post("/sendRequest", verifyUser, sendRequest)

// router.delete("/deleteRequest/:id", verifyAdmin, deleteRequest)

// router.post("/approveRequest/:id", verifyAdmin, approveRequest)

// router.get("/getAllRequests", verifyAdmin, getAllRequests)

router.post("/sendRequest", sendRequest)

router.delete("/deleteRequest/:id", deleteRequest)

router.post("/approveRequest/:id", approveRequest)

router.get("/getAllRequests", getAllRequests)

export default router