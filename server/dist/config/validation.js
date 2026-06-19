"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enquirySchema = void 0;
const zod_1 = require("zod");
const enquirySchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters long'),
    email: zod_1.z.string().email('Invalid email format'),
    phone: zod_1.z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits')
});
exports.enquirySchema = enquirySchema;
//# sourceMappingURL=validation.js.map