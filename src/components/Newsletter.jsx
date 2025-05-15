import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-white p-8 rounded-2xl my-10 text-center shadow-md">
      <h3 className="text-3xl font-bold text-purple-800 mb-4">Stay Connected</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Subscribe to our newsletter to receive weekly devotionals, free resources, and updates on upcoming events directly in your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Your Email Address"
          required
          className="flex-1 min-w-0 py-3 px-4 rounded-full border border-gray-300 mb-4 md:mb-0 md:mr-2 text-base"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 shadow text-base"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;