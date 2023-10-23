import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import { useStore } from "../contexts/storeProvider";
function Step2() {
  const { setPlayAgain, winnerAndLoser }: any = useStore();
  const buttonIcon = [paper, rock, scissors];
  switch (winnerAndLoser.winner) {
    case "paper":
  }
  return (
    <div className="icon-container2 step2">
      <div className="box2">
        <h1>YOU PICKED</h1>
        <div className={`border2 ${winnerAndLoser.player}2`}>
          <div className="icon">
            <img
              src={
                winnerAndLoser.player === "paper"
                  ? buttonIcon[0]
                  : winnerAndLoser.player === "rock"
                  ? buttonIcon[1]
                  : buttonIcon[2]
              }
              width={75}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "3.5rem" }}>{winnerAndLoser.result}</h1>
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
        <div className={`border2 ${winnerAndLoser.house}2`}>
          <div className="icon">
            <img
              src={
                winnerAndLoser.house === "paper"
                  ? buttonIcon[0]
                  : winnerAndLoser.house === "rock"
                  ? buttonIcon[1]
                  : buttonIcon[2]
              }
              width={75}
              alt="rock"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
