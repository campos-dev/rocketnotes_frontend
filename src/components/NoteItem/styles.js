import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : `${theme.COLORS.BACKGROUND_900} `};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;

  padding-right: 16px;

  @media (max-width: 35rem) {
    margin-bottom: 1rem;
    border-radius: 0.2rem;

    padding-right: 1rem;
  }

  > button {
    border: none;
    background: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > input {
    width: 100%;
    height: 56px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;

    border: none;

    @media (max-width: 35rem) {
      height: 3rem;
      padding: 1rem 2rem;
      font-size: 1.5rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
