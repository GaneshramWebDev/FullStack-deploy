import express from "express";
import userAuth from "../Middleware/userAuth.js";
import { getUserData } from "../Controllers/usercontroolers.js";

const router=express.Router();


router.get("/data",userAuth,getUserData)






export default router;