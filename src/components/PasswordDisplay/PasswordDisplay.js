import Icon from "../Icon/Icon";
import copy from "../../assets/images/icon-copy.svg";
import { StyledPasswordDisplay } from "./PasswordDisplay.styled";

function PasswordDisplay({ password, isCopied }) {
  return (
    <StyledPasswordDisplay>
      <input
        type="text"
        value={password}
        readOnly={true}
        placeholder={"P4$5WOrD!"}
      />
      <div>
        {isCopied ? <p>COPIED</p> : null}
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => navigator.clipboard.writeText(password)}
        >
          <Icon src={copy} alt="Copy" type={"copy"} />
        </button>
      </div>
    </StyledPasswordDisplay>
  );
}

export default PasswordDisplay;
