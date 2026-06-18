import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

/* ── TypeScript interfaces ── */
interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  general?: string;
}

interface RegistrationFormProps {
  /** Optional: compact mode used inside the sticky sidebar */
  compact?: boolean;
}

/* ── Validation helper ── */
function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  const phoneRegex = /^\d{10}$/;
  if (!data.phone.trim() || !phoneRegex.test(data.phone)) {
    errors.phone = 'Phone number must be exactly 10 digits';
  }
  return errors;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ compact = false }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      console.log('Submitting:', formData);
      await axios.post('http://localhost:8000/api/enquiry', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error: unknown) {
      if (
        axios.isAxiosError(error) &&
        error.response?.data?.errors
      ) {
        // Map server-side Zod errors back to fields
        const serverErrors: FormErrors = {};
        (error.response.data.errors as { field: string; message: string }[]).forEach((err) => {
          serverErrors[err.field as keyof FormErrors] = err.message;
        });
        setErrors(serverErrors);
      } else {
        setErrors({ general: 'Something went wrong. Please try again later.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Field helper ── */
  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border-2 font-semibold text-slate-800 placeholder-slate-400 focus:outline-none transition-colors ${errors[field]
      ? 'border-red-300 bg-red-50 focus:border-red-500'
      : 'border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white'
    }`;

  if (success) {
    return (
      <div className="flex flex-col items-center text-center py-12 px-4 space-y-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-black text-slate-800">Enquiry Received! 🎉</h3>
        <p className="text-slate-500 font-semibold">
          Thank you! Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 text-blue-500 font-bold hover:underline"
        >
          Submit another response →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-${compact ? '4' : '5'}`}>

      {/* General error */}
      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-semibold">{errors.general}</p>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor={`name-${compact ? 'sidebar' : 'main'}`} className="block text-sm font-bold text-slate-700 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id={`name-${compact ? 'sidebar' : 'main'}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter child's full name"
          className={inputClass('name')}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-500 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`email-${compact ? 'sidebar' : 'main'}`} className="block text-sm font-bold text-slate-700 mb-1.5">
          Parent's Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id={`email-${compact ? 'sidebar' : 'main'}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="parent@example.com"
          className={inputClass('email')}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-500 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor={`phone-${compact ? 'sidebar' : 'main'}`} className="block text-sm font-bold text-slate-700 mb-1.5">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          id={`phone-${compact ? 'sidebar' : 'main'}`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className={inputClass('phone')}
          maxLength={10}
        />
        {errors.phone && (
          <p className="mt-1.5 text-sm text-red-500 font-semibold flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-300 text-white font-black py-4 rounded-xl shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Reserving...
          </>
        ) : (
          <>
            Reserve My Seat
          </>
        )}
      </button>
    </form>
  );
};

export default RegistrationForm;
