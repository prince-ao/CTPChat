"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-day-picker/dist/style.css";
import "./date-picker.css";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().min(2).email({ message: "Your email is not valid" }),
  username: z.string(),
  password: z
    .string()
    .min(6, { message: "password length must be greater then 6" }),
  date_of_birth: z.date({
    required_error: "A date of birth is required.",
  }),
});

export default function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
  });
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("uuid") != null) {
      router.replace("/home");
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.setValue("email", "");
    form.setValue("username", "");
    form.setValue("password", "");

    const result = await fetch("http://localhost:8008/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        username: values.username,
        password: values.password,
        date_of_birth: values.date_of_birth.toString(),
      }),
    });

    if (result.status < 300) {
      const response_json = await result.json();
      localStorage.setItem("uuid", response_json.token);
      router.push("/home");
    } else setError(await result.text());
  }

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700">
      <Card className="bg-blue-200 w-[20%]">
        <CardHeader className="pb-[40px]">
          <CardTitle>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          {error === "" ? <></> : <p className="text-red-600">{error}</p>}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:content-star after:text-red-600">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:content-star after:text-red-600">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="username..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:content-star after:text-red-600">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date_of_birth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="after:content-star after:text-red-600">
                      Date of birth
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          captionLayout="dropdown"
                          fromYear={1900}
                          toYear={2023}
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="!mt-2">
                Have an account?{" "}
                <Link href="/login" className="text-blue-600">
                  Log in
                </Link>
              </p>
              <div>
                <Button type="submit">Sign up</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
