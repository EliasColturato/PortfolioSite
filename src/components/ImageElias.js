import React from 'react';
import {
  SessionImage,
  ImageControll,
  BoxImage,
  ServicesElias,
  Marketing,
  Developer,
  Edicao,
} from '../styles/ImgEliasStyles.js';

export default function ImageElias() {
  return (
    <>
      <SessionImage>
        <ImageControll>
          <BoxImage>
            <h1>Elias Colturato</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <img src="./img/image-elias.png" alt="" style={{ max-width: '50%', min-widht: '30%' }} />
          </BoxImage>
          <ServicesElias>
            <Marketing>
              <p>Marketing</p>
              <img src="./img/flag-outline.svg" alt="" />
            </Marketing>
            <Developer>
              <p>Desenvolvimento Web</p>
              <img src="./img/code-working-outline.svg" alt="" />
            </Developer>
            <Edicao>
              <p>Edição de Vídeos</p>
              <img src="./img/videocam-outline.svg" alt="" />
            </Edicao>
          </ServicesElias>
        </ImageControll>
      </SessionImage>
    </>
  );
}
