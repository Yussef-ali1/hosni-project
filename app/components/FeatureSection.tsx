interface FeatureSectionProps {
  title: string
  description: string
}

export default function FeatureSection({ title, description }: FeatureSectionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-green-700 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

