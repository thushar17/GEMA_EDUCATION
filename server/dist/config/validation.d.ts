import { z } from 'zod';
declare const enquirySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
}, z.core.$strip>;
export { enquirySchema };
