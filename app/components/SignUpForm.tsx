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


const formSchema = z
  .object({
    username: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string()
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password
        })
      })
  
      const data = await response.json()
      
      if (response.ok) {
         toast.success('Signup successful! Redirecting to login...')
        setTimeout(() => {
          router.push('/signin')
        }, 2000)
      } else {
        toast.error(data.error || 'Signup failed')
       }
    } catch (error) {
      console.error('Error during signup:', error)
      toast.error('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>

    <Toaster position="top-center" />

    <div className="bg-white p-8 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Join Our Sustainable Community</h2>
          
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-green-700">Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-green-700">Confirm Password</FormLabel>
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

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors" 
            disabled={isLoading}
          >
            {isLoading ? "Creating your account..." : "Sign Up"}
          </Button>

          <div className="text-center">
            <Link 
              href="/signin" 
              className="text-sm text-green-600 hover:text-green-700 hover:underline"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
    </>
  )
}