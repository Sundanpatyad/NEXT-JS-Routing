import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact Us - Our Company</title>
        <meta name="description" content="Contact Our Company" />
      </Head>

      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Our Company</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;