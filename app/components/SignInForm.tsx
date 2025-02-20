"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import Link from "next/link"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Toaster } from 'react-hot-toast'


const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [error, setError] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      })
  
      const data = await response.json()


      
      if (response.ok) {
              // Store tokens in localStorage
      localStorage.setItem('accessToken', data.token)
      localStorage.setItem('refreshToken', data.refreshToken) // If your API provides refresh token
      localStorage.setItem('user', JSON.stringify(data.user))

         toast.success('login successful! Redirecting to home...')
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        toast.error(data.error || 'Login failed')
       }
    } catch (error) {
      console.error('Error during Login:', error)
      toast.error('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
    setError("")
    
  }
  

  return (
    <>
    <Toaster />
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Welcome Back</h2>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm text-center">
              {error}
            </div>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-green-700">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="you@example.com" 
                    {...field}
                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-green-700">Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    placeholder="********" 
                    {...field}
                    className="border-green-200 focus:border-green-500 focus:ring-green-500"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Link 
              href="/forgot-password" 
              className="text-sm text-green-600 hover:text-green-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors" 
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center">
            <Link 
              href="/signup" 
              className="text-sm text-green-600 hover:text-green-700 hover:underline"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
    </>
  )
}