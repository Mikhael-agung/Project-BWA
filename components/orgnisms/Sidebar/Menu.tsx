import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon: 'IconMenuCard' | 'IconMenuOverview' | 'IconMenuTransaction' | 'IconMenuRewards' | 'IconMenuLog-out' | 'IconMenuMessages' | 'IconMenuSettings';
  active?: boolean;
  href: string
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = '/'} = props;
  const classItem = cx({
    item: true,
    active: active,
    'mb-30': true,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/IconSidebar/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
