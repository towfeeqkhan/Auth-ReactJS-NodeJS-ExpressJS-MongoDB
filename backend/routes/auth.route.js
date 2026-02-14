import express from "express";
import {
  loginUser,
  logoutUser,
  refreshTokenHandler,
  registerUser,
  verifyUser,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", protectRoute, verifyUser);
router.post("/refresh", refreshTokenHandler);
router.post("/logout", logoutUser);

export default router;
