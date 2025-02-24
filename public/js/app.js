// Asegurarnos de que React y ReactDOM están disponibles
const { useState } = React;

// Componente Calculadora
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

// Renderizar el componente en el div con id 'app'
ReactDOM.createRoot(document.getElementById("app")).render(<Calculator />);