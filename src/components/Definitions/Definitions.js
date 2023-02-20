import React from "react";
import "./Definitions.css";
const Definitions = ({ word, meanings, category }) => {
  console.log(meanings);
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio style={{ backgroundColor: "#fff", borderRadius: 10 }} controls>
          <source
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          />
          Your browser does not support the audio element.
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) => {
          return mean.meanings.map((item) => {
            return item.definitions.map((def) => {
              // console.log(def);
              return (
                <div
                  className="singleMean"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>Example :</b> {def.example}
                    </span>
                  )}
                  {def.synonyms.size > 0 && (
                    <span>
                      <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              );
            });
          });
        })
      )}
    </div>
  );
};

export default Definitions;
