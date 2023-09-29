"use client"
import * as React from "react"
import Image from 'next/image';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from '/public/CTPChat_Logo.png'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function NavigationMenuDemo() {
  return (

    <div className="flex flex-col items-stretch justify-between w-[100vw] h-[100vh] bg-sky-200">

      <div className="flex items-center justify-between w-[100vw] bg-gray-700">
        <Image
          src={Logo}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          className="w-[3vw] rounded-full"
        />

        <NavigationMenu className="bg-neutral-800">
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-zinc-800 text-neutral-200">Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-zinc-800 text-neutral-200">Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="bg-zinc-800 text-neutral-200">
                  Documentation
              </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Button><Link href="/login" className="bg-slate-900">Sign Up/Login</Link></Button>
        </div>
        
      </div>

      <div className="w-[100vw] h-[100vh] text-center">
        <h1 className="text-7xl font-bold">Welcome to CTPChat!</h1>
        <h2>Exclusive Open Source Career Tech Prep Communications Platform</h2>
      </div>

      <div className="w-[100vw] text-center bg-neutral-300">
        <div className="flex content-center justify-center space-x-3 underline decoration-solid">
          <Link href="/about">About</Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
          <Link href="/termsOfService">Terms of Service</Link>
        </div>
        
        <div className="content-center">
          <small>&copy; MIT License</small>
        </div>
      </div>

    </div>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

/*
export default function Home() {
  return (
    <main className=" bg-blue-500">

      <Button><Link href="/login" className="align-self-center">Sign Up/Login</Link></Button>

    </main>
  )
}
*/
