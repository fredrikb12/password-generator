import styled from "styled-components";

const StyledHeading = styled.h1`
  margin-bottom: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;

function Heading() {
  return (
    <StyledHeading className="medium-font">Password Generator</StyledHeading>
  );
}

export default Heading;
