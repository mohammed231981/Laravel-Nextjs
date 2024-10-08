import React from 'react';

import AccountMenuItems from '@/components/mobile/account/AccountMenuItems';
import MenuIndex from '@/components/mobile';

const Account: React.FC = () => {
  return (
    <div className='p-2 xl:hidden'>
        <div className='pb-10'>
        <h1 className='font-extrabold'>Account</h1>
        <p> Verlof, declaratie en weekinvoer</p>
        </div>
       
      <MenuIndex  items={AccountMenuItems} />
    </div>
  );
};

export default Account;
