'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

//Account registration: https://help.pearsoncmg.com/rumba/b2c_self_reg/en/Content/b2c_signin_guidelines.html
//Zod Documentation: https://zod.dev/?id=strings
const formSchema = z.object({
  email: z.string().min(2).email({ message: "You must enter a valid email" }),
  displayName: z.string()
  .min(2, { message: "Display name must be at least 2 characters long"})
  .max(50, { message: "Display name must not exceed 50 characters long"}),
  surname: z.string().min(1, { message: "Your surname must have at least 1 character"}),
  middleName: z.string().min(1, { message: "Your middle name must have at least 1 character"}),
  givenName: z.string().min(1, { message: "Your given name must have at least 1 character"}),
  newPassword: z
    .string()
    .min(6, { message: "password length must be greater then 6" }),
  confirmPassword: z
  .string()
  .min(6, { message: "password length must be greater then 6" }),
  password: z
    .string()
    .min(6, { message: "password length must be greater then 6" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      email: "",
      displayName: "",
      surname: "",
      middleName: "",
      givenName: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="
     flex items-center justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700
     ">
      <Tabs defaultValue="sign-up" className="w-[400px]"> {/*May change to vw to account for mobile.*/}

      <TabsList className="grid w-full grid-cols-2 bg-sky-100">
        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>

      {/* Sign up Tab */}
      <TabsContent value="sign-up">
        <Card className="bg-blue-200">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Register yourself as a new user. 
            </CardDescription>
          </CardHeader>
          <CardContent className=" space-y-2">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Name</FormLabel>
                    <FormControl>
                      <Input
                        type="displayName"
                        placeholder="Enter a display name for CTPChat"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Surname</FormLabel>
                    <FormControl>
                      <Input
                        type="surname"
                        placeholder="Please enter your surname"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        type="middleName"
                        placeholder="Please enter your middle name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="givenName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Given Name</FormLabel>
                    <FormControl>
                      <Input
                        type="givenName"
                        placeholder="Please enter your given name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        type="newPassword"
                        placeholder="Enter A New Password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="confirmPassword"
                        placeholder="Confirm Your Password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>

          </CardContent>
        </Card>
      </TabsContent>

      {/* Login Tab */}
      <TabsContent value="login">
        <Card className="bg-blue-200">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Welcome back returning user! Please login down below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

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
              <Button type="submit">Submit</Button>
            </form>
          </Form>

          </CardContent>
        </Card>
      </TabsContent>

      </Tabs>
    </div>
  )

}
