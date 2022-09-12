import styled from "styled-components";

export const StyledPasswordDisplay = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.fonts.large.fontSize};
    pointer-events: none;
    line-height: ${({ theme }) => theme.fonts.large.lineHeight};
  }
`;
