"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export default function UserDashboard() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Fetch user data from API
    // This is a mock implementation
    const mockUserData = {
      name: "John Doe",
      energySavings: 250,
      co2Reduction: 500,
      coursesInProgress: [
        { id: 1, name: "Introduction to Sustainability", progress: 60 },
        { id: 2, name: "Advanced Energy-Saving Techniques", progress: 30 },
      ],
    }
    setUserData(mockUserData)
  }, [])

  if (!userData) return <div>Loading...</div>

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Energy Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{userData.energySavings} kWh</p>
          <p className="text-sm text-gray-500">Total energy saved this month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CO2 Reduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{userData.co2Reduction} kg</p>
          <p className="text-sm text-gray-500">Total CO2 reduced this month</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Courses in Progress</CardTitle>
        </CardHeader>
        <CardContent>
          {userData.coursesInProgress.map((course) => (
            <div key={course.id} className="mb-4">
              <p className="font-semibold">{course.name}</p>
              <Progress value={course.progress} className="mt-2" />
              <p className="text-sm text-gray-500 mt-1">{course.progress}% complete</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

