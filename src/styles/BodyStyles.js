import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const Wraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #282828;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const TextHeader = styled.div`
  padding-left: 2rem;
  width: 50%;
  text-align: right;
  color: #282828;
  h1 {
    font-size: 4rem;
  }
  @media (max-width: 1000px) {
    padding-left: 0rem;
    text-align: center;
  }
  button {
    background-color: #113733;
    border: 0px;
    padding: 1rem;
    color: white;
    cursor: pointer;
    transition: 0.5s all;
  }
  button:hover {
    transition: 0.5s all;
    transform: scale(110%);
  }
`;
