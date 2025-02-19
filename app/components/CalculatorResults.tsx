export default function CalculatorResults({ results }) {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <p className="mb-2">Total Energy Consumption: {results.energy.toFixed(2)} kWh</p>
      <p>Estimated CO2 Emissions: {results.co2.toFixed(2)} kg</p>
    </div>
  )
}

