import { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: ${({ theme }) => theme.fonts.body.fontSize};
  line-height: ${({ theme }) => theme.fonts.body.lineHeight};
  background-color: ${({ theme }) => theme.colors.neonGreen};
  color: ${({ theme }) => theme.colors.darkGrey};
  border: 2px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.neonGreen};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.neonGreen};
    cursor: pointer;
  }

  @media (max-width: 767px) {
    gap: 16px;
    font-size: 16px;
    line-height: 21px;
  }
`;

function GenerateButton({ handleClick, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledButton
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      GENERATE
      <Icon {...props} isHovered={isHovered} />
    </StyledButton>
  );
}

export default GenerateButton;
