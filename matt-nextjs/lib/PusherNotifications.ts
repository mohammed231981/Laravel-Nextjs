"use client"
import Pusher from "pusher-js";
import Echo from "laravel-echo"
import { useEffect, useState } from "react";


 export const PusherNotifications = ()=> {
  const [messagesState, setMessagesState] = useState(false)
 
    useEffect(() => {

        const echo = new Echo({
           broadcaster: 'pusher',
           client: new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_APP_KEY}`, {
             cluster:  process.env.MIX_PUSHER_APP_CLUSTER ||'eu',
          //   wsPath: process.env.NEXT_PUBLIC_PUSHER_APP_PATH,
          //   wsHost: process.env.NEXT_PUBLIC_PUSHER_HOST,
          //   wssPort: process.env.NEXT_PUBLIC_PUSHER_PORT ?? 443,
         //    wsPort: process.env.NEXT_PUBLIC_PUSHER_PORT ?? 80,
             forceTLS: false,
            //   (process.env.NEXT_PUBLIC_PUSHER_SCHEME ?? "https") === "https",
             enableStats: false,
           }),
         
         });
         
         
           
           const channel = echo.channel('atmatt-notification');
           channel.listen('.notifications', function(data: any) {
            if(data){
           
              setMessagesState(true);
            }
           });
       
       }, []);
       return messagesState;
}

