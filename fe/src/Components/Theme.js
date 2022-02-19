import React from "react";

const Theme = ({theme,setTheme}) => {
    
    const handleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    };

    return (
        <div className="themes fixed-top m-2">
            <button onClick={handleTheme} type="button" className="lightBtn">
                Light <i class="light bi bi-brightness-high"></i>
            </button>
            <button onClick={handleTheme} type="button" className="darkBtn">
                Dark <i class="dark bi bi-moon"></i>
            </button>
        </div>
    );
};

export default Theme;
