/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import OverviewContent from "../../components/orgnisms/OverviewContent";
import SidebarItem from "../../components/orgnisms/Sidebar";


export default function member() {
  return (
    <section className="overview overflow-auto">
    <SidebarItem activeMenu="overview"/>
    <OverviewContent/>
</section>
  )
}
