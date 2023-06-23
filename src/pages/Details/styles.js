import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
  @media (max-width: 35rem) {
    grid-template-rows: 0.3fr auto;
  }

  > main {
    grid-area: "content";
    overflow-y: scroll;
    padding: 64px 0;

    @media (max-width: 35rem) {
      padding: 0;
    }
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    @media (max-width: 35rem) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 35rem) {
    max-width: 25rem;
  }

  > button:first-child {
    align-self: end;
  }

  > h2 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;

    @media (max-width: 35rem) {
      font-size: 2rem;
      padding-top: 1.5rem;
    }
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;

    @media (max-width: 35rem) {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
`;
