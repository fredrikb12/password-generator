import { StyledIcon } from "./Icon.styled";

function Icon({ src, alt, type }) {
  return <StyledIcon src={src} alt={alt} iconType={type} />;
}

export default Icon;
