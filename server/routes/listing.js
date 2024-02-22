import express from "express";
import { getListings } from "../controllers/listing-controller.js";

const router = express.Router();
router.get("/getlisting", getListings);

export default router;
