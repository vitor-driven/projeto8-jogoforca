export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Letters(props) {
    const {
        word,
        select,
        setSelect,
        compare,
        cont,
        count,
        setCount,
        contErrors,
    } = props;

    function selectedLetter(x) {
        if (cont < 5) {
            const newArray = [...select];
            setSelect([...newArray, x]);
        } else {
            setSelect(alphabet);
        }
    }

    function finish(x) {
        let inc = 0;
        for (let i = 0; i < word.length; i++) {
            if (x === word[i].normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                inc++;
        }
        const newInc = count + inc;
        setCount(newInc);

        if (newInc === word.length && cont < 6) {
            setSelect(alphabet);
        }
    }

    return (
        <div className="Keyboard">
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    disabled={select.includes(letter) ? true : false}
                    onClick={() => {
                        selectedLetter(letter);
                        compare(letter);
                        contErrors(letter);
                        finish(letter);
                    }}
                    data-test="letter"
                >
                    {letter}
                </button>
            ))}
        </div>
    );
}
