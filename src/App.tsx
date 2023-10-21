import paper from "./assets/icon-paper.svg";
import rock from "./assets/icon-rock.svg";
import scissors from "./assets/icon-scissors.svg";
import logo from "./assets/logo.svg";
import bgTringle from "./assets/bg-triangle.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="logo" />
        <div className="score-container">
          <p>SCORE</p>
          <p className="score">12</p>
        </div>
      </header>
      <div className="icon-container">
        <img src={bgTringle} className="bg-tringle" alt="bg tringle" />

        <button className="border paper">
          <div className="icon">
            <img src={paper} width={75} alt="paper" />
          </div>
        </button>
        <button className="border rock">
          <div className="icon">
            <img src={rock} width={75} alt="rock" />
          </div>
        </button>
        <button className="border scissors">
          <div className="icon">
            <img src={scissors} width={75} alt="scissors" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
