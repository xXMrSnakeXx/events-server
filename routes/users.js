import express from "express";
import { addUser, getUsers } from "../controllers/users/index.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

export const usersRouter = express.Router();

usersRouter.post("/:id", ctrlWrapper(addUser));
usersRouter.get("/:id", ctrlWrapper(getUsers));
