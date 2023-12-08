/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

'use client';
import React from 'react';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation]);

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";


import { Plus, Scroll } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';
import { ArrowBigLeft } from 'lucide-react';
import { Settings } from 'lucide-react';
import { MenuSquare } from 'lucide-react';
import { Users } from 'lucide-react';

export default function Home() {

    const [spaceCount, setSpaceCount] = useState(0);

    const addSpace = Array.from({ length: spaceCount }, (_, i) => (
        <Button key={i} className='w-full h-auto p-1 m-0 rounded-full'>
            <img src="https://picsum.photos/200/300" alt="Image" className='w-fit h-auto rounded-full justify-center align-middle' />
        </Button>
    ));

    const [roomCount, setRoomCount] = useState(0);

    const addRoom = Array.from({ length: roomCount }, (_, i) => (
        <Button key={i} className="w-full justify-start rounded-none bg-[#072998] text-slate-200">
            i
        </Button>
    ));

    const [officeCount, setOfficeCount] = useState(0);

    const addOffice = Array.from({ length: officeCount }, (_, i) => (
        <Button key={i} className="w-full justify-start rounded-none bg-[#072998] text-slate-200">
            i
        </Button>
    ));

    const items = [
        { value: "item-1", text: "Rooms", onClick: () => setRoomCount(roomCount + 1), buttonText: "Add Room", },
        { value: "item-2", text: "Offices", onClick: () => setOfficeCount(officeCount + 1), buttonText: "Add Office" },
    ];
    
    const accordionItems = items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.text}</AccordionTrigger>
            <AccordionContent>
            <Button onClick={item.onClick} className='inline-flex justify-between align-middle text-center w-full px-2 tracking-wide'>
                <p>{item.buttonText}</p>
                <Plus/>
            </Button>
            {item.text === "Rooms"? addRoom : addOffice}
            </AccordionContent>
        </AccordionItem>
    ));

    //interface to insert Shadcn UI accordian children props/elements
    interface accordItemsProps {
        children: React.JSX.Element[] | React.JSX.Element;
        accordTriggerName: string;
    }

    //Function that creates Shadcn UI <AccordionItem> tags with content within them.
    function AccordianItems({children, accordTriggerName}:accordItemsProps) {
        const [value, setValue] = useState(accordTriggerName);

        useEffect(() => {
            setValue(accordTriggerName);
        }, [accordTriggerName]);

        return (
            <AccordionItem value={value}>
                <AccordionTrigger>{accordTriggerName}</AccordionTrigger>
                <AccordionContent>
                    {Array.isArray(children) ? children : [children]}
                </AccordionContent>
            </AccordionItem>
        );
    }

    //interface to insert Shadcn UI Avatar children props/elements
    interface avatarItemsProps {
        src: string;
        alt: string;
        fallback: string;
        content: React.JSX.Element[] | string;
    }

    function AvatarButton({src, alt, fallback, content}:avatarItemsProps) {
        return (
            <Button className="inline-flex items-center justify-stretch w-full h-full bg-blue-950/75">
              <div className="m-2">
                <Avatar>
                  <AvatarImage src={src} alt={alt} />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              </div>
              <div className="m-2">
                <p>
                  <b>{content}</b>
                </p>
              </div>
            </Button>
          );
    }

    const avatarItems: avatarItemsProps[] = [
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "A", content: "Lorem Not Ipsum"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "B", content: "Dolor Sit Amet"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "C", content: "Consectetur Adipiscing Elit"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "D", content: "Sed Do Eiusmod Tempor Incididunt"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "E", content: "Ut Labore Et Dolore Magna Aliqua"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "F", content: "Enim Ad Minim Veniam"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "G", content: "Quis Nostrud Exercitation Ullamco Laboris"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "H", content: "Nisi Ut Aliquip Ex Ea Commodo Consequat"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "I", content: "Duis Aute Irure Dolor In Reprehenderit In Voluptate"},
        {src: "https://picsum.photos/200/300", alt: "Profile Picture", fallback: "J", content: "Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur"},
      ];

    //Old Collapse Buttons. May need to change later.
    function collapseInfoContainer() {

        const infoCont = document.getElementById('infoContainer') as HTMLElement;

        const chatCont = document.getElementById('chatContainer') as HTMLElement;

        //const displaySetting = infoCont.style.display;
        const displaySetting = window.getComputedStyle(infoCont).getPropertyValue('display');

        if(displaySetting == 'flex') {
            infoCont.style.display = 'none';
        } else {
            infoCont.style.display = 'flex';
        }

        chatCont.style.width = 'inherit';
    }

    function collapseMemberContainer() {
        
        const membCont = document.getElementById('memberContainer') as HTMLElement;

        const chatCont = document.getElementById('chatContainer') as HTMLElement;

        //const displaySetting = infoCont.style.display;
        const displaySetting = window.getComputedStyle(membCont).getPropertyValue('display');

        if(displaySetting == 'flex') {
            membCont.style.display = 'none';
        } else {
            membCont.style.display = 'flex';
        }

        chatCont.style.width = 'inherit';

    }

    interface collapseBtnProps {
        children: React.JSX.Element;
        id: string;
        onClick: () => void;
    }

    //Creates the collapse buttons within middle chat container
    function CollapseButton({children, id, onClick}:collapseBtnProps) {
        const [ID, setID] = useState(id);

        useEffect(() => {
            setID(id);
        }, [id]);

        return (
            <div className="mr-1">
                <Button
                    variant="secondary" 
                    id={id}
                    className="hidden lg:block bg-indigo-900 hover:bg-indigo-700 text-slate-200" 
                    onClick={onClick}
                >
                    {children}
                </Button>
            </div>
        );
    }

    //Creates the UI for the text that is going to be displayed after user hits the submit button
    function DivElement({ message }: { message: string }) {

        const currentTime = new Date().toLocaleTimeString();

        return (
            <div key={crypto.randomUUID()} className="border border-[#A3A3A3] bg-inheret text-slate-200 p-1">
                
                <div className='flex items-center justify-start w-full h-auto'>
                    
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className='px-3'>
                        <h6>Lorem Ipsum</h6>
                    </div>

                    <div>
                        <h6 className='text-gray-500'>{currentTime}</h6>
                    </div>

                </div>

                <div className='w-full h-auto whitespace-normal break-words pl-[11.5%]'>
                    {message}
                </div>
            </div>
        );
    }

    const [divElements, setDivElements] = useState<React.JSX.Element[]>([]);

    /*Message expands textarea past div height*/
    const FormSchema = z.object({
    //No need for validation as shadcn textarea `required` property does not allow empty messages to be submitted. 
    chatbox: z
        .string()
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            chatbox: "",
          },
    });

    //Be careful of React state pitfall: https://is.gd/NLwCfG
    function onSubmit(data: z.infer<typeof FormSchema>) {
        //console.log(data.chatbox);

        const input = data.chatbox;

        setDivElements([...divElements, <DivElement message={input} />]);
    }

    //Scholr components
    function spaceSelector():React.JSX.Element { //
        
        return(
            <div className='inline-flex justify-start w-full h-[15vh] align-top border border-red-500'>
                <Select>

                    <SelectTrigger className="w-full h-full bg-slate-800">
                        {/* Should have a state for the name of the Space */ }
                        <SelectValue placeholder="Space Name" />
                    </SelectTrigger>

                    <SelectContent className='bg-slate-300 z-10'>
                        <SelectGroup>
                            <SelectItem value="spaceInfo">Change Space Information</SelectItem>
                            <SelectItem value="notifications">Notification Settings</SelectItem>
                            <SelectItem value="privacy">Space Privacy Settings</SelectItem>
                            <SelectItem value="exit" className='text-red-500'>Exit Space</SelectItem>
                        </SelectGroup>
                    </SelectContent>

                </Select>

                {/*
                <Button id="my-next-button" className='hidden lg:block w-auto h-full bg-slate-800 border border-bg-gray-600 text-gray-300' onClick={collapseInfoContainer}>
                    <ArrowBigRight />
                </Button>
                */}

            </div>
        );
    }

    function roomOfficeProfile():React.JSX.Element {
        
        return(
            <div className='relative inline-flex flex-col justify-start w-full h-full align-top overflow-x-hidden overflow-y-auto z-0'>

                {/* Accordian Container */ }
                <ScrollArea>
                    <div className='w-full h-full'>

                            <Accordion type="multiple" className="w-full bg-[#06227D]">

                                {accordionItems}

                            </Accordion>
                    </div>
                </ScrollArea>

                {/*Profile container*/ }
                <div className='absolute inline-flex mt-auto bottom-0 h-auto w-full border bg-gray-500'>

                    <div className='inline-flex flex-row justify-start align-center w-full h-auto'>

                        {/* Profile */ }
                        <AvatarButton src={"https://picsum.photos/200/300"} alt={"Profile Picture"} fallback="Z" content="Lorem Not Ipsum" />

                        {/* Settings container: Gets smaller when in 3-colloumn desktop */ }
                        <div className='inline-flex justify-start align-middle w-[20%] h-full bg-blue-900'>
                            <Button className='w-full h-full'>
                                <Settings />
                            </Button>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }

    {/* Swiper slider that contains Info Container */}
    function infoSwiperSlide():React.JSX.Element {
        return (
            <SwiperSlide> {/* className='md:max-w-none md:max-h-none' */}

                {/* Container that stores Spaces UI, Rooms UI, and Profile UI */ }
                <div id="infoContainer" className='static flex flex-row justify-start align-top w-full h-screen p-0 m-0' > {/* className='flex flex-row justify-start align-top w-full lg:w-[25vw] h-screen p-0 m-0' */}

                    <div id="roomsContainer" className='inline-flex flex-col justify-start align-top w-full h-full p-0 m-0 bg-purple-800'>

                        {spaceSelector()}

                        {/* Displays Rooms, Offices, and Profile and Settings */ }
                        {roomOfficeProfile()}

                    </div>

                </div>

            </SwiperSlide>
        );
    }

    function channInfoCont():React.JSX.Element {
        return (
            <div id="channelInfoContainer" className="flex items-center justify-between w-auto h-[14vh] sm:h-[7vh] bg-[#3718A7]">
                <div className="flex items-center justify-start">

                    {/* Button that collapses info container to the left */ }

                    {/*
                    <CollapseButton id={"infoContBtn"} onClick={collapseInfoContainer}>
                        <MenuSquare />
                    </CollapseButton>
                    */}

                    <div className="block ml-1 mr-2 text-base sm:text-lg">
                        <h1>
                            # Homework Room
                        </h1>
                    </div>

                    {/* Hides Description when screen size is less than 640px */ }
                    <div>
                        <p className="hidden sm:block text-sm text-gray-300">
                            A Short Channel Description
                        </p>
                    </div>

                </div>

                {/* Button that collapses members container to the right */ }

                {/*
                <CollapseButton id={"memberContBtn"} onClick={collapseMemberContainer}>
                    <Users /> 
                </CollapseButton>
                */}

            </div>
        );
    }

    function msgCont():React.JSX.Element {
        return (
            <div id="messageContainer" className="w-full h-[74.5vh] sm:h-[80vh]">

                <ScrollArea className="w-auto h-full rounded-md border border-slate-500 scroll-smooth">

                {divElements.map((element, index) => (
                    <div key={index}>{element}</div>
                ))}

                </ScrollArea>
                
            </div>
        );
    }

    function inptCont():React.JSX.Element {
        return (
            <div id="inputContainer" className="w-full">

                <Separator className="mb-0" />

                <div id="textBoxContainer" className="flex items-start justify-center w-auto h-fit">

                    <div id="textContainer" className="w-screen">
                    
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-stretch w-full overflow-hidden">
                                <FormField
                                    control={form.control}
                                    name="chatbox"
                                    render={({ field }) => (

                                    /* FormItem determines the dimensions of the textarea */
                                    <FormItem className='w-full h-[11vh] sm:h-[12.5vh] border border-red-500'>

                                        <FormControl>

                                        {/* When Textarea is focused && ...field https://scrimba.com/articles/react-spread-operator/*/}
                                        <Textarea
                                            required 
                                            placeholder="Type..."
                                            className="
                                            min-h-[11vh] sm:min-h-[12.5vh] 
                                            resize-none rounded-lg 
                                            border border-slate-500 
                                            bg-blue-950/75 text-slate-200 
                                            focus-visible:ring-slate-400 focus-visible:ring-offset-blue-500 
                                            focus-visible:shadow-gray-600 
                                            "

                                            
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
        );
    }

    {/* Swiper slider for Chat Container */}
    function chatSwiperSlider():React.JSX.Element {
        return (
            <SwiperSlide>
        
                {/* Chat Container */ } 
                <div id='chatContainer' className={'block static w-full h-screen bg-blue-900/75 p-0 m-0 left-0'}> {/*className={'block static w-screen lg:w-[50vw] h-screen bg-blue-900/75 p-0 m-0 left-0'} */}
                    
                    {channInfoCont()}

                    {msgCont()}

                    {/*Implementing Rich Text Editor to format text too dificult to implement at this time. */}

                    {inptCont()}

                </div> 

            </SwiperSlide>
        );
    }

    function membCont():React.JSX.Element {
        return (
            <div id="memberContainer" className="static w-full h-screen p-0 m-0 bg-blue-900/75 overflow-x-hidden overflow-y-auto"> {/*className="static w-screen lg:w-[25vw] h-screen p-0 m-0 bg-blue-900/75 overflow-x-hidden overflow-y-auto" */}
                
                {/*
                <Button id="my-prev-button" className='hidden lg:block w-full' onClick={collapseMemberContainer}>
                    <ArrowBigLeft />
                </Button>
                */}

                <Accordion type="single" collapsible className="w-auto bg-[#06227D]">
                    <AccordianItems accordTriggerName="Members">
                        
                        <ScrollArea>

                            {/*<AvatarButton src={"https://picsum.photos/200/300"} alt={"Profile Picture"} fallback="A" content="Lorem Not Ipsum" />*/}

                            {avatarItems.map((item, index) => (
                                <AvatarButton key={index} {...item} />
                            ))}


                        </ScrollArea>

                    </AccordianItems>

                </Accordion>

            </div>
        );
    }

    function membSwiperSlider():React.JSX.Element {
        return (
            <SwiperSlide>
                                            
                {membCont()}

            </SwiperSlide>
        );
    }


    function friendActivityContainer():React.JSX.Element {
        return (
            <div className='w-full h-screen bg-gray-500'>
                <div className='inline-flex justify-evenly w-full h-fit border border-red-500'>
                    <Button className='w-[15vw] '>
                        Online
                    </Button>

                    <Button className='w-[10vw]'>
                        All
                    </Button>

                    <Button className='w-[25vw]'>
                        Friend Requests
                    </Button>
                </div>

                
                <div className='inline-flex flex-col w-auto h-full p-0 m-0'>
                    <ScrollArea>
                        {avatarItems.map((item, index) => (
                            <AvatarButton key={index} {...item} />
                        ))}
                    </ScrollArea>
                </div>
                

            </div>
        );
    }

    const [showFriends, setShowFriends] = useState(false);

    const [friendCount, setFriendCount] = useState(0);

    function handleFriendClick() {
        setFriendCount(friendCount + 1);
    }

    function friendDMContainer() {
        return (
            <div className='w-full h-full bg-green-500'>
                <p>
                    ads
                </p>
            </div>
        );
    }

    const [showDM, setShowDM] = useState(false);

    function friendCont():React.JSX.Element {
        return(
            <div className='flex flex-row w-full h-full bg-blue-500'>
                <div className='inline-flex flex-col w-fit border border-red-500'>

                    <Button onClick={() => {setShowFriends(true); setShowDM(false);}} className='w-[25vw]'>
                        Friends
                    </Button>

                    <ScrollArea>
                        
                        <div className='flex flex-col w-auto h-full'>
                            <Button onClick={handleFriendClick} className='justify-between w-[25vw] h-[15vh]'>
                                <span>DMs</span>
                                <Plus />
                            </Button>

                            {friendCount > 0 && (
                            <div className='flex flex-col w-auto h-full'>
                                {Array.from({ length: friendCount }, (_, index) => (
                                    <Button key={index} onClick={() => {setShowDM(true); setShowFriends(false);}} className='w-[25vw] h-auto'>
                                        <div>
                                            <p>
                                                Added Friend {index}
                                            </p>
                                        </div>
                                    </Button>
                                ))}
                            </div>
                            )}
                        </div>

                    </ScrollArea>


                </div>

                <div className='inline-flex w-[80%] h-full border border-green-500'>

                    { showFriends && friendActivityContainer() }

                    { showDM && friendDMContainer() }

                </div>

            </div>
        );
    }
    
    return (

        <div 
        className='flex items-center justify-center
        w-screen h-screen
        bg-slate-950 text-slate-300
        divide-x divide-slate-600 divide-y-0'
        >

            <div id="spacesContainer" className='flex w-fit h-full p-0 m-0 bg-violet-500'>

                <ScrollArea className='w-[20vw] sm:w-[10vw] md:w-[7vw] lg:w-[5vw] h-screen border border-neutral-500'>

                    {/* Opens friend Direct Messages (DMs) */ /* Activate friendCont state from Logo Button*/ }
                    <Button className='w-full h-auto p-1 text-center'>
                        Logo!
                    </Button>

                    {addSpace}

                    <Button onClick={() => setSpaceCount(spaceCount + 1)} className='w-[20vw] sm:w-[10vw] md:w-[7vw] lg:w-[5vw] h-[20vh] sm:h-[10vh] md:h-[7vh] lg:h-[5vh] rounded-full font-bold'>
                        <Plus />
                    </Button>

                </ScrollArea>

            </div>

            {friendCont()}
            
            {/*
                Swiper React Components may be depreciated in future updates.
                However, latest Swiper Elements are not compatible with Next.js and React.
                Produces TypeScript error with difficult work-arounds but no bug fixes from developers yet:
                https://github.com/nolimits4web/swiper/issues/6466

                Solution 1:
                Providing Shadcn UI Button functionality by displaying the 
                chat container if in info container, hides info container and member container.
                chat container if in member container, hides info container and member container.
                and info container or member container if in chat container. 
                Hides info container or member container, and chat container.

                Solution 2: 
                Disable swiping when min-width is 1024px or greater.
                Resort to old UI similar to Discord.
            */} {/*
            <Swiper
            enabled={true}
            preventInteractionOnTransition={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true} // /*false*/ /*{ nextEl: '#my-next-button', prevEl: '#my-prev-button' }*/ /*
            pagination={{ clickable: true }}
            modules={[Navigation]}
            
            /*
            breakpoints={{
                1024: {
                spaceBetween: 0,
                slidesPerView: 3,
                },
            }}
            */ /*
            
            >

                
                {infoSwiperSlide()}

                {chatSwiperSlider()}

                {membSwiperSlider()}

            </Swiper>

        */}
                                    
        </div>
    );
}