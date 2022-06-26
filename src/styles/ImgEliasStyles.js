import styled from 'styled-components';

export const SessionImage = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const ImageControll = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BoxImage = styled.div`
  width: 30%;
  background-color: #afffa6;
  padding: 3rem 3rem 0rem 3rem;
  img {
    margin-bottom: -7px;
  }
`;

export const ServicesElias = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Marketing = styled.div`
  display: flex;
  transition: 0.5 all;
  img {
    transition: 0.5 all;
    width: 2rem;
    margin-left: 1rem;
  }
`;

export const Developer = styled.div`
  display: flex;
  transition: 0.5 all;
  img {
    transition: 0.5 all;
    width: 2rem;
    margin-left: 1rem;
  }
`;

export const Edicao = styled.div`
  display: flex;
  transition: 0.5 all;
  img {
    transition: 0.5 all;
    width: 2rem;
    margin-left: 1rem;
  }
`;
