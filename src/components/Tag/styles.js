import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  @media (max-width: 35rem) {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
  }
`;
