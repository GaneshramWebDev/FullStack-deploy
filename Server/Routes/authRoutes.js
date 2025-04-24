import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetPasswordOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../Controllers/authControllers.js";
import userAuth from "../Middleware/userAuth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/send-verify-otp", userAuth, sendVerifyOtp);

router.post("/verify-account", userAuth, verifyEmail);
router.get("/is-Auth", userAuth, isAuthenticated);

router.post("/send-reset-otp", sendResetPasswordOtp);
router.post("/reset-password", resetPassword);


export default router;
