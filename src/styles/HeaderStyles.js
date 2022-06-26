import styled from 'styled-components';

export const MenuBar = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const Envelope = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  } ;
`;

export const FirstSession = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  button {
    color: gray;
    cursor: pointer;
    border: 0px;
    background-color: white;
    font-size: 1rem;
    transition: 0.5s all;
  }
  button:hover {
    color: #113733;
    transition: 0.5s all;
    transform: translateY(0.5rem);
  }
  @media (max-width: 1000px) {
    display: none;
  } ;
`;

export const Orcamento = styled.div`
  a {
    border: 1px solid rgba(17, 55, 51, 0.5);
    padding: 0.7rem;
    text-decoration: none;
    color: #282828;
    text-decoration: none;
    transition: 0.3s all;
  }
  a:hover {
    transition: 0.3s all;
    border: 2px solid rgba(17, 55, 51, 1);
    font-weight: 600;
  }
`;
