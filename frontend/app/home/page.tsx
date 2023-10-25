'use client';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Bold } from "lucide-react";
  import { Italic } from "lucide-react";
  import { Underline } from "lucide-react";
  import { Strikethrough } from 'lucide-react';
  import { Link } from "lucide-react";
  import { List } from 'lucide-react';
  import { ListOrdered } from 'lucide-react';
  import { TextQuote } from 'lucide-react';
  import { Code2 } from 'lucide-react';
  import { SquareCode } from 'lucide-react';
  import { Users } from 'lucide-react';
  import { PlusCircle } from 'lucide-react';
  import { Settings } from 'lucide-react';
  import { Toggle } from "@/components/ui/toggle";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { MenuSquare } from 'lucide-react';


    function DivElement({ message }: { message: string }) {
        return (
            <div key={crypto.randomUUID()} className="border border-[#A3A3A3] bg-inheret text-slate-200 p-1">
                {message}
            </div>
        );
    }

export default function Home() {

    const [divElements, setDivElements] = useState<JSX.Element[]>([]);

    /*Message expands textarea past div height*/
    const FormSchema = z.object({
        chatbox: z
            .string()
            .min(1, {
            message: "Textarea must be at least 1 characters.",
            })
            .max(700, {
            message: "Textarea must not be longer than 700 characters.",
            })
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    //Be careful of React state pitfall: https://is.gd/NLwCfG
    function onSubmit(data: z.infer<typeof FormSchema>) {
        //console.log(data.chatbox);

        const input = data.chatbox;

        setDivElements([...divElements, <DivElement message={input} />]);
    }

    return (
        <div 
        className="flex items-center justify-center
        w-[100vw] h-[100vh] 
        bg-slate-950 text-slate-200 
        divide-x divide-slate-600 divide-y-0"
        >

            {/* overflow-hidden hides the scroll that appears when accordian is clicked */}
            <div id="infoContainer" className="w-[25vw] h-[100vh] bg-blue-900/75 overflow-hidden">

                <div id="channelContainer" className="h-[90%]">
                    <ScrollArea className="h-full w-full rounded-md">
                        <Accordion type="single" collapsible className="w-full bg-[#06227D]">

                            <AccordionItem value="item-1">
                                <AccordionTrigger>Channels</AccordionTrigger>
                                <AccordionContent>
                                    <Button className="w-full justify-start"># Class</Button>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>Direct Messages (DMs)</AccordionTrigger>
                                <AccordionContent>
                                    <Button className="w-full justify-start">
                                        <div>
                                            <Avatar>
                                                <AvatarImage src="https://is.gd/az39r7" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p>
                                                <b>Lorem Ipsum</b>
                                            </p>
                                        </div>
                                    </Button>

                                    <Button className="w-full justify-start">
                                        <div>
                                            <Avatar>
                                                <AvatarImage src="https://is.gd/jUG71g" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p>
                                                <b>Lorem Ipsum</b>
                                            </p>
                                        </div>
                                    </Button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </div>

                <div id="profileContainer" className="flex items-center justify-center align-bottom h-[10%]">

                    {/*Extra feature: Could make profile information appear when profile is clicked. */}
                    <div id="profile" className="flex items-stretch justify-stretch w-5/6 h-full p-3 bg-blue-950/75">
                        <div className="m-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="m-2">
                            <p>
                                <b>Lorem Ipsum</b>
                            </p>
                        </div>
                    </div>

                    <div id="settings" className="h-full">
                        {/*
                        <Button variant="secondary" className="w-full h-full bg-blue-900/75 hover:bg-blue-700/75 text-slate-200">
                            <Settings />
                        </Button>*/
                        }

                        <Dialog>

                            <DialogTrigger asChild>
                                <Button 
                                variant="secondary" 
                                className="w-full h-full
                                bg-blue-900/75 hover:bg-blue-700/75 text-slate-200"
                                >
                                    <Settings />
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="max-w-full w-full h-full bg-[#0D2257]/90 text-slate-200">
                                <Tabs defaultValue="myaccount" className='flex h-[100vh] border border-red-800'>

                                    <div id="tabsList" className="w-fit h-full border border-red-500">
                                        <TabsList className="grid w-[20vw] h-[50vh] grid-row-3">
                                            <TabsTrigger value="myaccount">My Account</TabsTrigger>
                                            <TabsTrigger value="profile">Profile</TabsTrigger>
                                            <TabsTrigger value="adjustments">Adjustments</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <div id="tabsContent" className=" w-full h-full border border-green-500">
                                        <TabsContent value="myaccount" className="w-full h-full m-0">
                                            <Card className='w-full h-full bg-slate-100'>
                                            <CardHeader>
                                                <CardTitle>My Account</CardTitle>
                                                <CardDescription>
                                                Make changes to your account here. Click save when you're done.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <div className="space-y-1">
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" defaultValue="Pedro Duarte" />
                                                </div>
                                                <div className="space-y-1">
                                                <Label htmlFor="username">Username</Label>
                                                <Input id="username" defaultValue="@peduarte" />
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>Save changes</Button>
                                            </CardFooter>
                                            </Card>
                                        </TabsContent>

                                        <TabsContent value="profile" className="w-full h-full m-0">
                                            <Card className='w-full h-full bg-slate-100'>
                                            <CardHeader>
                                                <CardTitle>Profile</CardTitle>
                                                <CardDescription>
                                                Change your profile here.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <div className="space-y-1">
                                                <Label htmlFor="current">Current password</Label>
                                                <Input id="current" type="password" />
                                                </div>
                                                <div className="space-y-1">
                                                <Label htmlFor="new">New password</Label>
                                                <Input id="new" type="password" />
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>Save password</Button>
                                            </CardFooter>
                                            </Card>
                                        </TabsContent>

                                        <TabsContent value="adjustments" className="w-full h-full m-0">
                                            <Card className='w-full h-full bg-slate-100'>
                                            <CardHeader>
                                                <CardTitle>Adjustments</CardTitle>
                                                <CardDescription>
                                                Adjust in-website settings here.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <div className="space-y-1">
                                                <Label htmlFor="current">Current password</Label>
                                                <Input id="current" type="password" />
                                                </div>
                                                <div className="space-y-1">
                                                <Label htmlFor="new">New password</Label>
                                                <Input id="new" type="password" />
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button>Save password</Button>
                                            </CardFooter>
                                            </Card>
                                        </TabsContent>

                                    </div>

                                </Tabs>
                            </DialogContent>
                        </Dialog>
                    </div>

                </div>

            </div>

            <div id="chatContainer" className="w-[50vw] h-[100vh] bg-blue-900/75"> {/*bg-blue-950*/}

                <div id="channelInfoContainer" className="flex items-center justify-between w-auto h-[7vh] bg-indigo-900">
                    <div className="flex items-center justify-start">

                        <div className="mr-1">
                            <Button variant="secondary" className="bg-indigo-900 hover:bg-indigo-700 text-slate-200" 
                            /*onClick={collapseMembers}*/> 
                                <MenuSquare /> 
                            </Button>
                        </div>

                        <div className="ml-1 mr-2 text-lg">
                            <h1>
                                # Channel Name
                            </h1>
                        </div>

                        <div>
                            <p className="text-sm text-gray-300">
                                A Short Channel Description
                            </p>
                        </div>

                    </div>

                    <div className="mr-1">
                        <Button variant="secondary" className="bg-indigo-900 hover:bg-indigo-700 text-slate-200" 
                        /*onClick={collapseMembers}*/> 
                            <Users /> 
                        </Button>
                    </div> {/* Members Button */}

                </div>

                {/* Use states for content within messageContainer */}
                <div id="messageContainer" className="w-full h-[78.5vh] pt-5">

                    {divElements.map((element, index) => (
                        <div key={index}>{element}</div>
                    ))}
                    
                </div>

                <div id="inputContainer" className="w-auto">

                    <div id="formattingContainer" className="w-auto h-[6vh] bg-sky-950/75">

                        <div>

                            <Separator className="mb-3" />

                            <div className="flex h-5 items-center space-x-1 text-sm">

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <Bold className="h-4 w-4" />
                                    </Toggle>
                                </div>

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <Italic className="h-4 w-4" />
                                    </Toggle>
                                </div>

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <Underline className="h-4 w-4" />
                                    </Toggle>
                                </div>

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <Strikethrough className="h-4 w-4" />
                                    </Toggle>
                                </div>

                                <Separator orientation="vertical" />

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <Link className="h-4 w-4" />
                                    </Toggle>
                                </div>

                                <Separator orientation="vertical" />

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <List className="h-4 w-4"/>
                                    </Toggle>
                                </div>

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <ListOrdered className="h-4 w-4"/>
                                    </Toggle>
                                </div>

                                <Separator orientation="vertical" />

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <TextQuote className="h-4 w-4"/>
                                    </Toggle>
                                </div>

                                <Separator orientation="vertical" />

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <Code2 className="h-4 w-4"/>
                                    </Toggle>
                                </div>

                                <div>
                                    <Toggle aria-label="Toggle italic">
                                        <SquareCode className="h-4 w-4"/>
                                    </Toggle>
                                </div>

                                <Separator orientation="vertical" />

                            </div>

                        </div>

                    </div>

                    <Separator className="mb-0" />

                    <div id="textBoxContainer" className="flex items-start justify-center w-auto h-fit">

                        <div id="uploadContainer">
                            <Popover>
                                
                                <PopoverTrigger asChild>
                                    <Button
                                    variant="secondary"
                                    className="h-[8vh] bg-sky-950/75 hover:bg-blue-700/75 text-slate-200 rounded"
                                    > 
                                        <PlusCircle /> 
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent className="w-80 bg-[#0D2257]/90">
                                    <div className="grid gap-4">

                                        <div className="space-y-2 text-slate-200">
                                            <h4 className="font-medium leading-none">Upload a File</h4>
                                            <p className="text-sm text-muted-foreground">
                                            Upload ⬆️
                                            </p>
                                        </div>

                                        <div className="grid gap-2">
                                            
                                            
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button
                                                        variant="outline" 
                                                        className="bg-sky-200/10 hover:bg-slate-100/[.85] text-slate-200">
                                                            Upload
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent 
                                                    className="sm:max-w-[425px] bg-[#0D2257]/90 text-slate-200">
                                                        {/* DialogContent text color for close button color */}
                                                        <DialogHeader className="text-slate-200">
                                                            <DialogTitle>Upload a File</DialogTitle>
                                                            <DialogDescription>
                                                            Upload an image, file, or video.
                                                            </DialogDescription>
                                                        </DialogHeader>

                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">

                                                            <Label htmlFor="name" className="text-right text-slate-200">
                                                            File: 
                                                            </Label>
                                                            {/* Sets input text black instead of white*/}
                                                            <Input
                                                            id="name"
                                                            className="col-span-3 text-black" 
                                                            />

                                                        </div>
                                                    </div>
                                                        <DialogFooter>
                                                            <Button type="submit">Upload</Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>

                                    </div>
                                </PopoverContent>

                            </Popover>
                        </div>

                        <div id="textContainer" className="w-[100vh]">
                          
                          <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-stretch w-full">
                              <FormField
                                control={form.control}
                                name="chatbox"
                                render={({ field }) => (

                                  /* FormItem determines the dimensions of the textarea */
                                  <FormItem className='w-full'>

                                    <FormControl>

                                      {/* When Textarea is focused && ...field https://scrimba.com/articles/react-spread-operator/*/}
                                      <Textarea
                                        placeholder="Type..."
                                        className="min-h-fit
                                        resize-none rounded-lg
                                        border border-slate-500 
                                        bg-blue-950/75 text-slate-200 
                                        focus-visible:ring-slate-400 focus-visible:ring-offset-blue-500 
                                        focus-visible:shadow-gray-600"
                                        
                                        {...field}
                                      />

                                    </FormControl>
                                    
                                    <FormMessage />
                                  </FormItem>

                                )}
                              />

                              <Button 
                              type="submit" 
                              className='h-auto bg-teal-500/80 hover:bg-blue-700/75 text-slate-200 rounded'>
                                Submit
                              </Button>
                            </form>
                          </Form>
                        </div>

                    </div>
                </div>

            </div>

            <div id="memberContainer" className="w-[25vw] h-[100vh] bg-blue-900/75 overflow-hidden"> {/*bg-blue-950*/}

                <Accordion type="single" collapsible className="w-auto bg-[#06227D]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Members</AccordionTrigger>
                        <AccordionContent>
                        {/* Insert states and JSX here to get accurate member is online information */}
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>

        </div>
    );
}

/*
export default function Home() {
  return (
    <div>
      <h1>You're logged in</h1>
    </div>
  );
}
*/