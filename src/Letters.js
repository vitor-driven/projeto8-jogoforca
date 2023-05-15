import React, { useState } from "react";

export default function Keyboard({ word }) {
    const [guessedLetters, setGuessedLetters] = useState([]);

    const letterClick = (letter) => {
        if (word.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
        }
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className="Keyboard">
            {alphabet.map((letter) => (
                <button key={letter} onClick={letterClick}>
                    {letter}
                </button>
            ))}
        </div>
    );
}
