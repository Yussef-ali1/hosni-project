"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBox, FaTag, FaDollarSign, FaShoppingCart } from 'react-icons/fa'

interface Image {
  image_url: string
  image_Id: string
  _id: string
}

interface Product {
  _id: string
  title: string
  price: number
  description: string
  category: string
  images: Image[]
  stock: number
  rating: number
  createdAt: string
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/product/getallproducts')
        const data = await response.json()        
        setProducts(data.products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
        >
          <div className="relative">
            <Image
              src={product.images[0]?.image_url || "/placeholder.svg"}
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
              unoptimized
            />
            <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full">
              <FaTag className="inline text-green-600 mr-1" />
              <span className="text-sm font-medium">{product.category}</span>
            </div>
          </div>
    
          <div className="p-5">
            <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <FaBox className="mr-2 text-green-600" />
                <span>Stock: {product.stock}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaDollarSign className="mr-2 text-green-600" />
                <span className="text-lg font-semibold">{product.price.toFixed(2)}</span>
              </div>
            </div>
    
            <Link
              href={`/products/${product._id}`}
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <FaShoppingCart />
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
    
  )
}
