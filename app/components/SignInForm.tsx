'use client'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"

// Zod validation schema similar to Joi
const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"), // Ensures email is required
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Minimum length of 8
    .min(1, "Password is required"), // Ensures password is required
})

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: any) {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Sign in failed")
      }

      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Signin error:", error)
      setError(error instanceof Error ? error.message : "Failed to sign in")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
        Welcome Back
      </h2>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-green-700 font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className="mt-1 w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:ring-green-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-green-700 font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="********"
            className="mt-1 w-full p-3 border border-green-200 rounded-lg focus:border-green-500 focus:ring-green-500 outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>



        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        <div className="text-center">
          <Link
            href="/signup"
            className="text-sm text-green-600 hover:text-green-700 hover:underline"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  )
}
