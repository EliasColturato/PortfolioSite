import React from 'react';
import Body from '../components/Body';
import Institucional from '../components/Institucional';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import Services from '../components/Services.js';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Institucional />
      <Header />
      <Body />
      <ChatBox />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
