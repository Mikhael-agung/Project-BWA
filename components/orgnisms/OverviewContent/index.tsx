import React from 'react';
import Categori from './Categori';
import TableRow from './TableRow';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <Categori nominal={18000500} icon={'IconDekstop'}>
                Game
                <br />
                Dekstop
              </Categori>
              <Categori nominal={8455000} icon={'IconMobile'}>
                Game
                <br />
                Mobile
              </Categori>
              <Categori nominal={5000000} icon={'IconDekstop'}>
                Other
                <br />
                Categories
              </Categori>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow title={'Mobile Legend'} category={'Mobile'} item={200} price={290000} status={'Pending'} image={'Overview-1'} />
                <TableRow title={'Call of Duty:Modern'} category={'Desktop'} item={550} price={740000} status={'Success'} image={'Overview-2'} />
                <TableRow title={'Clash of Clans'} category={'Mobile'} item={100} price={120000} status={'Failed'} image={'Overview-3'} />
                <TableRow title={'Valorant'} category={'Dekstop'} item={225} price={200000} status={'Pending'} image={'Overview-4'} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
