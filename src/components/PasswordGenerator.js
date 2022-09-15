import { useState } from "react";
import arrow from "../assets/images/icon-arrow-right.svg";
import CheckboxItem from "./CheckboxItem/CheckboxItem";
import GenerateButton from "./GenerateButton/GenerateButton";
import StrengthMeter from "./StrengthMeter/StrengthMeter";
import CharacterLength from "./CharacterLength/CharacterLength";
import PasswordDisplay from "./PasswordDisplay/PasswordDisplay";
import { generatePassword } from "../utils/generatePassword";

function PasswordGenerator() {
  const [useUppercase, setUseUppercase] = useState(false);
  const [useLowercase, setUseLowercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);

  function handleGenerateNewPassword() {
    const newPassword = generatePassword(
      useLowercase,
      useUppercase,
      useNumbers,
      useSymbols,
      length
    );
    setPassword(newPassword);
  }

  return (
    <main
      style={{
        maxWidth: "600px",
        border: "1px solid black",
        padding: "25px 32px 32px",
        backgroundColor: "#24232c",
        margin: "auto",
      }}
    >
      <h1>Password Generator</h1>

      <PasswordDisplay password={password} />

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
        <StrengthMeter password={password} />
        <GenerateButton
          handleClick={handleGenerateNewPassword}
          src={arrow}
          alt="arrow"
          type="arrow"
        />
      </div>
    </main>
  );
}

export default PasswordGenerator;
