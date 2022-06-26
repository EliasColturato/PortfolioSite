import React from 'react';
import { Link } from 'react-router-dom';
import { BackContainer, BackControll } from '../styles/BackHomeStyles';

export default function BackHome() {
  return (
    <BackContainer>
      <Link to="/" style={{ textDecoration: 'none', color: '#113733' }}>
        <BackControll>
          <img src="./img/caret-back-outline.svg" alt="" />
          <h2>Voltar</h2>
        </BackControll>
      </Link>
    </BackContainer>
  );
}
