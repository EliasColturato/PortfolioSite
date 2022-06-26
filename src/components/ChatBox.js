import React from 'react';
import {
  BoxContainer,
  BoxSumary,
  Sumary,
  SumaryText,
} from '../styles/ChatStyles';

export default function ChatBox() {
  return (
    <BoxContainer>
      <BoxSumary>
        <SumaryText>
          <h1>Feedbacks</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </SumaryText>
        <Sumary>
          <img src="./img/conversa.png" alt="" />
          <img src="./img/conversa.png" alt="" />
          <img src="./img/conversa.png" alt="" />
        </Sumary>
      </BoxSumary>
    </BoxContainer>
  );
}
