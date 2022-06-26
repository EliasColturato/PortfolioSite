import styled from 'styled-components';

export const ServicesControll = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ServicesBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 80%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Design = styled.div`
  border: 1px solid rgba(28, 28, 28, 0.2);
  flex-direction: column;
  text-align: center;
  align-items: center;
  display: flex;
  padding: 1rem;
  img {
    width: 3rem;
  }
  p {
    padding-left: 1rem;
  }
`;

export const Marketing = styled.div`
  border: 1px solid rgba(28, 28, 28, 0.2);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 1rem;
  img {
    width: 3rem;
  }
  p {
    padding-left: 1rem;
  }
`;

export const Dev = styled.div`
  border: 1px solid rgba(28, 28, 28, 0.2);
  flex-direction: column;
  text-align: center;
  align-items: center;
  display: flex;
  padding: 1rem;
  img {
    width: 3rem;
  }
  p {
    padding-left: 1rem;
  }
`;
