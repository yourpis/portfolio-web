'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactEmail } from '@/actions/sendEmail';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    requirement: 'Enterprise Web Infrastructure',
    specifications: '',
  });

  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormAction = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setIsSubmitted(false);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.error) {
        setSubmitError(result.error);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      
      // Reset the form fields
      setFormState({
        name: '',
        email: '',
        requirement: 'Enterprise Web Infrastructure',
        specifications: '',
      });
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer Motion variants for stagger reveal
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-white text-neutral-900 py-28 md:py-36 flex flex-col items-center selection:bg-neutral-100">
      <div className="w-[95vw] max-w-[1200px] mx-auto px-4 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
        >
          {/* Left Column: Minimalist Header */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 mb-6 leading-[1.1]">
              Let's build something.
            </h2>
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-md">
              Submit a specialized operational request or architectural inquiry.
            </p>
          </motion.div>

          {/* Right Column: High-Contrast Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <form action={handleFormAction} className="flex flex-col gap-10">
              {/* Full Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase font-bold tracking-widest text-neutral-400 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  placeholder="e.g. Jean Dupont"
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-neutral-200 focus:border-neutral-300 bg-transparent py-3 text-base font-normal focus:outline-none transition-colors duration-300 text-neutral-900 placeholder:text-neutral-300 disabled:opacity-50"
                />
                {/* Animated Underline */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-950 origin-left scale-x-0 transition-transform duration-300 ease-out"
                  style={{ transform: activeField === 'name' ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase font-bold tracking-widest text-neutral-400 mb-1"
                >
                  Corporate / Direct Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  placeholder="e.g. jean@enterprise.com"
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-neutral-200 focus:border-neutral-300 bg-transparent py-3 text-base font-normal focus:outline-none transition-colors duration-300 text-neutral-900 placeholder:text-neutral-300 disabled:opacity-50"
                />
                {/* Animated Underline */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-950 origin-left scale-x-0 transition-transform duration-300 ease-out"
                  style={{ transform: activeField === 'email' ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </div>

              {/* Dropdown Select Field */}
              <div className="relative">
                <label
                  htmlFor="requirement"
                  className="block text-xs uppercase font-bold tracking-widest text-neutral-400 mb-1"
                >
                  Operational Requirement
                </label>
                <div className="relative flex items-center">
                  <select
                    id="requirement"
                    name="requirement"
                    value={formState.requirement}
                    onChange={handleChange}
                    onFocus={() => setActiveField('requirement')}
                    onBlur={() => setActiveField(null)}
                    disabled={isSubmitting}
                    className="w-full border-b border-neutral-200 focus:border-neutral-300 bg-transparent py-3 pr-8 text-base font-normal focus:outline-none transition-colors duration-300 text-neutral-900 cursor-pointer appearance-none disabled:opacity-50"
                  >
                    <option value="Enterprise Web Infrastructure">Enterprise Web Infrastructure</option>
                    <option value="Hardware Prototyping">Hardware Prototyping</option>
                    <option value="Production Logistics">Production Logistics</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-0 pointer-events-none text-neutral-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {/* Animated Underline */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-950 origin-left scale-x-0 transition-transform duration-300 ease-out"
                  style={{
                    transform: activeField === 'requirement' ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </div>

              {/* Project Specifications Textarea */}
              <div className="relative">
                <label
                  htmlFor="specifications"
                  className="block text-xs uppercase font-bold tracking-widest text-neutral-400 mb-1"
                >
                  Project Specifications
                </label>
                <textarea
                  id="specifications"
                  name="specifications"
                  value={formState.specifications}
                  onChange={handleChange}
                  onFocus={() => setActiveField('specifications')}
                  onBlur={() => setActiveField(null)}
                  placeholder="Describe the scope, constraints, and timeline of your operational request..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-neutral-200 focus:border-neutral-300 bg-transparent py-3 text-base font-normal focus:outline-none transition-colors duration-300 text-neutral-900 placeholder:text-neutral-300 resize-none disabled:opacity-50"
                />
                {/* Animated Underline */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-neutral-950 origin-left scale-x-0 transition-transform duration-300 ease-out"
                  style={{
                    transform: activeField === 'specifications' ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </div>

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm font-medium"
                >
                  Transmission failed: {submitError}
                </motion.div>
              )}

              {/* Submit Button & Success Message */}
              <div className="flex flex-col gap-4 justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit bg-neutral-950 text-white font-medium text-sm tracking-widest uppercase py-4 px-8 rounded-full shadow-sm hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT REQUEST ->'}
                </button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-600 text-sm font-semibold tracking-wide"
                  >
                    Request received. I will contact you shortly.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
