import { createError } from "../../helpers/index.js";
import { User, addSchema } from "../../models/index.js";

export const addUser = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  const { id: owner } = req.params;
  if (error) {
    throw createError(400, (error.message = "missing required name field"));
  }

  const result = await User.create({ ...req.body, owner });
  res.status(201).json(result);
};
