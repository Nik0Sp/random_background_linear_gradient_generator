import React, { useState, useEffect } from "react";

const App = () => {
  const [outputColor, setOutputColor] = useState("");
  const [outputCode, setOutputCode] = useState("");

  const hexString = "0123456789abcdef";

  const randomColor = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };

  const generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    setOutputColor(`linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`);
    setOutputCode(
      `background:linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`
    );
  };

  useEffect(() => {
    generateGrad();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(outputCode);
    alert("Der Code wurde kopiert!");
  };

  return (
    <div className="section">
      <div id="output-color" style={{ background: outputColor }}></div>
      <div className="container glass">
        <h2 style={{background:outputColor}}>Random Background Linear Gradient Generator</h2>
        <input
          className="glass"
          type="text"
          id="output-code"
          readOnly
          value={outputCode}
        />
        <div className="btn-box">
          <button className="glass" id="generate-btn" onClick={generateGrad}>
            Generate
          </button>
          <button className="glass" id="copy-btn" onClick={copyCode}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
