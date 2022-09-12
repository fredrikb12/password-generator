import { StyledIcon } from "./Icon.styled";

function Icon({ src, alt, type, isHovered }) {
  const style = {
    filter:
      "brightness(0) saturate(100%) invert(84%) sepia(42%) saturate(354%) hue-rotate(67deg) brightness(101%) contrast(104%)",
  };
  return (
    <StyledIcon
      style={isHovered !== undefined && isHovered === true ? style : null}
      src={src}
      alt={alt}
      iconType={type}
    />
  );
}

export default Icon;
