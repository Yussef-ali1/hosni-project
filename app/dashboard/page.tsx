import UserDashboard from "../components/UserDashboard"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <UserDashboard />
    </div>
  )
}

