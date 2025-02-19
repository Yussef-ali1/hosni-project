import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to make a difference?</h2>
        <p className="text-xl mb-8">Join us in creating a more sustainable future.</p>
        <Link
          href="/calculator"
          className="inline-block bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition-colors"
        >
          Calculate Your Impact
        </Link>
      </div>
    </section>
  )
}

