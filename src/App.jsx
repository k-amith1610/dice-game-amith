import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rules from "./components/Rules";

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

