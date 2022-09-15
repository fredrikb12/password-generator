import { useEffect, useState } from "react";
import { StyledStrengthMeter } from "./StrengthMeter.styled";

function StrengthMeter({ password, strength }) {
  const [strengthArray, setStrengthArray] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < 4; i++) {
      if (i < strength) {
        array.push(true);
      } else {
        array.push(false);
      }
    }
    setStrengthArray(array);
  }, [strength]);

  function getColor(strength) {
    switch (strength) {
      case 1: {
        return "red";
      }
      case 2: {
        return "orange";
      }
      case 3: {
        return "yellow";
      }
      case 4: {
        return "neonGreen";
      }
      default:
        return "empty";
    }
  }

  function getText() {
    switch (strength) {
      case 1:
        return "TOO WEAK!";
      case 2:
        return "WEAK";
      case 3:
        return "MEDIUM";
      case 4:
        return "STRONG";
      default:
        return "";
    }
  }
  return (
    <StyledStrengthMeter>
      <p className="body-font">STRENGTH</p>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <p className="medium-font">{getText()}</p>
        <div className="container">
          {strengthArray.map((item, index) => {
            if (item === false)
              return <div key={index} className={"strength-item empty"}></div>;
            else
              return (
                <div
                  key={index}
                  className={"strength-item " + getColor(strength)}
                ></div>
              );
          })}
        </div>
      </div>
    </StyledStrengthMeter>
  );
}

export default StrengthMeter;
