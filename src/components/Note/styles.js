import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  @media (max-width: 35rem) {
    padding: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 35rem) {
      font-size: 1rem;
    }
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;

    @media (max-width: 35rem) {
      margin-top: 1rem;
    }
  }
`;
