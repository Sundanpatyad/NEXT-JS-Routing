import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - Our Company</title>
        <meta name="description" content="Learn about Our Company" />
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
        <h1 className="text-4xl font-bold text-center mb-8">About Our Company</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Our Company is a leading provider of innovative solutions for businesses of all sizes. Founded in 2010, we have been at the forefront of technological advancements, helping our clients stay ahead in an ever-changing digital landscape.
          </p>
          <p className="text-lg mb-6">
            Our team of experts brings together a wealth of knowledge and experience from various industries, allowing us to offer tailored solutions that meet the unique needs of each client.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            To empower businesses with cutting-edge technology and unparalleled support, enabling them to achieve their full potential in the digital age.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg mb-6">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Excellence</li>
            <li>Customer-centricity</li>
          </ul>
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

export default AboutPage;