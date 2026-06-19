"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enquiry = void 0;
const mongoose_1 = require("mongoose");
const enquirySchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: String,
    createdAt: Date
});
exports.Enquiry = (0, mongoose_1.model)("Enquiry", enquirySchema);
//# sourceMappingURL=Enquiry.js.map