import Listings from "../models/listing-model.js";

export const getListings = async (req, res, next) => {
  try {
    let teacher = req.query.teacher;
    if (teacher === undefined) {
      teacher = {};
    } else {
      teacher = { teacher };
    }
    let listings = await Listings.find(teacher);
    if (!listings || listings.length === 0) throw new Error("No List");
    else return res.status(200).json({ success: true, data: listings });
  } catch (err) {
    console.log("Error in getting all the yoga classes", err);
    return res.status(401).json({ success: false, error: "Server Error" });
  }
};
