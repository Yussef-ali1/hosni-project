import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const blogPosts = [
  {
    id: 1,
    title: "10 Easy Ways to Reduce Your Carbon Footprint",
    excerpt: "Small changes in your daily routine can make a big difference...",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "The Future of Renewable Energy",
    excerpt: "Exploring the latest innovations in sustainable power generation...",
    date: "2023-05-28",
  },
  {
    id: 3,
    title: "Sustainable Fashion: More Than Just a Trend",
    excerpt: "How the fashion industry is embracing eco-friendly practices...",
    date: "2023-05-25",
  },
]

export default function BlogPosts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

