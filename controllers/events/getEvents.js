import { Event } from "../../models/index.js";

export const getEvents = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const result = await Event.find().skip(skip).limit(limit);

  console.log(result.length);
  res.json(result);
};
