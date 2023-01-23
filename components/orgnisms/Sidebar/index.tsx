import React from 'react';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './Menu';


interface activeMenuProps {
  activeMenu : 'Overview' | 'Transaction' | 'Messages'
}
export default function SidebarItem(props: activeMenuProps) {
  const {activeMenu} = props

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title={'Overview'} icon={'IconMenuOverview'} href='/member' active/>
          <MenuItem title={'Transaction'} icon={'IconMenuTransaction'} href='/member/transactions'/>
          <MenuItem title={'Messages'} icon={'IconMenuMessages'} href='/messages'/>
          <MenuItem title={'Card'} icon={'IconMenuCard'} href='/card'/>
          <MenuItem title={'Rewards'} icon={'IconMenuRewards'} href='/rewards'/>
          <MenuItem title={'Settings'} icon={'IconMenuSettings'} href='/member/edit-profile'/>
          <MenuItem title={'Log Out'} icon={'IconMenuLog-out'} href='/sign-in'/>
        </div>
        <Footer />
      </div>
    </section>
  );
}
