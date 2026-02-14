import express from "express";
import {
  loginUser,
  registerUser,
  verifyUser,
  refreshTokenHandler,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", protectRoute, verifyUser);
router.post("/refresh", refreshTokenHandler);

export default router;
