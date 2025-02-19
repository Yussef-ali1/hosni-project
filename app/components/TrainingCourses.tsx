import EnrollmentDialog from "./EnrollmentDialog"

const courses = [
  { id: 1, name: "Introduction to Sustainability", duration: "4 weeks", level: "Beginner" },
  { id: 2, name: "Advanced Energy-Saving Techniques", duration: "6 weeks", level: "Intermediate" },
  { id: 3, name: "Green Building Design", duration: "8 weeks", level: "Advanced" },
  { id: 4, name: "Sustainable Business Practices", duration: "5 weeks", level: "Intermediate" },
]

export default function TrainingCourses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
          <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
          <p className="text-gray-600 mb-4">Level: {course.level}</p>
          <EnrollmentDialog courseName={course.name} />
        </div>
      ))}
    </div>
  )
}

