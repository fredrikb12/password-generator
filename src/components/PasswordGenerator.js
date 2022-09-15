import { useState } from "react";
import arrow from "../assets/images/icon-arrow-right.svg";
import CheckboxItem from "./CheckboxItem/CheckboxItem";
import GenerateButton from "./GenerateButton/GenerateButton";
import StrengthMeter from "./StrengthMeter/StrengthMeter";
import CharacterLength from "./CharacterLength/CharacterLength";
import PasswordDisplay from "./PasswordDisplay/PasswordDisplay";
import { generatePassword } from "../utils/generatePassword";
import Heading from "./Heading/Heading";

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

  function getStrength() {
    if (
      [useUppercase, useLowercase, useNumbers, useSymbols].every(
        (item) => item === false
      )
    )
      return 0;
    if (length < 7) return 1;
    if (length < 10) return 2;
    let score = 0;
    [useUppercase, useLowercase, useNumbers, useSymbols].forEach((item) => {
      if (item === true) score += 5;
    });
    score += length / 2;
    return Math.floor(score / 7);
  }

  return (
    <main
      style={{
        maxWidth: "540px",
        width: "90vw",
        margin: "auto",
      }}
    >
      <Heading />

      <PasswordDisplay password={password} />

      <div
        style={{
          backgroundColor: "#24232c",
          padding: "32px 34px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CharacterLength
          password={password}
          length={length}
          setLength={setLength}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "19px",
            marginBottom: "32px",
          }}
        >
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
        <StrengthMeter password={password} strength={getStrength()} />
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
