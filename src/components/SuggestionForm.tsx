import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SuggestionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SuggestionData) => void;
}

export interface SuggestionData {
  category: string;
  problem: string;
  solution: string;
}

const categories = [
  'Corporate',
  'Society',
  'Park & Public Spaces',
  'Daily Routine',
  'Health & Wellness',
  'Education',
  'Finance',
  'Technology',
  'Environment',
  'Transportation',
  'Retail',
  'Entertainment',
  'Others'
];

const SuggestionForm: React.FC<SuggestionFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<SuggestionData>({
    category: '',
    problem: '',
    solution: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.problem) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Suggest a Problem</h2>
              <p className="text-gray-300 mb-8">
                Help us understand the challenges you're facing. Our team is here to support you in finding solutions.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6 max-w-2xl mx-auto">
                  {/* Category Field */}
                  <div className="space-y-2">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-300">
                      Category <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-skyblue/50 focus:border-skyblue/50 outline-none transition-all cursor-pointer pr-10"
                        required
                      >
                        <option value="" className="bg-navy/90">Select a category</option>
                        {categories.map((category) => (
                          <option key={category} value={category} className="bg-navy/90 text-white">
                            {category}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">What area does this problem belong to?</p>
                  </div>

                  {/* Problem Statement Field */}
                  <div className="space-y-2">
                    <label htmlFor="problem" className="block text-sm font-medium text-gray-300">
                      Problem Statement <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      rows={4}
                      value={formData.problem}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-skyblue/50 focus:border-skyblue/50 outline-none resize-none transition-all"
                      placeholder="Describe the problem you're facing..."
                      required
                    />
                    <p className="text-xs text-gray-400">Be as detailed as possible</p>
                  </div>

                  {/* Solution Field */}
                  <div className="space-y-2">
                    <label htmlFor="solution" className="block text-sm font-medium text-gray-300">
                      Your Solution Idea (Optional)
                    </label>
                    <textarea
                      id="solution"
                      name="solution"
                      rows={4}
                      value={formData.solution}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-skyblue/50 focus:border-skyblue/50 outline-none resize-none transition-all"
                      placeholder="How would you solve this? (Optional)"
                    />
                    <p className="text-xs text-gray-400">Your ideas matter to us!</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 text-sm font-medium rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2.5 text-sm font-medium rounded-lg bg-skyblue/90 hover:bg-skyblue text-white transition-colors flex items-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Suggestion'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuggestionForm;
