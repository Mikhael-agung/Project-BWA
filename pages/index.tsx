/* eslint-disable @next/next/no-img-element */
import {useEffect} from 'react';
import AOS from 'aos';
import Navbar from '../components/orgnisms/navbar';
import MainBanner from '../components/orgnisms/MainBanner';
import Transaction from '../components/orgnisms/Transaction';
import TransactionStep from '../components/orgnisms/Transaction';
import FeaturedGame from '../components/orgnisms/FeatureGames';
import Reached from '../components/orgnisms/Reached';
import StoryLine from '../components/orgnisms/PartStory';
import FooterArea from '../components/orgnisms/Footer';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <>
                <Navbar />
                <MainBanner />
                <TransactionStep />
                <FeaturedGame />                                                                                                                                      
                <Reached />
                <StoryLine /> 
                <FooterArea />                                                          
    </>
  )
}
