import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative z-10 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-8">Contact</h2>
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-5 py-3 bg-[#0f172a] border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-5 py-3 bg-[#0f172a] border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows="4" className="w-full px-5 py-3 bg-[#0f172a] border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none" />
            {status.message && (
              <div className={`p-3 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
                {status.message}
              </div>
            )}
            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50">
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;