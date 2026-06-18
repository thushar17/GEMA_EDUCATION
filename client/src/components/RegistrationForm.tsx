import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await axios.post('http://localhost:5000/api/enquiry', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {
        // Handle server-side validation errors
        const serverErrors: FormErrors = {};
        error.response.data.errors.forEach((err: any) => {
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

  return (
    <section id="register" className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-5/12 bg-gray-50 p-10 flex flex-col justify-center border-r border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to <span className="text-blue-500">Join?</span></h3>
            <p className="text-gray-600 mb-8">
              Fill out the form to reserve your spot. Seats are limited and fill up fast!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                <p className="font-medium text-gray-800">Submit Enquiry</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <p className="font-medium text-gray-800">Receive Welcome Kit</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                <p className="font-medium text-gray-800">Start Learning!</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-10">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Enquiry Received!</h3>
                <p className="text-gray-600">Thank you for registering. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-blue-500 font-medium hover:underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.general && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{errors.general}</p>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.name ? 'border-red-300 focus:border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'}`}
                    placeholder="Enter child's full name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Parent's Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.email ? 'border-red-300 focus:border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'}`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${errors.phone ? 'border-red-300 focus:border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white'}`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {errors.phone}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex justify-center items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
