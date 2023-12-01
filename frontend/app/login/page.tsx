"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).email({ message: "Your email is not valid" }),
  password: z
    .string()
    .min(6, { message: "password length must be greater then 6" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
  });
  const [error, setError] = useState("");

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.setValue("email", "");
    form.setValue("password", "");

    const result = await fetch("http://localhost:8008/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    
    if (result.status < 300) {
      const response_json = await result.json();
      localStorage.setItem("uuid", response_json.message);
      router.push("/");
    } else setError(await result.text());
  }

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700">
      <Card className="bg-blue-200 w-[20%]">
        <CardHeader className="pb-[40px]">
          <CardTitle>Log in</CardTitle>
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email..." {...field} />
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
                    <FormLabel>Password</FormLabel>
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
              <p className="!mt-2">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-600">
                  Sign up
                </Link>
              </p>
              <div>
                <Button className="" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
