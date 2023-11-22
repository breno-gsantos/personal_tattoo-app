'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {FiSend} from 'react-icons/fi'

const formSchema = z.object({
    email: z.string().email(),
})

export default function FooterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        }
    })
    
    function onSubmit(values: z.infer<typeof formSchema>){
        // Aplicar lógica de submit
    }

    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border-b border-[#b6b6b6] items-center flex justify-between">
        <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your email address" className="placeholder:text-base italic tracking-[0.06em] outline-none pb-4 bg-transparent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}/>
        <Button variant='oswald' size='lg' type="submit" className="">
            <FiSend />
        </Button>
      </form>
    </Form>
    )
}