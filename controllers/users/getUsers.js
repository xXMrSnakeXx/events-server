import { User } from "../../models/index.js";

export const getUsers = async (req, res) => {
  const { id: owner } = req.params;
  const result = await User.find({ owner });
  res.json(result);
};
