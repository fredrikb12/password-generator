import checkmark from "../../assets/images/icon-check.svg";
import { StyledCheckbox } from "./Checkbox.styled";

function CheckboxItem({ text, checked, toggleChecked }) {
  return (
    <StyledCheckbox checked={checked}>
      <button onClick={toggleChecked}>
        {checked ? <img src={checkmark} alt="Checkmark" /> : null}
      </button>
      <label onClick={toggleChecked}>{text}</label>
    </StyledCheckbox>
  );
}

export default CheckboxItem;
