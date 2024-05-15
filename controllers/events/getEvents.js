import { Event } from "../../models/index.js";

export const getEvents = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const totalEvents = await Event.countDocuments({});
  const result = await Event.find().skip(skip).limit(limit);
  res.json({
    events: result,
    totalEvents
  });
};
