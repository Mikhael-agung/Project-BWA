import Image from "next/image";

interface StoryItemProps {
title : string
desc : string
Paraf1 : string  
paraf2 : string
paraf3 : string
} 
export default function StoryItem(props: StoryItemProps) {
  const {title, desc, Paraf1, paraf2, paraf3  } = props
  return (
    <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
      <div className="col-lg-7 ol-12 d-lg-flex d-none justify-content-lg-end pe-lg-60   " data-aos="zoom-in">
        <Image src="/img/Header-9.png" width={612} height={452} className="img-fluid" alt="Story Item" />
      </div>
      <div className="col-lg-5 col-12 ps-lg-60">
        <div className="">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            {title} 
            <br />
            {desc} 
          </h2>
          
          <p className="text-lg color-palette-1 mb-30">
            {Paraf1} 
            <br className="d-sm-block d-none" />
            {paraf2}
            <br className="d-sm-block d-none" />
            {paraf3}
          </p>
          <div className="d-md-block d-flex lex-column w-100">
            <a className="btn btn-read text-lg rounded-pill" href="#" role="button">
              Read Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
