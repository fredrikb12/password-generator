import styled from "styled-components";

export const StyledCharacterLength = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.dimWhite};

  .green {
    color: ${({ theme }) => theme.colors.neonGreen};
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  input[type="range"] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    height: 10px;
  }

  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    border: 2px solid transparent;
    background: ${({ theme }) => theme.colors.dimWhite};
    height: 28px;
    width: 28px;
    border-radius: 50%;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    border: 2px solid ${({ theme }) => theme.colors.neonGreen};
    background: ${({ theme }) => theme.colors.veryDarkGrey};
  }
`;
