"use client";
import { useState, useEffect } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Strikethrough } from "lucide-react";
import { Link } from "lucide-react";
import { List } from "lucide-react";
import { ListOrdered } from "lucide-react";
import { TextQuote } from "lucide-react";
import { Code2 } from "lucide-react";
import { SquareCode } from "lucide-react";
import { Users } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { Settings } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MenuSquare } from "lucide-react";
import { info } from "console";
import { useRouter } from "next/navigation";

//Create functions to seperate sections to reduce amount of code within return statement.

//Displays a div that contains account information and a button to edit that data.
function accountInfoDiv(props: { identifier: string; idObject: string }) {
  return (
    <div className="flex justify-between items-center w-full h-auto">
      <div className="flex justify-start items-center">
        <h6 className="mr-1">{props.identifier}</h6>
        <h6>{props.idObject}</h6>
      </div>

      <div>
        <Button variant="link" className="text-blue-300">
          Edit
        </Button>
      </div>
    </div>
  );
}

/*
    function collapseContainer() {
        
        const infoCont = document.getElementById('infoContainer') as HTMLElement;
        const membCont = document.getElementById('memberContainer') as HTMLElement;

        const chatCont = document.getElementById('chatContainer') as HTMLElement;

        const infoDisplaySetting = getComputedStyle(infoCont).display;
        const membDisplaySetting = getComputedStyle(membCont).display;

        chatCont.style.width = 'inherit';

        if(infoDisplaySetting == 'block') {
            infoCont.style.display = 'none';
        } else {
            infoCont.style.display = 'block';
        }

        if(membDisplaySetting == 'block') {
            membCont.style.display = 'none';
        } else {
            membCont.style.display = 'block';
        }

    }
    */

//Have to get the whole inforContainer to modify with react states.
function collapseInfoContainer() {
  const infoCont = document.getElementById("infoContainer") as HTMLElement;

  const chatCont = document.getElementById("chatContainer") as HTMLElement;

  //const displaySetting = infoCont.style.display;
  const displaySetting = window
    .getComputedStyle(infoCont)
    .getPropertyValue("display");

  if (displaySetting == "block") {
    infoCont.style.display = "none";
  } else {
    infoCont.style.display = "block";
  }

  chatCont.style.width = "inherit";
}

function collapseMemberContainer() {
  const membCont = document.getElementById("memberContainer") as HTMLElement;

  const chatCont = document.getElementById("chatContainer") as HTMLElement;

  //const displaySetting = infoCont.style.display;
  const displaySetting = window
    .getComputedStyle(membCont)
    .getPropertyValue("display");

  if (displaySetting == "block") {
    membCont.style.display = "none";
  } else {
    membCont.style.display = "block";
  }

  chatCont.style.width = "inherit";
}

//interface to insert Shadcn UI accordian children props/elements
interface accordItemsProps {
  children: React.JSX.Element[] | React.JSX.Element;
  accordTriggerName: string;
}

//Function that creates Shadcn UI <AccordionItem> tags with content within them.
function AccordianItems({ children, accordTriggerName }: accordItemsProps) {
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

/*
    //Function that creates formatting text buttons with lucide-react symbols as button text
    interface formattingProps {
        children: React.JSX.Element;
        onClick: () => void;
        ariaPressed: boolean;
      }

    function FormattingElement({ children, onClick, ariaPressed }: formattingProps) {

        return (
            <div>
                <Toggle 
                aria-pressed={ariaPressed} 
                aria-label="Toggle" 
                onClick={onClick}
                >
                    {children}
                </Toggle>
            </div>
        );
    }
    */

//Creates the UI for the text that is going to be displayed after user hits the submit button
function DivElement({ message }: { message: string }) {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div
      key={crypto.randomUUID()}
      className="border border-[#A3A3A3] bg-inheret text-slate-200 p-1"
    >
      <div className="flex items-center justify-start w-full h-auto">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="px-3">
          <h6>Lorem Ipsum</h6>
        </div>

        <div>
          <h6 className="text-gray-500">{currentTime}</h6>
        </div>
      </div>

      <div className="w-full h-auto whitespace-normal break-words pl-[11.5%]">
        {message}
      </div>
    </div>
  );
}

interface collapseBtnProps {
  children: React.JSX.Element;
  id: string;
  onClick: () => void;
}

