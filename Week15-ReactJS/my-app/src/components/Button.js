import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Apply");

  return (
    <button onClick={() => setButtonText("Accepted")}>
      {buttonText}
    </button>
  );
}