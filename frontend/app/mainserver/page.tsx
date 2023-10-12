import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Bold } from "lucide-react"
import { Italic } from "lucide-react"
import { Underline } from "lucide-react"
import { Strikethrough } from 'lucide-react';
import { Link } from "lucide-react"
import { List } from 'lucide-react';
import { ListOrdered } from 'lucide-react';
import { TextQuote } from 'lucide-react';
import { Code2 } from 'lucide-react';
import { SquareCode } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
  

export default function MainServer() {

    return (
        <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-slate-950">

            <div id="infoContainer" className="w-[25vw] h-[100vh] border border-zinc-400 bg-blue-950">

                <div id="channelContainer" className="h-[90%] border border-white">
                    <ScrollArea className="h-full w-full rounded-md border">
                        <Accordion type="single" collapsible className="w-full bg-zinc-300">

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

                <div id="profileContainer" className="flex items-center justify-center align-bottom h-[10%] border border-orange-100">

                    <div id="profile" className="flex items-stretch justify-stretch w-5/6 bg-slate-500 h-full p-3 border border-slate-200">
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

                    <div id="settings" className="w-1/6 h-full border border-slate-200">
                        <Button className="w-full h-full">⚙️</Button>
                    </div>

                </div>

            </div>

            <div id="chatContainer" className="w-[50vw] h-[100vh] bg-slate-500"> {/*bg-blue-950*/}

                <div id="channelInfoContainer" className="flex items-center justify-between w-auto h-[7vh] bg-indigo-500">
                    <div><h1>Channel Name</h1></div>
                    <div><p>Channel Description</p></div>
                    <div><Button>Members</Button></div>
                </div>

                <div id="messageContainer" className="w-full h-[78.5vh] pt-5">

                </div>

                <div id="inputContainer" className="w-auto border border-green-500">

                    <div id="formattingContainer" className="w-auto h-[6vh]">

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

                    <div id="textBoxContainer" className="flex items-start justify-center w-auto h-fit">

                        <div id="uploadContainer">
                            <Popover>
                                
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="h-[8vh]">➕</Button>
                                </PopoverTrigger>

                                <PopoverContent className="w-80">
                                    <div className="grid gap-4">

                                        <div className="space-y-2">
                                            <h4 className="font-medium leading-none">Upload a File</h4>
                                            <p className="text-sm text-muted-foreground">
                                            Upload ⬆️
                                            </p>
                                        </div>

                                        <div className="grid gap-2">
                                            
                                            
                                            <div className="grid grid-cols-3 items-center gap-4">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline">Upload</Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px]">
                                                        <DialogHeader>
                                                            <DialogTitle>Upload a File</DialogTitle>
                                                            <DialogDescription>
                                                            Upload an image, file, or video.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                    <div className="grid gap-4 py-4">
                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                            <Label htmlFor="name" className="text-right">
                                                            File: 
                                                            </Label>
                                                            <Input
                                                            id="name"
                                                            className="col-span-3"
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
                            <Textarea placeholder="Type your message here." className="min-h-fit"/>
                        </div>

                    </div>
                </div>

            </div>

            <div id="memberContainer" className="w-[25vw] h-[100vh] border-zinc-400 bg-slate-500"> {/*bg-blue-950*/}

                <Accordion type="single" collapsible className="w-full bg-zinc-300">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Members</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        {/* Insert states and JSX here to get accurate member is online information */}
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>


            </div>

        </div>
    );
}