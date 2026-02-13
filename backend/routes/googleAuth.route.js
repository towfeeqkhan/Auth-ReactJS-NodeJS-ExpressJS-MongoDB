import express from "express";
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
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const user = req.user;

    // Generate JWT
    const token = generateToken(user._id, user.name);

    // Redirect to frontend with token
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  },
);

export default router;
