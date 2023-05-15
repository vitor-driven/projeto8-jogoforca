import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import React, { useState } from "react";
import palavras from "./palavras.js";
import Letters from "./Letters.js";

export default function App() {
    const [currentForca, setForca] = useState(forca0);
    const [word, setWord] = useState("");
    const [wrongGuess, setWrongGuess] = useState(0);
    let chosenWord = "";
    function NewWord() {
        setForca(forca0);
        setWrongGuess(0);
        let randomIndex = Math.floor(Math.random() * palavras.length);
        chosenWord = palavras[randomIndex]
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        setWord(chosenWord);
        console.log(chosenWord);
    }

    const Word = ({ word }) => {
        const letters = word.split("");
        const displayWord = letters
            .map((letter) => (letter === " " ? " " : "_"))
            .join(" ");
        return <div>{displayWord}</div>;
    };

    return (
        <div className="App">
            <div className="App-top">
                <img src={currentForca} />
                <div className="App-right">
                    <button className="newWordButton" onClick={NewWord}>
                        Escolher Palavra
                    </button>
                </div>
                <div className="Forca-word">
                    <Word word={word} />
                </div>
            </div>
            <Letters />
        </div>
    );
}
