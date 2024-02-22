import express from "express";
import connect from "./config/db-config.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user-route.js";
import listingRouter from "./routes/listing.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/user", userRouter);
app.use("/listing", listingRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    message,
    success: false,
    statusCode,
    data: {},
  });
});
app.listen(3000, () => {
  connect();
  console.log("Server start running on portNumber 3000 !!!");
});
