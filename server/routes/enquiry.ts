import express from 'express';
import { enquirySchema } from '../config/validation';
import { z } from 'zod';
import { Enquiry } from '../models/Enquiry';

const router = express.Router();

router.get('/enquiry', async (req, res) => {
  res.json("server started")
})

router.post('/enquiry', async (req, res) => {
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

export default router;
