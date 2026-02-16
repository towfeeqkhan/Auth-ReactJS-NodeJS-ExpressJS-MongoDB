import bcrypt from "bcrypt";
import express from "express";
import ms from "ms";
import passport from "passport";
import { generateToken } from "../utils/generateToken.js";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL || "http://localhost:5173"}/login`,
  }),
  async (req, res) => {
    try {
      const user = req.user;

      // Generate access + refresh tokens
      const { accessToken, refreshToken } = generateToken(
        user._id,
        user.name,
        user.role,
      );

      // Hash refresh token
      const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
      user.refreshToken = hashedRefreshToken;
      await user.save();

      // Set refresh token cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: ms(process.env.JWT_REFRESH_KEY_EXPIRES_IN || "7d"),
      });

      // Redirect to frontend with access token
      const frontendURL = process.env.FRONTEND_URL || "http://localhost:5173";
      res.redirect(
        `${frontendURL}/auth/google/success?accessToken=${accessToken}`,
      );
    } catch (error) {
      console.log(error);
      res.redirect(
        `${process.env.FRONTEND_URL || "http://localhost:5173"}/login`,
      );
    }
  },
);

export default router;
