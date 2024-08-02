'use client'
import Link from "next/link";
import { useEffect, useState } from "react"

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <div className="text-center text-2xl mt-12">Loading...</div>
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
                            <p className="text-blue-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                            <Link href={`/productdetails/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                                Open Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;