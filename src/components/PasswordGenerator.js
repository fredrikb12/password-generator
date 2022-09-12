import { useState } from "react";
import copy from "../assets/images/icon-copy.svg";
import arrow from "../assets/images/icon-arrow-right.svg";
import CheckboxItem from "./CheckboxItem/CheckboxItem";
import Icon from "./Icon/Icon";
import GenerateButton from "./GenerateButton/GenerateButton";
import StrengthMeter from "./StrengthMeter/StrengthMeter";
import CharacterLength from "./CharacterLength/CharacterLength";

function PasswordGenerator() {
  const [useUppercase, setUseUppercase] = useState(false);
  const [useLowercase, setUseLowercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);

  return (
    <main
      style={{
        maxWidth: "600px",
        border: "1px solid black",
        padding: "25px 32px 32px",
        backgroundColor: "#24232c",
      }}
    >
      <h1>Password Generator</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#24232c",
        }}
      >
        <p>generated password</p>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => navigator.clipboard.writeText("This text was copied")}
        >
          <Icon src={copy} alt="Copy" type={"copy"} />
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#24232c",
        }}
      >
        <CharacterLength
          password={password}
          length={length}
          setLength={setLength}
        />
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
        <StrengthMeter />
        <GenerateButton src={arrow} alt="arrow" type="arrow" />
      </div>
    </main>
  );
}

export default PasswordGenerator;
