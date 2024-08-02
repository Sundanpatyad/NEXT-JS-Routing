import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Services - Our Company</title>
        <meta name="description" content="Services offered by Our Company" />
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
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Consulting', 'Development', 'Design', 'Marketing', 'Support', 'Training'].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">{service}</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
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

export default ServicesPage;