import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { z } from 'zod';
import Enquiry from './models/Enquiry';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Validation schema
const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email format'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits')
});

// Route
app.post('/api/enquiry', async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const validatedData = enquirySchema.parse(req.body);

    // Save to database
    const newEnquiry = new Enquiry(validatedData);
    await newEnquiry.save();

    res.status(200).json({ success: true, message: 'Enquiry received!' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => ({
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

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
