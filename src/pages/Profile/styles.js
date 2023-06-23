import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    padding: 0 124px;

    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    @media (max-width: 35rem) {
      height: 8rem;
      padding: 0 2rem;
    }

    > button {
      background: none;
      border: none;
    }
  }

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    @media (max-width: 35rem) {
      font-size: 2.5rem;
    }
  }
`;

export const Form = styled.form`
  width: 340px;
  margin: 30px auto 0;

  @media (max-width: 35rem) {
    width: 25rem;
    margin: 2rem auto 0;
  }

  > div:nth-child(4) {
    margin-top: 24px;

    @media (max-width: 35rem) {
      margin-top: 2rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -125px auto 32px;

  width: 186px;
  height: 186px;

  @media (max-width: 35rem) {
    margin: -8rem auto 3rem;

    width: 12rem;
    height: 12rem;
  }

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;

    @media (max-width: 35rem) {
      width: 12rem;
      height: 12rem;
    }
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    @media (max-width: 35rem) {
      width: 4rem;
      height: 4rem;

      bottom: 0.2rem;
      right: 0.2rem;
    }

    input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
