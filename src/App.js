import React from "react";
import "./App.css";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className={darkMode ? "App" : "App-light"}>
      <div className="container">
        <TopSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <BottomSection darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
