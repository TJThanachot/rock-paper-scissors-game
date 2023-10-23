import React from "react";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import bgTringle from "../assets/bg-triangle.svg";
import { useStore } from "../contexts/storeProvider";

function Step1() {
  const { setPlayAgain } = useStore();
  const buttonIcon = [paper, rock, scissors];

  return (
    <div className="icon-container">
      <img src={bgTringle} className="bg-tringle" alt="bg tringle" />

      {buttonIcon.map((item, index) => {
        let classIcon;
        switch (index) {
          case 0:
            classIcon = "paper";
            break;
          case 1:
            classIcon = "rock";
            break;
          default:
            classIcon = "scissors";
        }
        return (
          <button
            key={index}
            className={`border ${classIcon}`}
            onClick={() => {
              setPlayAgain(false);
            }}
          >
            <div className="icon">
              <img src={item} width={75} />
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default Step1;