//Creates the collapse buttons within middle chat container
function CollapseButton({ children, id, onClick }: collapseBtnProps) {
  const [ID, setID] = useState(id);

  useEffect(() => {
    setID(id);
  }, [id]);

  return (
    <div className="mr-1">
      <Button
        variant="secondary"
        id={id}
        className="bg-indigo-900 hover:bg-indigo-700 text-slate-200"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}

export default function Home() {
  interface Space {
    space_id: number;
    space_name: string;
  }

  interface Friend {
    username: string;
    id: number;
    online: boolean;
  }

  interface UserInfo {
    date_of_birth: string;
    email: string;
    school: string;
    username: string;
  }

  interface FriendRequest {
    requester_id: number;
    requester_name: string;
    requester_school: string;
  }

  interface StateRoute {
    route: Routes;
    sub_route?: string;
    chat_id?: number;
    chat_name?: string;
  }

  interface Message {
    user_from: number;
    message_text: string;
    sent_at: Date;
    friend_id: number;
    username: string;
  }

  type Routes = "FRIEND_INFO" | "ADD_FRIEND" | "DIRECT_MESSAGE";

  const [spaces, setSpaces] = useState<Space[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [rightSideRoute, setRightSideRoute] = useState<StateRoute>({
    route: "FRIEND_INFO",
    sub_route: "All",
  });
  const [friendRequest, setFriendRequest] = useState("");
  const [friendRequestStatus, setFriendRequestStatus] = useState("");
  const [ws, setWs] = useState<WebSocket | undefined>();
  const [divElements, setDivElements] = useState<React.JSX.Element[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [textArea, setTextArea] = useState<string>("");
  const [curFriendId, setCurFriendId] = useState<number>();

  const router = useRouter();

  useEffect(() => {
    const ws_temp = new WebSocket("ws://localhost:8008/ws");
    setWs(ws_temp);

    ws_temp.onopen = () => {
      ws_temp.send(
        JSON.stringify({ type: "open", token: localStorage.getItem("uuid") })
      );
    };

    ws_temp.onmessage = (message) => {
      console.log(message.data);

      const data = JSON.parse(message.data);

      switch (data.type) {
        case "poolLeave":
          console.log("yes");
          friends.map(({ id, username, online }) => {
            const rightUser = username === data.user;
            return {
              id,
              username,
              online: rightUser ? false : online,
            };
          });
          break;
        case "message":
          setMessages(JSON.parse(data.message));
      }
    };

    (async () => {
      const spaces = await fetch("http://localhost:8008/v1/home/get-spaces", {
        method: "POST",
        body: JSON.stringify({
          token: localStorage.getItem("uuid"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const friends = await fetch("http://localhost:8008/v1/home/get-friends", {
        method: "POST",
        body: JSON.stringify({
          token: localStorage.getItem("uuid"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user_info = await fetch(
        "http://localhost:8008/v1/home/get-user-info",
        {
          method: "POST",
          body: JSON.stringify({
            token: localStorage.getItem("uuid"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const friend_requests = await fetch(
        "http://localhost:8008/v1/home/get-friend-requests",
        {
          method: "POST",
          body: JSON.stringify({
            token: localStorage.getItem("uuid"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSpaces(await spaces.json());
      setFriends(await friends.json());
      setUserInfo(await user_info.json());
      setFriendRequests(await friend_requests.json());
    })();

    if (localStorage.getItem("uuid") === null) {
      router.replace("/");
    }

    return () => {
      ws_temp.close();
      setWs(undefined);
    };
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      setFriendRequestStatus("");
    }, 2e3);
  }, [friendRequestStatus]);

  useEffect(() => {
    setTextArea("");
  }, [rightSideRoute]);

  return (
    <main className="flex">
      <div className=" border-e-2 border-black min-h-screen">
        <button
          onClick={() =>
            setRightSideRoute({ route: "FRIEND_INFO", sub_route: "All" })
          }
        >
          friends
        </button>
        {spaces.map(({ space_name, space_id }) => (
          <button key={space_id}>{space_name}</button>
        ))}
      </div>
      <div className="w-[500px]">
        <button
          className="bg-green-600"
          onClick={() => setRightSideRoute({ route: "ADD_FRIEND" })}
        >
          Add friend
        </button>
        <h2>Direct Message</h2>
        <div className="flex flex-col">
          {friends.map(({ id, username, online }) => (
            <button
              key={id}
              onClick={async () => {
                setRightSideRoute({
                  route: "DIRECT_MESSAGE",
                  chat_id: id,
                  chat_name: username,
                });

                const messages = await fetch(
                  "http://localhost:8008/v1/home/get-friend-messages",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      token: localStorage.getItem("uuid"),
                      user_id: id,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                const parsed_messages = await messages.json();

                ws?.send(
                  JSON.stringify({
                    type: "join-direct",
                    direct_id: parsed_messages.friend_id,
                    token: localStorage.getItem("uuid"),
                  })
                );

                setCurFriendId(parsed_messages.friend_id);

                setMessages(parsed_messages.messages);
              }}
            >
              {username} {/*| ({online ? "online" : "offline"})*/}
            </button>
          ))}
        </div>
        <div className="flex">
          <img
            src="https://picsum.photos/200"
            alt="user profile image"
            className="w-[50px] h-[50px] me-6 rounded-full"
          />
          <div>
            <p className="text-xl">
              {userInfo.length > 0 && userInfo[0].username}
            </p>
            <p>{userInfo.length > 0 && userInfo[0].school}</p>
          </div>
        </div>
        <button
          onClick={() => {
            ws!.close(1000, localStorage.getItem("uuid")!);
            localStorage.removeItem("uuid");
            router.replace("/");
          }}
        >
          Logout
        </button>
      </div>

      {rightSideRoute.route === "ADD_FRIEND" ? (
        <div>
          <input
            type="text"
            className="border-2 border-black"
            value={friendRequest}
            onChange={(e) => setFriendRequest(e.target.value)}
          />
          <button
            className=" bg-blue-500"
            onClick={async () => {
              setFriendRequestStatus("");
              try {
                const result = await fetch(
                  "http://localhost:8008/v1/home/add-friend",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      token: localStorage.getItem("uuid"),
                      username: friendRequest,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                setFriendRequestStatus(await result.text());
              } catch (e) {
                setFriendRequestStatus("User not found.");
              } finally {
                setFriendRequest("");
              }
            }}
          >
            Send Friend Request
          </button>
          <p
            className={`${
              friendRequestStatus === "User not found."
                ? "text-red-600"
                : "text-green-500"
            }`}
          >
            {friendRequestStatus}
          </p>
        </div>
      ) : rightSideRoute.route === "FRIEND_INFO" ? (
        <div>
          <div className="flex gap-12">
            <button
              onClick={() =>
                setRightSideRoute({ ...rightSideRoute, sub_route: "Online" })
              }
            >
              Online
            </button>
            <button
              onClick={() =>
                setRightSideRoute({ ...rightSideRoute, sub_route: "All" })
              }
            >
              All
            </button>
            <button
              onClick={() =>
                setRightSideRoute({
                  ...rightSideRoute,
                  sub_route: "Friend Requests",
                })
              }
            >
              Friend Requests
            </button>
          </div>

          {rightSideRoute.sub_route === "All" ? (
            <div></div>
          ) : rightSideRoute.sub_route === "Online" ? (
            <div></div>
          ) : (
            <div>
              <h2>Friend requests</h2>

              {friendRequests.map(
                ({ requester_id, requester_name, requester_school }) => (
                  <div className="flex" key={requester_id}>
                    <div>
                      <p className="text-xl font-bold">{requester_name}</p>
                      <p>{requester_school}</p>
                    </div>
                    <button
                      className="bg-green-500"
                      onClick={async () => {
                        await fetch(
                          "http://localhost:8008/v1/home/accept-friend-request",
                          {
                            method: "POST",
                            body: JSON.stringify({
                              token: localStorage.getItem("uuid"),
                              user_id: requester_id,
                            }),
                            headers: {
                              "Content-Type": "application/json",
                            },
                          }
                        );
                        setFriendRequests(
                          friendRequests.filter(
                            (f) => f.requester_id != requester_id
                          )
                        );
                      }}
                    >
                      Accept
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          className="flex items-center justify-center
         h-screen
        bg-slate-950 text-slate-200
        divide-x divide-slate-600 divide-y-0"
        >
          {/* overflow-hidden hides the scroll that appears when accordian is clicked */}
          {/* <div
            id="infoContainer"
            className="hidden static w-[25vw] h-screen bg-blue-900/75 overflow-x-auto overflow-y-hidden"
          >
            {/* Stores Shadcn UI Accordians and scrolls when there is a lot of content. }
            <div id="channelContainer" className="h-[90%]">
              <Button className="w-full" onClick={collapseInfoContainer}>
                <ArrowRight />
              </Button>

              <ScrollArea className="h-full w-full rounded-md">
                <Accordion type="multiple" className="w-full bg-[#06227D]">
                  {/* Like Discord channels, group chats for a specific topic }
                  <AccordianItems accordTriggerName="Rooms">
                    <Button className="w-full justify-start rounded-none bg-[#072998] text-slate-200">
                      # Class1
                    </Button>
                    <Button className="w-full justify-start rounded-none bg-[#072998] text-slate-200">
                      # Class2
                    </Button>
                  </AccordianItems>

                  {/*
                        Based off Slack Direct Messages, two-person chats that people can individually talk with each other
                        within the Space.
                        }
                  <AccordianItems accordTriggerName="Direct Messages (DMs)">
                    <Button className="w-full justify-start rounded-sm bg-[#103BA7] text-slate-200">
                      <div>
                        <Avatar>
                          <AvatarImage
                            src="https://is.gd/az39r7"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p>
                          <b>Lorem Ipsum</b>
                        </p>
                      </div>
                    </Button>

                    <Button className="w-full justify-start rounded-sm bg-[#103BA7] text-slate-200">
                      <div>
                        <Avatar>
                          <AvatarImage
                            src="https://is.gd/jUG71g"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p>
                          <b>Lorem Ipsum</b>
                        </p>
                      </div>
                    </Button>
                  </AccordianItems>
                </Accordion>
              </ScrollArea>
            </div>

            <div
              id="profileContainer"
              className="flex items-center justify-center align-bottom h-[10%]"
            >
              {/*Extra feature: Could make profile information appear when profile is clicked. }
              <div
                id="profile"
                className="flex items-stretch justify-stretch w-5/6 h-full p-3 bg-blue-950/75"
              >
                <div className="m-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
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
                        </Button>*/}

          {/* <Dialog>
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
                    <Tabs
                      defaultValue="myaccount"
                      className="flex h-screen w-[95vw]"
                    >
                      <div
                        id="tabsList"
                        className="w-fit h-full border border-[#9CB3E3] rounded-md"
                      >
                        <TabsList
                          className="grid grid-row-3
                                         w-[20vw] h-auto
                                         justify-normal
                                         bg-[#16337D] text-slate-200"
                        >
                          <TabsTrigger value="myaccount">
                            My Account
                          </TabsTrigger>
                          <TabsTrigger value="profile">Profile</TabsTrigger>
                          <TabsTrigger value="adjustments">
                            Adjustments
                          </TabsTrigger>
                        </TabsList>
                      </div>

                      <div id="tabsContent" className=" w-full h-full">
                        <TabsContent
                          value="myaccount"
                          className="w-full h-full m-0"
                        >
                          <Card className="w-full h-full bg-[#082261] text-slate-200">
                            <CardTitle>My Account</CardTitle>

                            <div className="bg-teal-700">
                              {/*Make map of repeatable code in future Link: https://sl.bing.net/5TNfKtfrsy }
                              <div className="flex justify-between items-center w-full h-auto">
                                <div className="flex justify-start items-center">
                                  <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>

                                  <h6>Lorem Ipsum</h6>
                                </div>

                                <div>
                                  <Button
                                    variant="link"
                                    className="text-blue-300"
                                  >
                                    Edit
                                  </Button>
                                </div>
                              </div>

                              {accountInfoDiv({
                                identifier: "Role:",
                                idObject: "Student",
                              })}

                              {accountInfoDiv({
                                identifier: "Phone Number:",
                                idObject: "###-###-####",
                              })}

                              {accountInfoDiv({
                                identifier: "Email:",
                                idObject: "Castocired54@cuvox.de",
                              })}
                            </div>

                            <div className="flex w-full max-w-sm items-center space-x-2 my-[5px]">
                              <Button type="submit">Change Password</Button>
                              <Input
                                type="changePassword"
                                placeholder="password"
                              />
                            </div>

                            <div className="w-full h-auto my-60">
                              <Button className="bg-red-600">
                                Delete Account
                              </Button>
                            </div>
                          </Card>
                        </TabsContent>

                        <TabsContent
                          value="profile"
                          className="w-full h-full m-0"
                        >
                          <Card className="w-full h-full bg-[#082261] text-slate-200">
                            <CardTitle>Profile</CardTitle>

                            <div className="flex justify-center items-center w-full h-aut">
                              <div>
                                <Avatar>
                                  <AvatarImage src="https://github.com/shadcn.png" />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <Button
                                  variant="link"
                                  className="text-blue-300"
                                >
                                  Edit
                                </Button>
                              </div>
                            </div>

                            {accountInfoDiv({
                              identifier: "Role:",
                              idObject: "Student",
                            })}

                            {accountInfoDiv({
                              identifier: "Pronouns:",
                              idObject: "He/Her/They",
                            })}

                            {accountInfoDiv({
                              identifier: "First Name:",
                              idObject: "John",
                            })}

                            {accountInfoDiv({
                              identifier: "Last Name:",
                              idObject: "Doe",
                            })}

                            {accountInfoDiv({
                              identifier: "Phone Number:",
                              idObject: "###-###-####",
                            })}

                            {accountInfoDiv({
                              identifier: "Email:",
                              idObject: "Castocired54@cuvox.de",
                            })}
                          </Card>
                        </TabsContent>

                        <TabsContent
                          value="adjustments"
                          className="w-full h-full m-0"
                        >
                          <Card className="w-full h-full bg-[#082261] text-slate-200">
                            <CardTitle>Adjustments</CardTitle>

                            <h1>Audio: </h1>
                            <Button>Change Audio</Button>

                            <h1>Background Color: </h1>

                            <Button>Change Background Color</Button>
                          </Card>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </DialogContent>
                </Dialog> }
              </div>
            </div>
          </div> */}

          <div
            id="chatContainer"
            className="block static min-w-[50vw] w-auto h-screen bg-blue-900/75"
          >
            {" "}
            {/*bg-blue-950*/}
            <div
              id="channelInfoContainer"
              className="flex items-center justify-between w-auto h-[14vh] sm:h-[7vh] bg-[#3718A7]"
            >
              <div className="flex items-center justify-start">
                {/* Button that collapses info container to the left */}
                {/* <CollapseButton
                  id={"infoContBtn"}
                  onClick={collapseInfoContainer}
                >
                  <MenuSquare />
                </CollapseButton> */}

                <div className="block ml-1 mr-2 ms-3 text-base sm:text-lg">
                  <h1>{rightSideRoute.chat_name}</h1>
                </div>
              </div>

              {/* Button that collapses members container to the right */}
              <CollapseButton
                id={"memberContBtn"}
                onClick={collapseMemberContainer}
              >
                <Users />
              </CollapseButton>
            </div>
            {/* Use states for content within messageContainer */}
            <div id="messageContainer" className="w-full h-[78.5vh]">
              {/* Need to figure out how to scroll down when content is added */}
              <ScrollArea className="w-auto h-full rounded-md border border-slate-500 scroll-smooth">
                {messages &&
                  messages.map(({ message_text, username }, i) => (
                    <>
                      <h3 className="font-bold">{username}</h3>
                      <p className="ms-2" key={i}>
                        {message_text}
                      </p>
                    </>
                  ))}
              </ScrollArea>
            </div>
            {/* Contains the formatting buttons and textarea that the user can submit text */}
            <div id="inputContainer" className="w-auto">
              <div
                id="formattingContainer"
                className="w-auto h-[6vh] bg-sky-950/75"
              >
                <div>
                  <Separator className="mb-3" />

                  {/* Unable to format text without using depreciated JS. Need a rich text editor. */}
                  <div className="flex h-5 items-center space-x-1 text-sm">
                    {/* Formatting text buttons */}
                    {/*
                                <FormattingElement onClick={() => setBold(!bold)} ariaPressed={bold}>
                                    {boldSymbol}
                                </FormattingElement>

                                <FormattingElement onClick={() => setItalic(!italic)} ariaPressed={italic}>{italicSymbol}</FormattingElement>

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{underlineSymbol}</FormattingElement>

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{strikethroughSymbol}</FormattingElement>

                                {/* A line that divides buttons into groups */}{" "}
                    {/*
                                <Separator orientation="vertical" />

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{linkSymbol}</FormattingElement>

                                <Separator orientation="vertical" />

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{listSymbol}</FormattingElement>

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{listorderedSymbol}</FormattingElement>

                                <Separator orientation="vertical" />

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{textquoteSymbol}</FormattingElement>

                                <Separator orientation="vertical" />

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{code2Symbol}</FormattingElement>

                                <FormattingElement onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                } } ariaPressed={false}>{squarecodeSymbol}</FormattingElement>

                                <Separator orientation="vertical" />
                                */}
                  </div>
                </div>
              </div>

              <Separator className="mb-0" />

              <div
                id="textBoxContainer"
                className="flex items-start justify-center w-auto h-fit"
              >
                {/* Redo Upload Container */}
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
                          <h4 className="font-medium leading-none">
                            Upload a File
                          </h4>
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
                                  className="bg-sky-200/10 hover:bg-slate-100/[.85] text-slate-200"
                                >
                                  Upload
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px] bg-[#0D2257]/90 text-slate-200">
                                {/* DialogContent text color for close button color */}
                                <DialogHeader className="text-slate-200">
                                  <DialogTitle>Upload a File</DialogTitle>
                                  <DialogDescription>
                                    Upload an image, file, or video.
                                  </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    {/* Redo upload feature. Get Uploaded files to screen. */}
                                    <Label
                                      htmlFor="picture"
                                      className="w-full bg-red-400 text-black"
                                    >
                                      Picture
                                    </Label>
                                    <Input
                                      id="picture"
                                      type="file"
                                      className="w-[25vw] bg-green-400 text-black"
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

                <div id="textContainer" className="w-screen">
                  <Textarea
                    required
                    placeholder="Type..."
                    className="
                        min-h-fit
                        resize-none rounded-lg
                        border border-slate-500
                        bg-blue-950/75 text-slate-200
                        focus-visible:ring-slate-400 focus-visible:ring-offset-blue-500
                        focus-visible:shadow-gray-600
                        "
                    onChange={(e) => setTextArea(e.target.value)}
                    value={textArea}
                  />
                  <button
                    onClick={() => {
                      ws?.send(
                        JSON.stringify({
                          type: "send",
                          token: localStorage.getItem("uuid"),
                          direct_id: curFriendId,
                          message: textArea,
                        })
                      );
                      setTextArea("");
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="memberContainer"
            className="hidden static w-[25vw] h-screen bg-blue-900/75 overflow-x-auto overflow-y-hidden"
          >
            {" "}
            {/*bg-blue-950*/}
            <Button className="w-full" onClick={collapseMemberContainer}>
              <ArrowLeft />
            </Button>
            <Accordion
              type="single"
              collapsible
              className="w-auto bg-[#06227D]"
            >
              <AccordianItems accordTriggerName="Members">
                <p>
                  Show members including user from Profile Container. May use
                  profiles from DMs.
                </p>
              </AccordianItems>
            </Accordion>
          </div>
        </div>
      )}
    </main>
  );
}

// export default function Home() {
//   const [divElements, setDivElements] = useState<React.JSX.Element[]>([]);

//   /*Message expands textarea past div height*/
//   const FormSchema = z.object({
//     //No need for validation as shadcn textarea `required` property does not allow empty messages to be submitted.
//     chatbox: z.string(),
//   });

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       chatbox: "",
//     },
//   });

//   //Be careful of React state pitfall: https://is.gd/NLwCfG
//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     //console.log(data.chatbox);

//     const input = data.chatbox;

//     setDivElements([...divElements, <DivElement message={input} />]);
//   }

//   /*
//     const [bold, setBold] = useState(false);
//     const [italic, setItalic] = useState(false);
//     const [underline, setUnderline] = useState(false);
//     const [strikethrough, setStrikethrough] = useState(false);

//     const styles: string[] = [];
//     if (bold) styles.push('font-bold');
//     if (italic) styles.push('italic');
//     if (underline) styles.push('underline');
//     if (strikethrough) styles.push('line-through');

//     //Text Formatting Symbols
//     const boldSymbol = <Bold className="h-4 w-4" />;
//     const italicSymbol = <Italic className="h-4 w-4" />;
//     const underlineSymbol = <Underline className="h-4 w-4" />;
//     const strikethroughSymbol = <Strikethrough className="h-4 w-4" />;
//     const linkSymbol = <Link className="h-4 w-4" />;
//     const listSymbol = <List className="h-4 w-4"/>;
//     const listorderedSymbol = <ListOrdered className="h-4 w-4"/>;
//     const textquoteSymbol = <TextQuote className="h-4 w-4"/>;
//     const code2Symbol = <Code2 className="h-4 w-4"/>;
//     const squarecodeSymbol = <SquareCode className="h-4 w-4"/>;
//     */

//   const router = useRouter();

//   useEffect(() => {
//     (async () => {
//       const spaces = await fetch("http://localhost:8008/v1/home/get-spaces", {
//         method: "POST",
//         body: JSON.stringify({
//           token: localStorage.getItem("uuid"),
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const friends = await fetch("http://localhost:8008/v1/home/get-friends", {
//         method: "POST",
//         body: JSON.stringify({
//           token: localStorage.getItem("uuid"),
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const user_info = await fetch(
//         "http://localhost:8008/v1/home/get-user-info",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             token: localStorage.getItem("uuid"),
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(await spaces.json());
//       console.log(await friends.json());
//       console.log(await user_info.json());
//     })();
//     if (localStorage.getItem("uuid") === null) {
//       router.replace("/");
//     }
//   }, []);

//   return (
//     <main>

//       <div>
//         <button>friends</button>

//       </div>

//     </main>
//   )

//   // return (
//   //   <div
//   //     className="flex items-center justify-center
//   //       w-screen h-screen
//   //       bg-slate-950 text-slate-200
//   //       divide-x divide-slate-600 divide-y-0"
//   //   >
//   //     <button
//   //       onClick={() => {
//   //         localStorage.removeItem("uuid");
//   //         router.replace("/");
//   //       }}
//   //     >
//   //       Logout
//   //     </button>

//   //     {/* overflow-hidden hides the scroll that appears when accordian is clicked */}
//   //     <div
//   //       id="infoContainer"
//   //       className="hidden static w-[25vw] h-screen bg-blue-900/75 overflow-x-auto overflow-y-hidden"
//   //     >
//   //       {/* Stores Shadcn UI Accordians and scrolls when there is a lot of content. */}
//   //       <div id="channelContainer" className="h-[90%]">
//   //         <Button className="w-full" onClick={collapseInfoContainer}>
//   //           <ArrowRight />
//   //         </Button>

//   //         <ScrollArea className="h-full w-full rounded-md">
//   //           <Accordion type="multiple" className="w-full bg-[#06227D]">
//   //             {/* Like Discord channels, group chats for a specific topic */}
//   //             <AccordianItems accordTriggerName="Rooms">
//   //               <Button className="w-full justify-start rounded-none bg-[#072998] text-slate-200">
//   //                 # Class1
//   //               </Button>
//   //               <Button className="w-full justify-start rounded-none bg-[#072998] text-slate-200">
//   //                 # Class2
//   //               </Button>
//   //             </AccordianItems>

//   //             {/*
//   //                       Based off Slack Direct Messages, two-person chats that people can individually talk with each other
//   //                       within the Space.
//   //                       */}
//   //             <AccordianItems accordTriggerName="Direct Messages (DMs)">
//   //               <Button className="w-full justify-start rounded-sm bg-[#103BA7] text-slate-200">
//   //                 <div>
//   //                   <Avatar>
//   //                     <AvatarImage src="https://is.gd/az39r7" alt="@shadcn" />
//   //                     <AvatarFallback>CN</AvatarFallback>
//   //                   </Avatar>
//   //                 </div>
//   //                 <div>
//   //                   <p>
//   //                     <b>Lorem Ipsum</b>
//   //                   </p>
//   //                 </div>
//   //               </Button>

//   //               <Button className="w-full justify-start rounded-sm bg-[#103BA7] text-slate-200">
//   //                 <div>
//   //                   <Avatar>
//   //                     <AvatarImage src="https://is.gd/jUG71g" alt="@shadcn" />
//   //                     <AvatarFallback>CN</AvatarFallback>
//   //                   </Avatar>
//   //                 </div>
//   //                 <div>
//   //                   <p>
//   //                     <b>Lorem Ipsum</b>
//   //                   </p>
//   //                 </div>
//   //               </Button>
//   //             </AccordianItems>
//   //           </Accordion>
//   //         </ScrollArea>
//   //       </div>

//   //       <div
//   //         id="profileContainer"
//   //         className="flex items-center justify-center align-bottom h-[10%]"
//   //       >
//   //         {/*Extra feature: Could make profile information appear when profile is clicked. */}
//   //         <div
//   //           id="profile"
//   //           className="flex items-stretch justify-stretch w-5/6 h-full p-3 bg-blue-950/75"
//   //         >
//   //           <div className="m-2">
//   //             <Avatar>
//   //               <AvatarImage
//   //                 src="https://github.com/shadcn.png"
//   //                 alt="@shadcn"
//   //               />
//   //               <AvatarFallback>CN</AvatarFallback>
//   //             </Avatar>
//   //           </div>
//   //           <div className="m-2">
//   //             <p>
//   //               <b>Lorem Ipsum</b>
//   //             </p>
//   //           </div>
//   //         </div>

//   //         <div id="settings" className="h-full">
//   //           {/*
//   //                       <Button variant="secondary" className="w-full h-full bg-blue-900/75 hover:bg-blue-700/75 text-slate-200">
//   //                           <Settings />
//   //                       </Button>*/}

//   //           <Dialog>
//   //             <DialogTrigger asChild>
//   //               <Button
//   //                 variant="secondary"
//   //                 className="w-full h-full
//   //                               bg-blue-900/75 hover:bg-blue-700/75 text-slate-200"
//   //               >
//   //                 <Settings />
//   //               </Button>
//   //             </DialogTrigger>

//   //             <DialogContent className="max-w-full w-full h-full bg-[#0D2257]/90 text-slate-200">
//   //               <Tabs
//   //                 defaultValue="myaccount"
//   //                 className="flex h-screen w-[95vw]"
//   //               >
//   //                 <div
//   //                   id="tabsList"
//   //                   className="w-fit h-full border border-[#9CB3E3] rounded-md"
//   //                 >
//   //                   <TabsList
//   //                     className="grid grid-row-3
//   //                                        w-[20vw] h-auto
//   //                                        justify-normal
//   //                                        bg-[#16337D] text-slate-200"
//   //                   >
//   //                     <TabsTrigger value="myaccount">My Account</TabsTrigger>
//   //                     <TabsTrigger value="profile">Profile</TabsTrigger>
//   //                     <TabsTrigger value="adjustments">Adjustments</TabsTrigger>
//   //                   </TabsList>
//   //                 </div>

//   //                 <div id="tabsContent" className=" w-full h-full">
//   //                   <TabsContent
//   //                     value="myaccount"
//   //                     className="w-full h-full m-0"
//   //                   >
//   //                     <Card className="w-full h-full bg-[#082261] text-slate-200">
//   //                       <CardTitle>My Account</CardTitle>

//   //                       <div className="bg-teal-700">
//   //                         {/*Make map of repeatable code in future Link: https://sl.bing.net/5TNfKtfrsy */}
//   //                         <div className="flex justify-between items-center w-full h-auto">
//   //                           <div className="flex justify-start items-center">
//   //                             <Avatar>
//   //                               <AvatarImage src="https://github.com/shadcn.png" />
//   //                               <AvatarFallback>CN</AvatarFallback>
//   //                             </Avatar>

//   //                             <h6>Lorem Ipsum</h6>
//   //                           </div>

//   //                           <div>
//   //                             <Button variant="link" className="text-blue-300">
//   //                               Edit
//   //                             </Button>
//   //                           </div>
//   //                         </div>

//   //                         {accountInfoDiv({
//   //                           identifier: "Role:",
//   //                           idObject: "Student",
//   //                         })}

//   //                         {accountInfoDiv({
//   //                           identifier: "Phone Number:",
//   //                           idObject: "###-###-####",
//   //                         })}

//   //                         {accountInfoDiv({
//   //                           identifier: "Email:",
//   //                           idObject: "Castocired54@cuvox.de",
//   //                         })}
//   //                       </div>

//   //                       <div className="flex w-full max-w-sm items-center space-x-2 my-[5px]">
//   //                         <Button type="submit">Change Password</Button>
//   //                         <Input type="changePassword" placeholder="password" />
//   //                       </div>

//   //                       <div className="w-full h-auto my-60">
//   //                         <Button className="bg-red-600">Delete Account</Button>
//   //                       </div>
//   //                     </Card>
//   //                   </TabsContent>

//   //                   <TabsContent value="profile" className="w-full h-full m-0">
//   //                     <Card className="w-full h-full bg-[#082261] text-slate-200">
//   //                       <CardTitle>Profile</CardTitle>

//   //                       <div className="flex justify-center items-center w-full h-aut">
//   //                         <div>
//   //                           <Avatar>
//   //                             <AvatarImage src="https://github.com/shadcn.png" />
//   //                             <AvatarFallback>CN</AvatarFallback>
//   //                           </Avatar>

//   //                           <Button variant="link" className="text-blue-300">
//   //                             Edit
//   //                           </Button>
//   //                         </div>
//   //                       </div>

//   //                       {accountInfoDiv({
//   //                         identifier: "Role:",
//   //                         idObject: "Student",
//   //                       })}

//   //                       {accountInfoDiv({
//   //                         identifier: "Pronouns:",
//   //                         idObject: "He/Her/They",
//   //                       })}

//   //                       {accountInfoDiv({
//   //                         identifier: "First Name:",
//   //                         idObject: "John",
//   //                       })}

//   //                       {accountInfoDiv({
//   //                         identifier: "Last Name:",
//   //                         idObject: "Doe",
//   //                       })}

//   //                       {accountInfoDiv({
//   //                         identifier: "Phone Number:",
//   //                         idObject: "###-###-####",
//   //                       })}

//   //                       {accountInfoDiv({
//   //                         identifier: "Email:",
//   //                         idObject: "Castocired54@cuvox.de",
//   //                       })}
//   //                     </Card>
//   //                   </TabsContent>

//   //                   <TabsContent
//   //                     value="adjustments"
//   //                     className="w-full h-full m-0"
//   //                   >
//   //                     <Card className="w-full h-full bg-[#082261] text-slate-200">
//   //                       <CardTitle>Adjustments</CardTitle>

//   //                       <h1>Audio: </h1>
//   //                       <Button>Change Audio</Button>

//   //                       <h1>Background Color: </h1>

//   //                       <Button>Change Background Color</Button>
//   //                     </Card>
//   //                   </TabsContent>
//   //                 </div>
//   //               </Tabs>
//   //             </DialogContent>
//   //           </Dialog>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     <div
//   //       id="chatContainer"
//   //       className="block static min-w-[50vw] w-auto h-screen bg-blue-900/75"
//   //     >
//   //       {" "}
//   //       {/*bg-blue-950*/}
//   //       <div
//   //         id="channelInfoContainer"
//   //         className="flex items-center justify-between w-auto h-[14vh] sm:h-[7vh] bg-[#3718A7]"
//   //       >
//   //         <div className="flex items-center justify-start">
//   //           {/* Button that collapses info container to the left */}
//   //           <CollapseButton id={"infoContBtn"} onClick={collapseInfoContainer}>
//   //             <MenuSquare />
//   //           </CollapseButton>

//   //           <div className="block ml-1 mr-2 text-base sm:text-lg">
//   //             <h1># Homework Room</h1>
//   //           </div>

//   //           {/* Hide Description when screen size is small */}
//   //           <div>
//   //             <p className="hidden sm:block text-sm text-gray-300">
//   //               A Short Channel Description
//   //             </p>
//   //           </div>
//   //         </div>

//   //         {/* Button that collapses members container to the right */}
//   //         <CollapseButton
//   //           id={"memberContBtn"}
//   //           onClick={collapseMemberContainer}
//   //         >
//   //           <Users />
//   //         </CollapseButton>
//   //       </div>
//   //       {/* Use states for content within messageContainer */}
//   //       <div id="messageContainer" className="w-full h-[78.5vh]">
//   //         {/* Need to figure out how to scroll down when content is added */}
//   //         <ScrollArea className="w-auto h-full rounded-md border border-slate-500 scroll-smooth">
//   //           {divElements.map((element, index) => (
//   //             <div key={index}>{element}</div>
//   //           ))}
//   //         </ScrollArea>
//   //       </div>
//   //       {/* Contains the formatting buttons and textarea that the user can submit text */}
//   //       <div id="inputContainer" className="w-auto">
//   //         <div
//   //           id="formattingContainer"
//   //           className="w-auto h-[6vh] bg-sky-950/75"
//   //         >
//   //           <div>
//   //             <Separator className="mb-3" />

//   //             {/* Unable to format text without using depreciated JS. Need a rich text editor. */}
//   //             <div className="flex h-5 items-center space-x-1 text-sm">
//   //               {/* Formatting text buttons */}
//   //               {/*
//   //                               <FormattingElement onClick={() => setBold(!bold)} ariaPressed={bold}>
//   //                                   {boldSymbol}
//   //                               </FormattingElement>

//   //                               <FormattingElement onClick={() => setItalic(!italic)} ariaPressed={italic}>{italicSymbol}</FormattingElement>

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{underlineSymbol}</FormattingElement>

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{strikethroughSymbol}</FormattingElement>

//   //                               {/* A line that divides buttons into groups */}{" "}
//   //               {/*
//   //                               <Separator orientation="vertical" />

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{linkSymbol}</FormattingElement>

//   //                               <Separator orientation="vertical" />

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{listSymbol}</FormattingElement>

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{listorderedSymbol}</FormattingElement>

//   //                               <Separator orientation="vertical" />

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{textquoteSymbol}</FormattingElement>

//   //                               <Separator orientation="vertical" />

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{code2Symbol}</FormattingElement>

//   //                               <FormattingElement onClick={function (): void {
//   //                                   throw new Error('Function not implemented.');
//   //                               } } ariaPressed={false}>{squarecodeSymbol}</FormattingElement>

//   //                               <Separator orientation="vertical" />
//   //                               */}
//   //             </div>
//   //           </div>
//   //         </div>

//   //         <Separator className="mb-0" />

//   //         <div
//   //           id="textBoxContainer"
//   //           className="flex items-start justify-center w-auto h-fit"
//   //         >
//   //           {/* Redo Upload Container */}
//   //           <div id="uploadContainer">
//   //             <Popover>
//   //               <PopoverTrigger asChild>
//   //                 <Button
//   //                   variant="secondary"
//   //                   className="h-[8vh] bg-sky-950/75 hover:bg-blue-700/75 text-slate-200 rounded"
//   //                 >
//   //                   <PlusCircle />
//   //                 </Button>
//   //               </PopoverTrigger>

//   //               <PopoverContent className="w-80 bg-[#0D2257]/90">
//   //                 <div className="grid gap-4">
//   //                   <div className="space-y-2 text-slate-200">
//   //                     <h4 className="font-medium leading-none">
//   //                       Upload a File
//   //                     </h4>
//   //                     <p className="text-sm text-muted-foreground">Upload ⬆️</p>
//   //                   </div>

//   //                   <div className="grid gap-2">
//   //                     <div className="grid grid-cols-3 items-center gap-4">
//   //                       <Dialog>
//   //                         <DialogTrigger asChild>
//   //                           <Button
//   //                             variant="outline"
//   //                             className="bg-sky-200/10 hover:bg-slate-100/[.85] text-slate-200"
//   //                           >
//   //                             Upload
//   //                           </Button>
//   //                         </DialogTrigger>
//   //                         <DialogContent className="sm:max-w-[425px] bg-[#0D2257]/90 text-slate-200">
//   //                           {/* DialogContent text color for close button color */}
//   //                           <DialogHeader className="text-slate-200">
//   //                             <DialogTitle>Upload a File</DialogTitle>
//   //                             <DialogDescription>
//   //                               Upload an image, file, or video.
//   //                             </DialogDescription>
//   //                           </DialogHeader>

//   //                           <div className="grid gap-4 py-4">
//   //                             <div className="grid grid-cols-4 items-center gap-4">
//   //                               {/* Redo upload feature. Get Uploaded files to screen. */}
//   //                               <Label
//   //                                 htmlFor="picture"
//   //                                 className="w-full bg-red-400 text-black"
//   //                               >
//   //                                 Picture
//   //                               </Label>
//   //                               <Input
//   //                                 id="picture"
//   //                                 type="file"
//   //                                 className="w-[25vw] bg-green-400 text-black"
//   //                               />
//   //                             </div>
//   //                           </div>
//   //                           <DialogFooter>
//   //                             <Button type="submit">Upload</Button>
//   //                           </DialogFooter>
//   //                         </DialogContent>
//   //                       </Dialog>
//   //                     </div>
//   //                   </div>
//   //                 </div>
//   //               </PopoverContent>
//   //             </Popover>
//   //           </div>

//   //           <div id="textContainer" className="w-screen">
//   //             <Form {...form}>
//   //               <form
//   //                 onSubmit={form.handleSubmit(onSubmit)}
//   //                 className="flex items-stretch w-full overflow-hidden"
//   //               >
//   //                 <FormField
//   //                   control={form.control}
//   //                   name="chatbox"
//   //                   render={({ field }) => (
//   //                     /* FormItem determines the dimensions of the textarea */
//   //                     <FormItem className="w-full">
//   //                       <FormControl>
//   //                         {/* When Textarea is focused && ...field https://scrimba.com/articles/react-spread-operator/*/}
//   //                         <Textarea
//   //                           required
//   //                           placeholder="Type..."
//   //                           className="
//   //                                       min-h-fit
//   //                                       resize-none rounded-lg
//   //                                       border border-slate-500
//   //                                       bg-blue-950/75 text-slate-200
//   //                                       focus-visible:ring-slate-400 focus-visible:ring-offset-blue-500
//   //                                       focus-visible:shadow-gray-600
//   //                                       "
//   //                           {...field}
//   //                         />
//   //                       </FormControl>

//   //                       <FormMessage />
//   //                     </FormItem>
//   //                   )}
//   //                 />

//   //                 {/*
//   //                                           `min-h-fit
//   //                                           resize-none rounded-lg
//   //                                           border border-slate-500
//   //                                           bg-blue-950/75 text-slate-200
//   //                                           focus-visible:ring-slate-400 focus-visible:ring-offset-blue-500
//   //                                           focus-visible:shadow-gray-600
//   //                                           ${styles.join(' ')}`
//   //                                       */}

//   //                 <Button
//   //                   type="submit"
//   //                   className="h-auto bg-teal-500/80 hover:bg-blue-700/75 text-slate-200 rounded"
//   //                 >
//   //                   Submit
//   //                 </Button>
//   //               </form>
//   //             </Form>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>

//   //     <div
//   //       id="memberContainer"
//   //       className="hidden static w-[25vw] h-screen bg-blue-900/75 overflow-x-auto overflow-y-hidden"
//   //     >
//   //       {" "}
//   //       {/*bg-blue-950*/}
//   //       <Button className="w-full" onClick={collapseMemberContainer}>
//   //         <ArrowLeft />
//   //       </Button>
//   //       <Accordion type="single" collapsible className="w-auto bg-[#06227D]">
//   //         <AccordianItems accordTriggerName="Members">
//   //           <p>
//   //             Show members including user from Profile Container. May use
//   //             profiles from DMs.
//   //           </p>
//   //         </AccordianItems>
//   //       </Accordion>
//   //     </div>
//   //   </div>
//   // );
// }
