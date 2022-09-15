import { StyledStrengthMeter } from "./StrengthMeter.styled";

function StrengthMeter({ password, strengthArray = [] }) {
  function getColor(array) {
    let items = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== null) items++;
    }
    switch (items) {
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
        return undefined;
    }
  }
  return (
    <StyledStrengthMeter>
      <p>STRENGTH</p>
      <div>
        <p>MEDIUM</p>
        {strengthArray.map((item, index, array) => {
          return <div className={getColor(array)}></div>;
        })}
      </div>
    </StyledStrengthMeter>
  );
}

export default StrengthMeter;
