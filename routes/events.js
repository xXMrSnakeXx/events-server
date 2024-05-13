import express from "express";
import { getEvents } from "../controllers/events/index.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

export const eventsRouter = express.Router();

eventsRouter.get("/", ctrlWrapper(getEvents));
