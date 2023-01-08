import React from 'react';
import StoryItem from '../../molcecules/StoryItem';
 
export default function StoryLine(){
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
       <StoryItem title={'Win the battle'} desc={'Be the Champion.'}
        Paraf1={'Kami menyediakan jutaan cara untuk '} 
        paraf2={'membantu players menjadi'} 
        paraf3={'pemenang sejati'} />
      </div>
    </section>
  );
}
