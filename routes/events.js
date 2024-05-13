import express from "express";
import { getEvents } from "../controllers/events/index.js";
import { addUser, getUsers } from "../controllers/users/index.js";

export const router = express.Router();

router.get("/", getEvents);
router.post("/:id", addUser);
router.get("/:id", getUsers);
