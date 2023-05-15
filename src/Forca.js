export default function Forca(props) {
    const { word, setWord, image, cont, count, select } = props;

    return (
        <div className="App-top">
            <img src={image} alt="" data-test="game-image" />
            <div className="App-right">
                <button onClick={setWord} data-test="choose-word">
                    Escolher Palavra
                </button>
                {cont < 6 ? (
                    count === word.length ? (
                        <div className="Forca-word" data-test="word">
                            {word}
                        </div>
                    ) : (
                        <div className="Forca-word" data-test="word">
                            {word.split("").map((letra) => {
                                return select.includes(
                                    letra
                                        .normalize("NFD")
                                        .replace(/[\u0300-\u036f]/g, "")
                                )
                                    ? letra
                                    : "_";
                            })}
                        </div>
                    )
                ) : (
                    <div className="Forca-word red" data-test="word">
                        {word}
                    </div>
                )}
            </div>
        </div>
    );
}
