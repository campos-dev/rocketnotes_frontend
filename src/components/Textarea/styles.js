import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;

  padding: 16px;

  @media (max-width: 35rem) {
    font-size: 1.2rem;
    height: 10rem;
    margin-bottom: 0.5rem;
    border-radius: 0.3rem;

    padding: 0.8rem;
  }

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
