import styled from "styled-components";

export const StyledIcon = styled.img`
  width: ${(props) => props.theme.icons[props.iconType].width.regular};
  height: ${(props) => props.theme.icons[props.iconType].height.regular};
  &:hover {
    ${(props) => console.log(props)}
    filter: ${(props) => props.theme.icons[props.iconType].filters.hover};
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: ${(props) => props.theme.icons[props.iconType].width.mobile};
    height: ${(props) => props.theme.icons[props.iconType].height.mobile};
  }
`;
