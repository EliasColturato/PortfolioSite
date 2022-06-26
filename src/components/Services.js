import React from 'react';
import {
  ServicesControll,
  ServicesBox,
  Design,
  Marketing,
  Dev,
} from '../styles/ServicesStyles';

export default function Services() {
  return (
    <ServicesControll>
      {' '}
      <ServicesBox>
        <Design>
          <img src="./img/create-outline.svg" alt="" />
          <h1>Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </Design>
        <Marketing>
          <img src="./img/flag-outline.svg" alt="" />
          <h1>Marketing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </Marketing>
        <Dev>
          <img src="./img/code-working-outline.svg" alt="" />
          <h1>Dev</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </Dev>
      </ServicesBox>
    </ServicesControll>
  );
}
