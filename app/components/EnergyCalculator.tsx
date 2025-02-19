"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"

const formSchema = z.object({
  electricityUsage: z.number().min(0, "Usage must be a positive number"),
  gasUsage: z.number().min(0, "Usage must be a positive number"),
  carMileage: z.number().min(0, "Mileage must be a positive number"),
})

export default function EnergyCalculator({ setResults }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      electricityUsage: 0,
      gasUsage: 0,
      carMileage: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const totalEnergy = values.electricityUsage + values.gasUsage
    const totalCO2 = totalEnergy * 0.5 + values.carMileage * 0.2
    setResults({ energy: totalEnergy, co2: totalCO2 })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="electricityUsage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Electricity Usage (kWh)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} onChange={(e) => field.onChange(+e.target.value)} />
              </FormControl>
              <FormDescription>Enter your monthly electricity usage in kilowatt-hours.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gasUsage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Gas Usage (therms)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} onChange={(e) => field.onChange(+e.target.value)} />
              </FormControl>
              <FormDescription>Enter your monthly gas usage in therms.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="carMileage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Car Mileage</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} onChange={(e) => field.onChange(+e.target.value)} />
              </FormControl>
              <FormDescription>Enter your monthly car mileage.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Calculate</Button>
      </form>
    </Form>
  )
}

