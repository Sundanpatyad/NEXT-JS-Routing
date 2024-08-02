'use client'

import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [productById, setProductsById] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await response.json();
        setProductsById(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchDataById();
  }, [params.id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!productById) {
    return <div className="flex items-center justify-center min-h-screen">Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">{productById.title}</h1>
      <img src={productById.image} alt={productById.title} className="w-48 h-48 object-cover mb-4" />
      <p className="text-lg mb-2">{productById.description}</p>
      <p className="text-xl font-semibold">Price: ${productById.price}</p>
    </div>
  );
};

export default Page;
