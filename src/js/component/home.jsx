import React, { useState } from "react";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("yellow");

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="container">
            <div className="palo">
            </div>
        <div className="traffic-light">
            <div
                onClick={() => handleColorChange("red")}
                className={"light red" + (selectedColor === "red" ? " glow" : "")}
            ></div>
            <div
                onClick={() => handleColorChange("yellow")}
                className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
            ></div>
            <div
                onClick={() => handleColorChange("green")}
                className={"light green" + (selectedColor === "green" ? " glow" : "")}
            ></div>

            {/* Botón para alternar el color */}
            <button onClick={() => handleColorChange("red")}>Rojo</button>
            <button onClick={() => handleColorChange("yellow")}>Amarillo</button>
            <button onClick={() => handleColorChange("green")}>Verde</button>
        </div>
        </div>
    );
};

export default Home;
