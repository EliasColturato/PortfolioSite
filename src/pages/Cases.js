import React from 'react';
import Header from '../components/Header';
import Institucional from '../components/Institucional';
import BackHome from '../components/BackHome';
import { Link } from 'react-router-dom';

export default function Cases() {
  return (
    <>
      <Institucional />
      <Header />
      <BackHome />
    </>
  );
}
