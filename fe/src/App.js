import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import LandingPage from './Views/LandingPage';
import "./App.scss"
import { useState } from "react";
import Theme from "./Components/Theme";

function App() {

  const [theme, setTheme] = useState(window.localStorage.theme ? localStorage.theme : "light")

  return (
    <div className={`App-${theme}`}>
      <Theme setTheme={setTheme} theme={theme}/>
      <Routes>
        <Route path="/" element={<LandingPage setTheme={setTheme}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
