import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>Welcome to Our Company</title>
        <meta name="description" content="Professional home page for our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-between items-center">
          <Link href="/" className="text-xl font-bold text-purple-400 mb-2 sm:mb-0">
            Our Company
          </Link>
          <div className="flex flex-wrap space-x-4">
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-purple-300">
          Welcome to Our Company
        </h1>

        <p className="text-xl sm:text-2xl text-center text-gray-400 mb-12">
          We provide innovative solutions for your business needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Our Products', description: 'Explore our range of high-quality products.', href: '/productdetails' },
            { title: 'Our Services', description: 'Discover the services we offer to help your business grow.', href: '/services' },
            { title: 'About Us', description: 'Learn more about our company and our mission.', href: '/about' },
            { title: 'Contact Us', description: 'Get in touch with our team for any inquiries.', href: '/contact' },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="block p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-purple-400">{item.title} &rarr;</h2>
              <p className="text-gray-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;