import React from 'react';
import { Container, Wraper, TextHeader } from '../styles/BodyStyles';

export default function Body() {
  return (
    <>
      <Container>
        <Wraper>
          <img src="./img/logo_site.png" alt="#" style={{ width: '20rem' }} />
          <TextHeader>
            <p>Bem vindo!</p>
            <h1>A solução para o seu negócio</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button className="contato">
              <a
                href="https://api.whatsapp.com/send?phone=5516991334228&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                style={{ textDecoration: 'none', color: 'white' }}
                alt=""
              >
                Entre em Contato
              </a>
            </button>
          </TextHeader>
        </Wraper>
      </Container>
    </>
  );
}
