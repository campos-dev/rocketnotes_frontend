import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  @media (max-width: 35rem) {
    font-size: 1.2rem;
    height: 2.5rem;
    border: 0;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.4rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
