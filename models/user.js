import { Schema, model } from "mongoose";
import Joi from "joi";
const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const fullnameRegexp =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const userSchema = Schema(
  {
    fullname: {
      type: String,
      match: fullnameRegexp,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
    },
    birthday: {
      type: String,
      required: [true, "Birthday is required"],
    },
    source: {
      type: String,
      required: [true, "Source is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  },
  { versionKey: false, timestamps: true }
);
export const addSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().required(),
  birthday: Joi.string().required(),
  source: Joi.string().required(),
});
export const User = model("users", userSchema);
