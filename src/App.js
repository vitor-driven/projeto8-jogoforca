import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras.js";
import Letters, { alphabet } from "./Letters.js";
import Forca from "./Forca.js";
import { useState } from "react";

let Answer;
function App() {
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const [word, setWord] = useState("");
    const [select, setSelect] = useState([...alphabet]);
    const [cont, setCont] = useState(0);
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(images[0]);
    const [guess, setGuesses] = useState("");

    function randomWord() {
        let locate = Math.floor(Math.random() * palavras.length);

        setCont(0);
        setCount(0);
        setImage(images[0]);
        Answer = palavras[locate];
        setGuesses("");
        return Answer;
    }
    console.log(word);

    function compare(letra) {
        if (Answer.includes(letra)) {
            return Answer;
        }
    }

    function contErrors(letra) {
        Answer = Answer.normalize("NFD");
        Answer = Answer.replace(/[\u0300-\u036f]/g, "");
        if (!Answer.includes(letra)) {
            const newCont = cont + 1;
            setCont(newCont);
            setImage(images[newCont]);
        }
        if (cont >= 6) setCont(0);
    }

    return (
        <div className="App">
            <Forca
                word={word}
                setWord={() => {
                    setWord(randomWord(), compare());
                    setSelect([]);
                }}
                image={image}
                cont={cont}
                count={count}
                select={select}
            />
            <Letters
                word={word}
                select={select}
                setSelect={setSelect}
                compare={compare}
                cont={cont}
                count={count}
                setCount={setCount}
                contErrors={contErrors}
            />
        </div>
    );
}
export default App;
