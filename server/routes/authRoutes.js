import express from "express"; 
import { isAuthenticated, login, logOut, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from "../controller/authController.js"; 
import userAuth from "../middleware/userAuth.js"; 
const authRouter = express.Router(); 
authRouter.post("/register", register); 
authRouter.post("/login", login);
authRouter.post("/logout", logOut); 
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp); 
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.get("/is-auth", userAuth, isAuthenticated);

export default authRouter;