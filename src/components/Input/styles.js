import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  @media (max-width: 35rem) {
    margin-bottom: 0.5rem;
    border-radius: 0.2rem;
  }

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    @media (max-width: 35rem) {
      font-size: 1.2rem;
      height: 3rem;
      padding: 0.7rem;
    }

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
