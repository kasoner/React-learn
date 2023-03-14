import React, { useState } from "react";

function Apptwo() {
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [isRed, setIsRed] = useState(false);

    const handleButtonClick = () => {
        if (isRed) {
            setBackgroundColor("#FFFFFF"); // visszaállítás az eredeti színre
        } else {
            setBackgroundColor("#FF0000"); // változtatás az új színre
        }
        setIsRed(!isRed); // az isRed állapot inverze
    };

    return (
        <div id="hello-btn-conti" style={{ backgroundColor }}>
            <button onClick={handleButtonClick}>Click me</button>
        </div>
    );
}

export default Apptwo;

