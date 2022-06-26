import React from 'react';
import {
  MenuBar,
  Envelope,
  FirstSession,
  Orcamento,
} from '../styles/HeaderStyles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <MenuBar>
      <Envelope>
        <FirstSession>
          <Link to="/cases" style={{ textDecoration: 'none', color: 'gray' }}>
            <button className="cases">
              <b>Cases</b>
            </button>
          </Link>
          <a
            href="https://www.behance.net/DesignerElias?tracking_source=search_users|Elias%20Colturato"
            alt=""
            target={'_blank'}
            rel="noreferrer"
          >
            <button className="portfolio" type="">
              <b>Portfolio</b>
            </button>
          </a>
          <Link to="/quem-sou">
            <button className="contato">
              <b>Quem Sou?</b>
            </button>
          </Link>
        </FirstSession>
        <Orcamento>
          <a
            href="https://api.whatsapp.com/send?phone=5516991334228&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
            alt=""
            target={'_blank'}
            rel="noreferrer"
          >
            <Link to="/orcamento" style={{ border: '0px' }}>
              Faça seu Orçamento.
            </Link>
          </a>
        </Orcamento>
      </Envelope>
    </MenuBar>
  );
}
