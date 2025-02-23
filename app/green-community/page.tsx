'use client'

import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog"
import { useState } from "react"
import { FaTree, FaTrash, FaRecycle, FaSun, FaSeedling } from 'react-icons/fa'

const initiatives = [
  {
    title: "Tree Plantation Drive",
    description: "A community-led effort to plant 500 trees in urban areas to combat pollution.",
    startDate: "2025-03-15",
    endDate: "2025-03-20",
    country: "United States",
    city: "Los Angeles",
    createdBy: "Green Community",
    icon: <FaTree className="w-8 h-8 text-green-600" />,
    color: "bg-green-100"
  },
  {
    title: "Beach Cleanup Campaign",
    description: "Volunteers gather to remove plastic waste from local beaches and promote sustainable habits.",
    startDate: "2025-04-10",
    endDate: "2025-04-12",
    country: "Australia",
    city: "Sydney",
    createdBy: "Green Community",
    icon: <FaTrash className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-100"
  },
  {
    title: "Zero-Waste Workshop",
    description: "An interactive session teaching people how to live a zero-waste lifestyle with DIY sustainability tips.",
    startDate: "2025-05-05",
    endDate: "2025-05-06",
    country: "Canada",
    city: "Vancouver",
    createdBy: "Green Community",
    icon: <FaRecycle className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100"
  },
  {
    title: "Renewable Energy Awareness",
    description: "Educational programs in schools and communities about the benefits of solar and wind energy.",
    startDate: "2025-06-20",
    endDate: "2025-06-25",
    country: "Germany",
    city: "Berlin",
    createdBy: "Green Community",
    icon: <FaSun className="w-8 h-8 text-yellow-600" />,
    color: "bg-yellow-100"
  },
  {
    title: "Sustainable Farming Project",
    description: "A project promoting organic farming techniques and local food production.",
    startDate: "2025-07-01",
    endDate: "2025-07-10",
    country: "India",
    city: "Mumbai",
    createdBy: "Green Community",
    icon: <FaSeedling className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-100"
  }
]

export default function GreenCommunityPage() {
  const [selectedInitiative, setSelectedInitiative] = useState<typeof initiatives[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Green Community Initiatives</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((initiative, index) => (
          <div key={index} className={`${initiative.color} p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105`}>
            <div className="flex items-center gap-4 mb-4">
              {initiative.icon}
              <h2 className="text-xl font-semibold">{initiative.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{initiative.description}</p>
            <div className="text-sm mb-4">
              <p className="flex items-center gap-2 mb-2">
                <span className="font-medium">📍 Location:</span> 
                {initiative.city}, {initiative.country}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">📅 Date:</span> 
                {new Date(initiative.startDate).toLocaleDateString()} - {new Date(initiative.endDate).toLocaleDateString()}
              </p>
            </div>
            <Button 
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                onClick={() => {
                setSelectedInitiative(initiative)
                setIsDialogOpen(true)
              }}
            >
              Join Now 🌱
            </Button>
          </div>
        ))}
      </div>

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="Join Initiative">
        {selectedInitiative && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-4">
                {selectedInitiative.icon}
                <DialogTitle>{selectedInitiative.title}</DialogTitle>
              </div>
              <DialogDescription>
                Complete your registration for this green initiative
              </DialogDescription>
            </DialogHeader>
            <DialogContent>
              <div className="mt-4">
                <p className="mb-2"><span className="font-medium">📍 Location:</span> {selectedInitiative.city}, {selectedInitiative.country}</p>
                <p className="mb-2"><span className="font-medium">📅 Start Date:</span> {new Date(selectedInitiative.startDate).toLocaleDateString()}</p>
                <p className="mb-4"><span className="font-medium">📅 End Date:</span> {new Date(selectedInitiative.endDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">{selectedInitiative.description}</p>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  )
}
