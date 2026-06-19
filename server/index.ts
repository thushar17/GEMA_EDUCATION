import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { enquirySchema } from './config/validation';
import { z } from 'zod'
import { Enquiry } from './models/Enquiry';
import connectDb from './config/db';

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
app.get('/api/enquiry', async (req, res) => {
  res.json("server started")
})
app.post('/api/enquiry', async (req, res) => {
  try {
    // Validate request body
    const validatedData = enquirySchema.parse(req.body);

    // Save to database
    const newEnquiry = new Enquiry(validatedData);
    await newEnquiry.save();

    res.status(200).json({ success: true, message: 'Enquiry received!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join('.'),
        message: err.message
      }));
      res.status(400).json({ success: false, errors });
    } else {
      console.error('Server error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});