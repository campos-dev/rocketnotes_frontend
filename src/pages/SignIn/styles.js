import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 35rem) {
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media (max-width: 35rem) {
    width: 100%;
    padding: 0 5rem;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    @media (max-width: 35rem) {
      font-size: 2.5rem;
    }
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;

    @media (max-width: 35rem) {
      font-size: 1.5rem;
      margin: 1.5rem 0;
    }
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    @media (max-width: 35rem) {
      font-size: 1rem;
    }
  }

  > a {
    margin-top: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    @media (max-width: 35rem) {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: contrast(0.5) brightness(0.5);

  @media (max-width: 35rem) {
    display: none;
  }
`;
