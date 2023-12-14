import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function History({ result }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((e) => {
      console.log(e);
      setHistory(e.data);
    });
  }, [result]);
  return (
    <div className="h-[36rem] w-[20rem] mt-4 bg-neutral-100 rounded-xl overflow-y-scroll history absolute">
      <div className="flex items-center text-red-600 group">
        <span className="invisible ml-auto group-hover:visible">
          Limpar histórico
        </span>
        <FaRegTrashCan
          onClick={() => setHistory([])}
          className="m-2 cursor-pointer"
          size={25}
        />
      </div>
      <div className="flex flex-col items-center gap-10 p-4 -mt-4">
        {history.length < 1 ? (
          <span className="text-lg font-normal">Nenhum cálculo realizado</span>
        ) : (
          history.map((e, i) => (
            <span key={i} className="m-auto text-3xl font-bold text-center">
              {e.num1} {e.operator} {e.num2} = {e.result}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
