"use client"
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { Bell, BellDot, Trash2, Search } from 'lucide-react';
import ProfileMenu from "../ProfileMenu";
import AuthProviders from "../AuthProviders";
import Pusher from "pusher-js";
import Echo from "laravel-echo"
import axios from "axios";
import SearchBar from "./SearchBar";


export default function TopNavbar({ session }: any) {
  const [clickedOnBell, setClickedOnBell] = useState<boolean>(true);
  const [message, setMessage] = useState({});
  const [notifications, setNotifications] = useState({})
  const dropDownMessage = message?.message ? message.message : {};


  useEffect(() => {
    const apiCall = async () => {
      await NotficationApi()
    }
    apiCall()

  }, [setNotifications])

  const NotficationApi = async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_FRONTEND_API_URL + `/api/notifications`,
    );
    setNotifications(response);
  }

  const deleteNotifications = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault()
    await axios.delete(
      process.env.NEXT_PUBLIC_FRONTEND_API_URL + `/api/notifications`,
    );
    setMessage({})
    setNotifications({})
    setClickedOnBell(true)
    document.title = 'ATMATT'
  }

  let backendNotifications = [];
  if (notifications?.data) {
    backendNotifications = notifications?.data.data;
  }

  if (session) {
    useEffect(() => {
      const echo = new Echo({
        broadcaster: 'pusher',
        client: new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_APP_KEY}`, {
          cluster: process.env.MIX_PUSHER_APP_CLUSTER || 'eu',
          //   wsPath: process.env.NEXT_PUBLIC_PUSHER_APP_PATH,
          wsHost: '127.0.0.1',
          //  wssPort:  443,
          wsPort: 6001,
          forceTLS: false,
          //   (process.env.NEXT_PUBLIC_PUSHER_SCHEME ?? "https") === "https",
          // enableStats: false,
          disableStats: true,
        }),
      });
      const channel = echo.channel('atmatt-notification');
      let count = 0;
      channel.listen('.notifications', function (data: any) {
        count++;
        console.log(data)
        if (data) {

          document.title = `(${count}) ` + `ATMATT`

          setMessage(data)
          setClickedOnBell(false)
        } else {
          setClickedOnBell(true)
        }
      });
    }, []);
  }

  const GoogleLogin = () => {
    return (
      session
        ? (
          <>
            <ProfileMenu session={session} />
          </>
        ) :
        (
          <AuthProviders />
        )
    )
  }



  return (
    <>
      <Navbar className=" bg-navbar h-[60px]"
        isBordered
      >
        <NavbarContent className="hidden xl:flex xl:ml-[280px] w-96 z-50" >
          <NavbarItem>
            <form className="flex items-center">
              <div className="relative w-full">
                {/* <input onChange={(e)=>elasticSearch(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zoek naar..." required /> */}
                <SearchBar />
              </div>
              {/* <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white  bg-slate-500 rounded-lg border border-slate-500 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-500 dark:hover:bg-slate-500 ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button> */}
            </form>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarItem className="mr-6 ml-2" >
            <Image
              src="https://www.matt.nl/wp-content/uploads/matt-logo1.png"
              alt="ATMATT"
              width={180}
              height={50}
            />
          </NavbarItem>
          <NavbarBrand>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="mr-4" >
            {GoogleLogin()}
          </NavbarItem>
          <NavbarBrand>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:hidden">
          <NavbarItem >
            <Popover placement="bottom" showArrow className="p-4 sm:hidden">
              <PopoverTrigger>
                <Search />
              </PopoverTrigger>
              <PopoverContent className="bg-[#f8f9fa] text-slate-800  xs:w-full  lg:w-96 p-2 rounded-md" >
                <SearchBar />
              </PopoverContent>
            </Popover>
          </NavbarItem>
          <NavbarBrand>
          </NavbarBrand>
        </NavbarContent>


        <NavbarContent>
          <NavbarItem className="mr-3">
            <Popover placement="bottom" showArrow offset={10} className="right-3">
              <PopoverTrigger>
                {!clickedOnBell ? (<BellDot color="#fa2525" onClick={() => setClickedOnBell(true)} />) : (<Bell />)}
              </PopoverTrigger>
              <PopoverContent className="bg-[#f8f9fa] text-slate-800  xs:w-screen  lg:w-96 p-4 rounded-md" >
                <div className="px-1 py-2 w-full">
                  <div className="flex justify-between pb-1">
                    <p className=" text-base font-bold text-foreground">
                      Notificaties
                    </p>
                    <p>
                      {backendNotifications && backendNotifications.length > 0 || dropDownMessage?.title ? (<Trash2 onClick={(e) => deleteNotifications(e)} size={20} />) : 'Geen notificaties'}
                    </p>
                  </div>
                  {dropDownMessage?.title ? (<div key={dropDownMessage.id} className="border-solid border-2 border-zinc-200 p-1 rounded-md mb-2">
                    <div>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-bold text-foreground">{dropDownMessage.title}</p>
                          <p className="text-xs text-foreground" >
                            {dropDownMessage.message}
                          </p>
                        </div>
                        <div>
                          <p className="flex justify-end text-red-700 text-xs font-semibold">Nieuw</p>
                          <p className="flex justify-end text-xs">{new Date(dropDownMessage.created_at).toLocaleDateString()}</p>
                          <p className="flex justify-end text-xs">{new Date(dropDownMessage.created_at).toLocaleTimeString()} </p>
                        </div>
                      </div>

                    </div>
                  </div>) : ''}
                  {backendNotifications && backendNotifications.length > 0 ? backendNotifications.map((notification) => (
                    <div key={notification.id} className="border-solid border-2 border-zinc-200 p-1 rounded-md mb-2">
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-bold text-foreground">{notification.title}</p>
                            <p className="text-xs text-foreground" >
                              {notification.message}
                            </p>
                          </div>
                          <div>
                            <p className="flex justify-end text-xs">{new Date(notification.created_at).toLocaleDateString()}</p>
                            <p className="flex justify-end text-xs">{new Date(notification.created_at).toLocaleTimeString()} </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  )) : ''}
                </div>

              </PopoverContent>
            </Popover>
          </NavbarItem>
          <NavbarBrand>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    </>

  );
}
