"use client"
import { useState } from "react"
import EnergyCalculator from "../components/EnergyCalculator"
import CalculatorResults from "../components/CalculatorResults"

export default function CalculatorPage() {
  const [results, setResults] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Energy & CO2 Calculator</h1>
      <EnergyCalculator setResults={setResults} />
      {results && <CalculatorResults results={results} />}
    </div>
  )
}

