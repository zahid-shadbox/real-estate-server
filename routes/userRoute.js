import express  from "express";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavurites, toFav } from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0config.js";

const router = express.Router();

router.post("/register",jwtCheck, createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",getAllBookings)
router.post("/removeBooking/:id",cancelBooking)
router.post("/toFav/:rid",toFav)
router.get("/allFav",getAllFavurites)

export {router as userRoute}