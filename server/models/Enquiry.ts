import { Schema, model } from "mongoose";

const enquirySchema = new Schema({
  name: String,
  email: String,
  phone: String,
  createdAt: Date
});

export const Enquiry = model("Enquiry", enquirySchema);

