import { useState } from "react";
import copy from "../assets/images/icon-copy.svg";
import arrow from "../assets/images/icon-arrow-right.svg";
import CheckboxItem from "./CheckboxItem/CheckboxItem";
import Icon from "./Icon/Icon";
import GenerateButton from "./GenerateButton/GenerateButton";

function PasswordGenerator() {
  const [useUppercase, setUseUppercase] = useState(false);
  const [useLowercase, setUseLowercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  return (
    <main
      style={{
        maxWidth: "600px",
        border: "1px solid black",
        backgroundColor: "#24232c",
      }}
    >
      <h1>Password Generator</h1>

      <div style={{ display: "flex", gap: "50px" }}>
        <p>generated password</p>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => navigator.clipboard.writeText("This text was copied")}
        >
          <Icon src={copy} alt="Copy" type={"copy"} />
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Character Length</p>
          <p>10</p>
        </div>
        <input type="range" />
      </div>

      <div>
        <CheckboxItem
          checked={useUppercase}
          toggleChecked={() => setUseUppercase((prev) => !prev)}
          text={"Include Uppercase Letters"}
        />
        <CheckboxItem
          checked={useLowercase}
          toggleChecked={() => setUseLowercase((prev) => !prev)}
          text={"Include Lowercase Letters"}
        />
        <CheckboxItem
          checked={useNumbers}
          toggleChecked={() => setUseNumbers((prev) => !prev)}
          text={"Include Numbers"}
        />
        <CheckboxItem
          checked={useSymbols}
          toggleChecked={() => setUseSymbols((prev) => !prev)}
          text={"Include Symbols"}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>STRENGTH</p>
        <p>MEDIUM</p>
      </div>
      <GenerateButton src={arrow} alt="arrow" type="arrow" />
    </main>
  );
}

export default PasswordGenerator;
