import axios from "axios";
import { useEffect, useState } from "react";

export default function History({ result }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((e) => {
      console.log(e);
      setHistory(e.data);
    });
  }, [result]);
  return (
    <div className="h-[38rem] w-[20rem] bg-neutral-200 rounded-xl overflow-y-scroll history absolute">
      <div className="flex flex-col items-center gap-10 py-4 text-4xl font-bold">
        {history.length < 1 ? (
          <span className="text-lg font-normal">Nenhum cálculo realizado</span>
        ) : (
          history.map((e) => (
            <span className="m-auto text-center">
              {e.num1} {e.operator} {e.num2} = {e.result}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
