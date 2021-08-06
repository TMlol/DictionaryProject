import React from "react";
import "./Definitions.css";
const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: "10" }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support audio element.
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <strong>{def.definition}</strong>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <strong>Example: </strong> {def.example}
                  </span>
                )}

                {def.synonyms && (
                  <span>
                    <strong>Synonyms: </strong>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
