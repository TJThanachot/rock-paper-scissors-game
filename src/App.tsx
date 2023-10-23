import logo from "./assets/logo.svg";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "./contexts/storeProvider";

function App() {
  const { rules, setRules, playAgain, score }: any = useStore();

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="logo" />
        <div className="score-container">
          <p>SCORE</p>
          <p className="score">{`${score}`}</p>
        </div>
      </header>
      {playAgain === true ? <Step1 /> : <Step2 />}
      <footer className="footer">
        <button
          className="rules-button"
          onClick={() => {
            setRules((prev: boolean): boolean => {
              return (prev = !prev);
            });
          }}
        >
          RULES
        </button>
      </footer>
      <div className={`rules ${rules === true ? "show-rules" : null}`}>
        <div style={{ position: "relative", width: "23.5rem" }}>
          <button
            className="close"
            onClick={() => {
              setRules((prev: boolean): boolean => {
                return (prev = !prev);
              });
            }}
          >
            <AiOutlineClose />
          </button>
          <img className="pop-up" src="./src/assets/rules.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
