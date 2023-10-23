import { useStore } from "../contexts/storeProvider";

function useHook() {
  const { classIcon, setWinnerAndLoser, setScore }: any = useStore();

  const houseRandom = (): string => {
    const randomIndex = Math.floor(Math.random() * classIcon.length);
    const selected = classIcon[randomIndex];
    return selected;
  };

  const judge = (player: string, house: string) => {
    let res: { player: string; house: string; result: string };
    if (
      (player === "paper" && house === "rock") ||
      (player === "rock" && house === "scissors") ||
      (player === "scissors" && house === "paper")
    ) {
      setScore((prev: number) => {
        return (prev = prev + 1);
      });
      res = { player, house, result: "YOU WON" };
    } else if (player === house) {
      res = { player, house, result: "DRAW" };
    } else {
      setScore(0);
      res = { player, house, result: "YOU LOST" };
    }
    setWinnerAndLoser(res);
  };

  return { houseRandom, judge };
}

export default useHook;
