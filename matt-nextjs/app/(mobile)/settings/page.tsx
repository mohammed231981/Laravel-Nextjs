"use client"
import React, {  useState } from 'react';

import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import SettingsMenuItems from '@/components/mobile/settings/SettingsMenuItems';
import MenuIndex from '@/components/mobile';


const Settings: React.FC = () => {

  const [notification, setNotification] = useState(false);
  const [deviceActive, setDeviceActive] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const notificationHandler = (e: InputSwitchChangeEvent)=>{
    setNotification(e.value || false)
  }

  const deviceActiveHandler = (e: InputSwitchChangeEvent)=>{
    setDeviceActive(e.value || false)
  }

  const darkmodeHandler = (e: InputSwitchChangeEvent)=>{
    setDarkmode(e.value || false)
  }


  return (
    <div className='p-2 xl:hidden'>
        <div className='pb-10'>
        <h1 className='font-extrabold'>Instelingen</h1>
        <p></p>
        </div>
        <div>
        <div className='flex justify-between p-2 panelmenu-switch'>
            <p>Notificaties</p>
          <InputSwitch
             id="notification"
             name="notification"
            checked={notification}  onChange={(e) => notificationHandler(e)}  />
          </div>
          <div className='flex justify-between p-2 panelmenu-switch'>
            <p>Apparaat (de)activeren</p>
          <InputSwitch 
          id="device"
          name="device"
          checked={deviceActive}  onChange={(e) => deviceActiveHandler(e)}  />
          </div>
         
          <div className='flex justify-between p-2 panelmenu-switch'>
            <p>Donkere modus</p>
          <InputSwitch 
          id="darkmode"
          name="darkmode"
          checked={darkmode}  onChange={(e) => darkmodeHandler(e)}  />
          </div>
        </div>
       
      <MenuIndex items={SettingsMenuItems} />
    </div>
  );
};


export default Settings