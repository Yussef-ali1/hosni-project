"use client";

import { BookOpen, Clock, DollarSign } from "lucide-react";
import EnrollmentDialog from "./EnrollmentDialog";

const primaryColor = "text-green-700"; // A color associated with sustainability, recycling, and learning

const courses = [
  {
    id: 1,
    title: "Introduction to Sustainability",
    description: "Learn the fundamentals of sustainable practices and their impact.",
    duration: "4 weeks",
    price: 199
  },
  {
    id: 2,
    title: "Advanced Energy-Saving Techniques",
    description: "Explore innovative strategies to optimize energy consumption.",
    duration: "6 weeks",
    price: 299
  },
  {
    id: 3,
    title: "Green Building Design",
    description: "Master eco-friendly building techniques for a sustainable future.",
    duration: "8 weeks",
    price: 399
  },
  {
    id: 4,
    title: "Sustainable Business Practices",
    description: "Understand how to integrate sustainability into business models.",
    duration: "5 weeks",
    price: 249
  }
];

export default function TrainingCourses() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-green-800">
          Explore Our Training Programs
        </h2>
        <p className="text-center text-green-600 mb-12 max-w-3xl mx-auto">
          Enhance your skills with expert-led sustainability courses designed for professionals and enthusiasts alike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 border border-green-200 bg-green-50 flex flex-col h-full"
            >
              <BookOpen className={`h-10 w-10 ${primaryColor} mb-4`} />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              
              <div className="flex items-center text-gray-800 mb-2">
                <Clock className={`w-5 h-5 mr-2 ${primaryColor}`} />
                <span className="font-medium">Duration:</span> <span className="ml-1">{course.duration}</span>
              </div>

              <div className="flex items-center text-gray-800 mb-6">
                <DollarSign className={`w-5 h-5 mr-2 ${primaryColor}`} />
                <span className="font-medium">Price:</span> <span className="ml-1 text-green-700">${course.price}</span>
              </div>

              <div className="mt-auto">
                <EnrollmentDialog courseName={course.title} courseDuration={course.duration} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="inline-block bg-green-700 text-white py-3 px-8 rounded-md font-semibold hover:bg-green-800 transition-colors"
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
