import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  @media (max-width: 35rem) {
    grid-template-rows: 0.3fr auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  main {
    grid-area: "content";
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  @media (max-width: 35rem) {
    max-width: 25rem;
    margin: 1rem auto;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    @media (max-width: 35rem) {
      margin-bottom: 1.7rem;
    }

    > h1 {
      @media (max-width: 35rem) {
        font-size: 2rem;
      }
    }

    > button {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      @media (max-width: 35rem) {
        font-size: 1.2rem;
      }
    }
  }
`;
