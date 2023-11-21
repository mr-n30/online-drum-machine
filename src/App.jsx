import { useEffect } from "react";

const URL = [
    { url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", key: "Q" },
    { url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", key: "W" },
    { url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", key: "E" },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        key: "A",
    },
    { url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", key: "S" },
    { url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", key: "D" },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        key: "Z",
    },
    {
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        key: "X",
    },
    { url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", key: "C" },
];

const Button = () => {
    // Handle a user clicking
    const handleClick = (key) => {
        document.getElementById(`buttonKey${key}`).play();
    };

    // Handle the keypress
    useEffect(() => {
        function handleKeyPress(e) {
            // Keycheck
            // returns true or false
            if (URL.some((elem) => elem.key === e.key.toUpperCase())) {
                return handleClick(e.key.toUpperCase());
            }
        }

        // keypress event listener
        window.addEventListener("keypress", handleKeyPress);
        return () => window.removeEventListener("keypress", handleKeyPress);
    }, []);

    // Return an array of '<li>{data...'
    return URL.map((obj) => {
        return (
            <div className="button rounded" key={`buttonKey${obj.key}`}>
                <audio id={`buttonKey${obj.key}`}>
                    <source src={obj.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <button
                    className="shadow-lg h-100 w-100 btn btn-dark rounded"
                    onClick={() => handleClick(obj.key)}
                >
                    {obj.key}
                </button>
            </div>
        );
    });
};

export default function App() {
    return (
        <>
            <h1>
                <i className="text-white bg-primary">Click</i> The Button or Press
                The Same Key on Your <i className="bg-black text-white">Keyboard</i> to
                Generate A Drum Sound
            </h1>
            <Button />
            <footer className="container-fluid">
                &copy; Created on <a rel="noreferrer" target="_blank" href="https://github.com/mr-n30/online-drum-machine">GitHub </a> by: <a rel="noreferrer" target="_blank" href="https://github.com/mr-n30" className="link-primary">mr-n30</a>
            </footer>
        </>
    );
}
