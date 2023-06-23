import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 35rem) {
    width: 100vw;
    grid-template-columns: 0.7fr 2fr;
    grid-template-rows: 5rem 0.1fr auto 0.15fr;
  }
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    @media (max-width: 35rem) {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  padding-top: 64px;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  @media (max-width: 35rem) {
    padding-top: 0.5rem;
  }

  > li {
    margin-bottom: 24px;

    @media (max-width: 35rem) {
      margin-bottom: 0.2rem;
    }
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;

  @media (max-width: 35rem) {
    padding: 1rem 1rem 0;
  }
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 64px;
  overflow-y: auto;

  @media (max-width: 35rem) {
    padding: 0 1rem;
  }
`;

export const NewNote = styled(Link)`
  grid-area: newnote;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  @media (max-width: 35rem) {
    padding: 1rem 0.7rem 0 0;
    align-items: start;
    font-size: 1rem;
  }

  > svg {
    margin-right: 8px;

    @media (max-width: 35rem) {
      margin-right: 0.5rem;
      padding-top: 0.2rem;
    }
  }
`;
