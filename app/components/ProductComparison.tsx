"use client"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const products = [
  { id: 1, name: "Eco-Friendly Thermostat", price: 129.99, energyRating: "A+++", annualSavings: 50 },
  { id: 2, name: "Smart LED Bulb Pack", price: 39.99, energyRating: "A++", annualSavings: 30 },
  { id: 3, name: "Solar-Powered Charger", price: 59.99, energyRating: "A+", annualSavings: 20 },
  { id: 4, name: "Energy-Efficient Refrigerator", price: 899.99, energyRating: "A++", annualSavings: 80 },
]

export default function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState([null, null])

  const handleProductSelect = (index, productId) => {
    const newSelectedProducts = [...selectedProducts]
    newSelectedProducts[index] = products.find((p) => p.id === Number.parseInt(productId))
    setSelectedProducts(newSelectedProducts)
  }

  return (
    <div>
      <div className="flex gap-4 mb-8">
        {[0, 1].map((index) => (
          <Select key={index} onValueChange={(value) => handleProductSelect(index, value)}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.id} value={product.id.toString()}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
      {selectedProducts[0] && selectedProducts[1] && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>{selectedProducts[0].name}</TableHead>
              <TableHead>{selectedProducts[1].name}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell>${selectedProducts[0].price}</TableCell>
              <TableCell>${selectedProducts[1].price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Energy Rating</TableCell>
              <TableCell>{selectedProducts[0].energyRating}</TableCell>
              <TableCell>{selectedProducts[1].energyRating}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Annual Savings</TableCell>
              <TableCell>${selectedProducts[0].annualSavings}</TableCell>
              <TableCell>${selectedProducts[1].annualSavings}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </div>
  )
}

