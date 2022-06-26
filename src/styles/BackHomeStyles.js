import styled from 'styled-components';

export const BackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: 0.5s all;
  div:hover {
    transition: 0.5s all;
    transform: scale(130%);
  }
`;

export const BackControll = styled.div`
  width: 80%;
  display: flex;
  img {
    width: 1.5rem;
  }
`;
