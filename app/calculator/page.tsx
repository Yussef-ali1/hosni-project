"use client"
import { useState } from "react"
import EnergyCalculator from "../components/EnergyCalculator"

export default function CalculatorPage() {
  const [results, setResults] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <EnergyCalculator/>
    </div>
  )
}

