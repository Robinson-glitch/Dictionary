import React, { useState } from "react";

function App() {

  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {

    const result = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>XDictionary</h2>

      {/* Input field */}
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />

      {/* Search button */}
      <button onClick={handleSearch} style={{ padding: "8px 12px", marginLeft: "8px" }}>
        Search
      </button>

      {/* Display definition */}
      {definition && (
        <div style={{ marginTop: "20px" }}>
          {definition === "Word not found in the dictionary." ? (
            <p>{definition}</p>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
