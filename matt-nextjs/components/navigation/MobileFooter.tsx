"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import OverviewIcon from '@mui/icons-material/Summarize';

export default function MobileFooter() {

 
  const styles = {
    root: {
      width: '100%',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#fd5c63',
      color: '#f9f9f9'
    },
    button: {
      color: '#fff',
    },
  };

  return (
    <Box sx={ styles.root }>
      <BottomNavigation
        showLabels className=" bg-[#f9f9f9]"
      >
        <BottomNavigationAction href="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction href="/overview" label="Overzicht" icon={<OverviewIcon />} />
        <BottomNavigationAction  href="/account" label="Account" icon={<ProfileIcon />} />
        <BottomNavigationAction href='/settings' label="Instellingen" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}