import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import History from "./components/History";
import { MdHistory } from "react-icons/md";

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const [numbers2, setNumbers2] = useState([]);
  const [operator, setOperator] = useState("");
  const [viewHistory, setViewHistory] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result != null) {
      setNumbers2([result]);
      console.log(satisfies);
      console.log(numbers2);
    }
  }, [result]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="flex justify-center">
        <div className="relative bg-zinc-700 p-8 max-w-[30rem] mx-6 rounded-lg shadow-2xl z-10">
          <button
            className="absolute flex items-center self-start gap-2 p-2 mt-4 text-xl bg-white -top-14 right-6 rounded-2xl"
            onClick={() => setViewHistory(!viewHistory)}
          >
            Ver histórico
            <MdHistory size={25} />
          </button>
          <div className="flex flex-col px-4 py-2 mb-8 bg-white rounded-lg">
            <span
              className={`ml-auto ${operator != "" ? "visible" : "invisible"}`}
            >
              {numbers.length === 0
                ? result === null
                  ? numbers2.join("")
                  : result
                : numbers.join("")}{" "}
              {operator}
            </span>
            <input
              type="text"
              value={
                result === null
                  ? operator === ""
                    ? numbers.length === 0
                      ? 0
                      : numbers.join("").slice(0, 12)
                    : numbers2.join("").slice(0, 12)
                  : result != "Infinity"
                  ? numbers2.join("").slice(0, 12)
                : "Cannot divide by 0"
              }
              maxLength={4}
              className="w-full text-5xl font-bold bg-transparent pointer-events-none caret-transparent text-end"
            />
          </div>
          <Buttons
            numbers={numbers}
            setNumbers={setNumbers}
            numbers2={numbers2}
            setNumbers2={setNumbers2}
            operator={operator}
            setOperator={setOperator}
            result={result}
            setResult={setResult}
          />
        </div>

        {viewHistory && <History result={result} />}
        {/* <div className="p-5 text-4xl bg-yellow-500">
          {result != "Infinity" ? result : "Cannot divide by 0"}
        </div> */}
      </div>
    </main>
  );
}
