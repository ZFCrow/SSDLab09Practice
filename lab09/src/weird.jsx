import React, { useState } from "react";

export default function RegexTester() {
  const [input, setInput] = useState("");
  const [match, setMatch] = useState(false);

  // Evil regex prone to ReDoS attack: nested quantifiers (a+)+
  const evilRegex = /^a+$/;

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);

    // This can cause performance issues on certain inputs
    setMatch(evilRegex.test(val));
  };

  return (
    <div>
      <h3>Test input against evil regex</h3>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>{match ? "Matches evil regex!" : "No match"}</p>
    </div>
  );
}
