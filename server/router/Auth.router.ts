import express from "express";
import { AuthController } from "../controller/Auth.controller.js";
import AuthMiddleware from "../middleware/Auth.middleware.js";
const router = express.Router();

router.post("/login", AuthController);
router.get("/me", AuthMiddleware, (req, res) => {
  res.status(200).json({ user: req.user });
});

export default router;
