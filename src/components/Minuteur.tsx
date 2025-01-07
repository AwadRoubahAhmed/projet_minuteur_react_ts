import { useEffect, useState } from "react";

const Minuteur: React.FC = () => {
  // State;
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  //Comportement;
  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };

  //Affichage(render);
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">MINUTEUR</h1>
      <div className="">
        <div className="text-center text-black text-lg mt-2 mx-auto p-2 bg-slate-400 w-24 rounded-md shadow-xl">
          {count}
        </div>
        <button
          onClick={() => toggleCounter()}
          className="w-40 btn btn-primary text-white text-base mt-4 ml-10"
        >
          {isRunning ? `Démarer` : `Arreter`}
        </button>
      </div>
    </div>
  );
}

export default Minuteur;
