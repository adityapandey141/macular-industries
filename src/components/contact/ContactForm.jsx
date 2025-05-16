'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        console.log('Success:', data);
      } else {
        setStatus({ submitting: false, submitted: false, error: data.message || 'Submission failed' });
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: true, error: null });
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md mt-10 mb-[30px] ">
      <h1 className="text-2xl sm:text-4xl font-bold text-black mb-6 text-center sm:text-left">
       
        Share your requirements here
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {status.submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="font-bold">Message sent successfully!</p>
            <p>Thank you for contacting us. We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {status.error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p><strong>Error:</strong> {status.error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-base sm:text-xl">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-lg"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-base sm:text-xl">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-lg"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-base sm:text-xl">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-lg"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-base sm:text-xl">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-lg"
                placeholder="Type your message here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
      
              className={`w-full sm:w-auto py-3 px-6  bg-[#ED2236] hover:bg-[#16171A] text-white   font-semibold flex items-center justify-center gap-2 rounded transition-all duration-300 hover:shadow-md cursor-pointer ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status.submitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>Send</>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
