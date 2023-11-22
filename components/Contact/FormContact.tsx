'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

import {toast, Toaster} from 'react-hot-toast';

const formSchema = z.object({
    name: z.string().min(2,{
        message: 'Name must be at least 2 characters'
    }),
    email: z.string().email(),
    message: z.string().min(5).max(500)
})

export default function FormContact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })
    
    function onSubmit(values: z.infer<typeof formSchema>){
        const validationResult = formSchema.safeParse(values);

        if(validationResult.success){
          return toast.success('Your message has been sent!')
        } else{
          toast.error('Please fix the errors in the form and try again')
        }
    }

    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Write your name here" className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-transparent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Write your email here" className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-transparent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Write your message here" className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 bg-transparent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        <Button variant='oswald' size='lg' type="submit" className="btn-dark self-start">Send it</Button>
      </form>
      <Toaster />
    </Form>
    )
}