"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../config/validation");
const zod_1 = require("zod");
const Enquiry_1 = require("../models/Enquiry");
const router = express_1.default.Router();
router.get('/enquiry', async (req, res) => {
    res.json("server started");
});
router.post('/enquiry', async (req, res) => {
    try {
        // Validate request body
        const validatedData = validation_1.enquirySchema.parse(req.body);
        // Save to database
        const newEnquiry = new Enquiry_1.Enquiry(validatedData);
        await newEnquiry.save();
        res.status(200).json({ success: true, message: 'Enquiry received!' });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            const errors = error.issues.map((err) => ({
                field: err.path.join('.'),
                message: err.message
            }));
            res.status(400).json({ success: false, errors });
        }
        else {
            console.error('Server error:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }
});
exports.default = router;
//# sourceMappingURL=enquiry.js.map