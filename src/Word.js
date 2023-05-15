import React from "react";
import NewWord from "./App.js";

export default function Word({ word }) {
    const letters = word.split("");
    const displayWord = letters
        .map((letter) => (letter === " " ? " " : "_"))
        .join(" ");
    return <div>{displayWord}</div>;
}
