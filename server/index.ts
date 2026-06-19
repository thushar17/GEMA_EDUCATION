import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db';
import enquiryRouter from './routes/enquiry';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDb();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173", "https://gema-education-867n.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Validation schema


// Route
app.use('/api', enquiryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});