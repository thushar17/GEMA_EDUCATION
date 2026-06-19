"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const enquiry_1 = __importDefault(require("./routes/enquiry"));
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
app.use('/api', enquiry_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map