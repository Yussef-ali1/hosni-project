"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Product {
  _id: string
  title: string
  price: number
  image?: string
  images?: string[]
  description: string
  category: string
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/product/getallproducts')
        const data = await response.json()        
        setProducts(data.products)
        console.log(data.products);
        
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  const getImageUrl = (imagePath: string | undefined) => {
    if (!imagePath) return "/placeholder.svg"
    return `http://localhost:5000/${imagePath.replace(/\\/g, '/')}`
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
<Image
  src={getImageUrl(product.image || product.images?.[0])}
  alt={product.title}
  width={300}
  height={200}
  className="w-full h-48 object-cover"
  unoptimized
/>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link
              href={`/products/${product._id}`}
              className="block text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
};