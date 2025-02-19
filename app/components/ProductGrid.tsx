import Image from "next/image"
import Link from "next/link"

const products = [
  { id: 1, name: "Smart Thermostat", price: 129.99, image: "/placeholder.svg" },
  { id: 2, name: "Solar Panel Kit", price: 599.99, image: "/placeholder.svg" },
  { id: 3, name: "Energy-Efficient LED Bulbs", price: 19.99, image: "/placeholder.svg" },
  { id: 4, name: "Water-Saving Showerhead", price: 39.99, image: "/placeholder.svg" },
  { id: 5, name: "Recycled Paper Notebooks", price: 9.99, image: "/placeholder.svg" },
  { id: 6, name: "Bamboo Toothbrushes", price: 12.99, image: "/placeholder.svg" },
  { id: 7, name: "Reusable Water Bottle", price: 24.99, image: "/placeholder.svg" },
  { id: 8, name: "Compost Bin", price: 49.99, image: "/placeholder.svg" },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <Link
              href={`/products/${product.id}`}
              className="block text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

