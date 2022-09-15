import styled from "styled-components";

export const StyledStrengthMeter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  padding: 22px;
  margin-bottom: 32px;
  p {
    color: ${({ theme }) => theme.colors.grey};
  }

  & > div > p {
    color: ${({ theme }) => theme.colors.dimWhite};
  }

  @media (max-width: 767px) {
    p {
      font-size: 16px;
      line-height: 21px;
    }

    & > div > p {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .container {
    display: flex;
    gap: 8px;
  }

  .strength-item {
    width: 10px;
    height: 28px;
  }

  .empty {
    border: 2px solid ${({ theme }) => theme.colors.dimWhite};
  }

  .red {
    background-color: ${({ theme }) => theme.colors.red};
  }

  .orange {
    background-color: ${({ theme }) => theme.colors.orange};
  }

  .yellow {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  .neonGreen {
    background-color: ${({ theme }) => theme.colors.neonGreen};
  }
`;
