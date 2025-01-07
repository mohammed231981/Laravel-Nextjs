"use client"

import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your desired PrimeReact theme
import 'primereact/resources/primereact.min.css';


interface MenuItem {
  label: string;
  icon?: string;
  items?: MenuItem[];
  url?: string;
  checked?: boolean;
  onToggle?: () => void;
}

const MenuIndex: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <div className="scrollableMenu">
      <PanelMenu  model={items} style={{ width: '100%', height: '300px' }} />
    </div>
  );
};

export default MenuIndex;

