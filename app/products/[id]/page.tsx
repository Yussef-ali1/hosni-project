'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaBox, FaTag, FaDollarSign, FaStar } from 'react-icons/fa'

interface Image {
  image_url: string
  image_Id: string
  _id: string
}

interface Product {
  _id: string
  title: string
  description: string
  price: number
  category: string
  images: Image[]
  stock: number
  rating: number
  reviews: any[]
  createdAt: string
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/getproduct/${params.id}`)
        const data = await response.json()
        setProduct(data.product)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image
              src={product.images[0]?.image_url || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-[400px] object-cover"
              unoptimized
            />
          </div>
          
          <div className="md:w-1/2 p-8">
            <div className="flex items-center gap-2 mb-4">
              <FaTag className="text-green-600" />
              <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <FaDollarSign className="mr-2 text-green-600" />
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <FaBox className="mr-2 text-green-600" />
                <span>Stock Available: {product.stock}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <FaStar className="mr-2 text-yellow-400" />
                <span>Rating: {product.rating}/5</span>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
