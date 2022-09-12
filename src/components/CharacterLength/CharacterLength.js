import { StyledCharacterLength } from "./CharacterLength.styled";

function CharacterLength({ length, setLength }) {
  function handleChange(e) {
    setLength(e.target.value);
  }

  return (
    <StyledCharacterLength>
      <div>
        <p>Character Length</p>
        <p className="green">{length}</p>
      </div>
      <input
        type="range"
        default="0"
        value={length}
        min="0"
        max="20"
        onChange={handleChange}
      />
    </StyledCharacterLength>
  );
}

export default CharacterLength;
