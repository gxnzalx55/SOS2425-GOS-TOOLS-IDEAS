const { useState } = React;

function Calculator() {
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        setDisplay(display + value);
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleCalculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (e) {
            setDisplay("Error");
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" value={display} readOnly />
            <div>
                {["1", "2", "3", "+"].map((char) => (
                    <button key={char} onClick={() => handleClick(char)}>{char}</button>
                ))}
                <button onClick={handleClear}>C</button>
                <button onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<Calculator />);