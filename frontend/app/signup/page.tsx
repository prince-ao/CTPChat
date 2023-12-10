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
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).email({ message: "Your email is not valid" }),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string().optional(),
  password: z
    .string()
    .min(6, { message: "password length must be greater then 6" }),
  privacypolicy: z.boolean().default(false).optional(),
  termsofservice: z.boolean().default(false).optional(),
});

export default function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
  });
  const [error, setError] = useState("");

  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.setValue("email", "");
    form.setValue("first_name", "");
    form.setValue("last_name", "");
    form.setValue("middle_name", "");
    form.setValue("password", "");

    const result = await fetch("http://localhost:8008/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        middle_name: values.middle_name,
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
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 overflow-y-auto">
      <Card className="bg-blue-200 w-[25%]">
        <CardHeader className="pb-[40px]">
          <CardTitle>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          {error === "" ? <></> : <p className="text-red-600">{error}</p>}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4"> {/* Determines vetical margin for all form fields */}
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
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:content-star after:text-red-600">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="first name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="after:content-star after:text-red-600">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="last name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="middle_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="last name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="p-0 m-0">
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
                name="privacypolicy"
                render={({ field }) => (
                  <FormItem>
                    <div className="leading-none after:content-star after:text-red-600">

                      <FormControl>
                        <Checkbox  
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mr-2 mt-1 p-0"
                          required
                        />
                      </FormControl>
                    
                      <FormLabel>
                        I have read and agree the <Button variant="link" className="p-0 h-0">
                          <Link href="/privacypolicy">Privacy Policy</Link>
                          </Button>
                      </FormLabel>

                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="termsofservice"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormItem>
                    <div className="leading-none after:content-star after:text-red-600">

                      <FormControl>
                        <Checkbox  
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mr-2 mb-2 p-0"
                          required
                        />
                      </FormControl>
                    
                      <FormLabel>
                        I have read and agree with the <Button variant="link" className="p-0 h-0">
                          <Link href="/termsofservice">Privacy Policy</Link>
                          </Button>
                      </FormLabel>

                    </div>
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
