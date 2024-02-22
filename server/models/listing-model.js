import mongoose from "mongoose";

const listingsSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  description: String,
  cost: String,
  duration: String,
  difficulty: String,
  img: String,
});

const Listings = mongoose.model("listings", listingsSchema);
export default Listings;
