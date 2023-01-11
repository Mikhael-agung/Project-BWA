import React from 'react';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './Menu';

export default function SidebarItem() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title={'Overview'} icon={'IconMenuOverview'} href='/Overview' active/>
          <MenuItem title={'Transaction'} icon={'IconMenuTransaction'} href='/transaction'/>
          <MenuItem title={'Messages'} icon={'IconMenuMessages'} href='/messages'/>
          <MenuItem title={'Card'} icon={'IconMenuCard'} href='/card'/>
          <MenuItem title={'Rewards'} icon={'IconMenuRewards'} href='/rewards'/>
          <MenuItem title={'Settings'} icon={'IconMenuSettings'} href='/settings'/>
          <MenuItem title={'Log Out'} icon={'IconMenuLog-out'} href='/log-out'/>
        </div>
        <Footer />
      </div>
    </section>
  );
}
