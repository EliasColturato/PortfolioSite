import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxSumary = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  align-items: center;
  width: 80%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Sumary = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  transition: 0.5s all;
  padding: 1rem;
  background-color: #afffa6;
  img:hover {
    transition: 0.5s all;
    transform: translateX(3rem);
  }
`;

export const SumaryText = styled.div`
  text-align: left;
  padding-right: 3rem;
  h1 {
    font-size: 3.5rem;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
