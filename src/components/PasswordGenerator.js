import copy from "../assets/images/icon-copy.svg";
import Icon from "./Icon/Icon";

function PasswordGenerator() {
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
        <p>Include Uppercase Letters</p>
        <p>Include Lowercase Letters</p>
        <p>Include Numbers</p>
        <p>Include Symbols</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>STRENGTH</p>
        <p>MEDIUM</p>
      </div>
    </main>
  );
}

export default PasswordGenerator;
