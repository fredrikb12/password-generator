import styled from "styled-components";

export const StyledStrengthMeter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};

  p:nth-child(odd) {
    color: ${({ theme }) => theme.colors.grey};
  }

  p:nth-child(even) {
    color: ${({ theme }) => theme.colors.dimWhite};
  }
`;
