import styled from "styled-components";

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.dimWhite};
  gap: 24px;

  font-size: ${({ theme }) => theme.fonts.body.fontSize};
  line-height: ${({ theme }) => theme.fonts.body.lineHeight};

  label:hover {
    cursor: pointer;
  }

  button {
    width: 20px;
    height: 20px;
    border: ${(props) =>
      props.checked ? "none" : "2px solid " + props.theme.colors.dimWhite};
    background-color: ${(props) =>
      props.checked ? props.theme.colors.neonGreen : "transparent"};
    img {
      margin-left: -3px;
      margin-bottom: -2px;
    }

    &:hover {
      cursor: pointer;
      border-color: ${({ theme }) => theme.colors.neonGreen};
    }
  }
`;
