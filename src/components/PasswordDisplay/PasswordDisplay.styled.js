import styled from "styled-components";

export const StyledPasswordDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 32px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 24px;
  height: 80px;
  max-width: 100%;
  input {
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fonts.large.fontSize};
    pointer-events: none;
    line-height: ${({ theme }) => theme.fonts.large.lineHeight};
    color: ${({ theme }) => theme.colors.dimWhite};
  }

  @media (max-width: 767px) {
    input {
      line-height: ${({ theme }) => theme.fonts.medium.lineHeight};
      font-size: ${({ theme }) => theme.fonts.medium.fontSize};
    }
  }
`;
