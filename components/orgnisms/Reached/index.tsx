import React from 'react';
import ReachedItem from '../../molcecules/ReachedItem';
import VerticalLine from '../../molcecules/ReachedItem/Line';

export default function Reached() {
  return (
    <section
      className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div
          className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4" >
          <ReachedItem title={'290M+'} desc={'Players Top Up'} />
          <VerticalLine />
          <ReachedItem title={'12.500'} desc={'Games Available'} />
          <VerticalLine />
          <ReachedItem title={'99,9%'} desc={'Happy Players'} />
          <VerticalLine />
          <ReachedItem title={'4.7'} desc={'Rating Worldwide'} />
        </div>
      </div>
    </section>
  );
}
