import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import React from "react";

const Keyboard = ({ onClick }) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const row1 = alphabet.slice(0, 13);
    const row2 = alphabet.slice(13, 26);

    return (
        <div className="Keyboard">
            {alphabet.map((letter) => (
                <button key={letter} onClick={() => onClick(letter)}>
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
