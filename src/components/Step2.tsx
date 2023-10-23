import React from "react";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import { useStore } from "../contexts/storeProvider";
function Step2() {
  const { playAgain, setPlayAgain }: any = useStore();
  return (
    <div className="icon-container2 step2">
      <div className="box2">
        <h1>YOU PICKED</h1>
        <div className="border2 paper2">
          <div className="icon">
            <img src={paper} width={75} alt="paper" />
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "3.5rem" }}>YOU WON</h1>
        <button
          className="play-again"
          onClick={() => {
            setPlayAgain(true);
          }}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className="box2">
        <h1>THE HOUSE PICKED</h1>
        <div className="border2 rock2">
          <div className="icon">
            <img src={rock} width={75} alt="rock" />
          </div>
        </div>
      </div>
      {/* <div className="border2 scissors2">
        <div className="icon">
          <img src={scissors} width={75} alt="scissors" />
        </div>
      </div> */}
    </div>
  );
}

export default Step2;
