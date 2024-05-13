import { Schema, model } from "mongoose";

const eventSchema = Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  event_date: {
    type: String,
  },
  organizer: {
    type: String,
  },
});
export const Event = model("events", eventSchema);
