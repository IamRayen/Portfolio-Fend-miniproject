import React from "react";

const Theme = ({theme,setTheme}) => {

    const setLocalStorage = (x) => {
        window.localStorage.setItem("theme",x)
    }
    
    const handleTheme = (x) => {
        theme === "light" ? setTheme("dark") : setTheme("light")
        setLocalStorage(x)
    };

    return (
        <div className="themes fixed-top m-2">
            <button onClick={()=>handleTheme("light")} type="button" className="lightBtn">
                Light <i className="light bi bi-brightness-high"></i>
            </button>
            <button onClick={()=>handleTheme("dark")} type="button" className="darkBtn">
                Dark <i className="dark bi bi-moon"></i>
            </button>
        </div>
    );
};

export default Theme;
