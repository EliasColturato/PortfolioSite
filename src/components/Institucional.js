import React from 'react';

import { LinkH } from '../styles/InstitucionalStyle';

export default function Institucional() {
  return (
    <LinkH>
      <p>Conheça um pouco mais do meu trabalho,</p>
      <a
        href="https://www.google.com.br"
        alt="#"
        target={'_blank'}
        style={{ color: 'white' }}
        rel="noreferrer"
      >
        <b>clique aqui.</b>
      </a>
    </LinkH>
  );
}
