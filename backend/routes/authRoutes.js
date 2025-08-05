import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

// router.get("/user", authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("name email");
//     res.json({ success: true, user });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

export default router;
