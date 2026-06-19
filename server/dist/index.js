"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const validation_1 = require("./config/validation");
const zod_1 = require("zod");
const Enquiry_1 = require("./models/Enquiry");
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, db_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost:5173", "https://gema-education-867n.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express_1.default.json());
// Validation schema
// Route
app.get('/api/enquiry', async (req, res) => {
    res.json("server started");
});
app.post('/api/enquiry', async (req, res) => {
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map