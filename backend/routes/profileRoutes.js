// routes/profileRoutes.js
import express from "express";
import { createOrUpdateProfile, getProfile, UpdateProfile } from "../controllers/profileController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Authenticated routes
router.post("/", authMiddleware, createOrUpdateProfile);
router.get("/", authMiddleware, getProfile);
router.put("/", authMiddleware, UpdateProfile);


export default router;
