import React from 'react';

import OverviewMenuItems from '@/components/mobile/overview/OverviewMenuItems';
import MenuIndex from '@/components/mobile';



const OverviewIndex: React.FC = () => {
  return (
    <div className='p-2 xl:hidden'>
        <div className='pb-10'>
        <h1 className='font-extrabold'>Overzicht</h1>
        <p></p>
        </div>
        
      <MenuIndex items={OverviewMenuItems} />
    </div>
  );
};



export default OverviewIndex;