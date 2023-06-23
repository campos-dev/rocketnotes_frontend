import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 105px;
  padding: 0 80px;

  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 35rem) {
    height: 5rem;
    padding: 0 1rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;

    @media (max-width: 35rem) {
      height: 3rem;
      width: 3rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    @media (max-width: 35rem) {
      margin-left: 1.5rem;
      line-height: 1.5rem;
    }

    > span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      @media (max-width: 35rem) {
        font-size: 1rem;
      }
    }

    > strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      @media (max-width: 35rem) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    @media (max-width: 35rem) {
      margin-right: 2rem;
      font-size: 1.5rem;
    }
  }
`;
