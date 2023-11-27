import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const [numbers2, setNumbers2] = useState([]);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  // useEffect(() => {
  //   setNumbers2(numbers);
  // }, [operator]);

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-zinc-700 p-8 max-w-[30rem] mx-6 rounded-lg shadow-2xl">
        <div className="flex flex-col bg-white mb-8 rounded-lg px-4 py-2">
          <span
            className={`ml-auto ${operator != "" ? "visible" : "invisible"}`}>
            {numbers.length === 0 ? 0 : numbers.join("")} {operator}
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
                ? result
                : "Cannot divide by 0"
            }
            maxLength={4}
            className="pointer-events-none caret-transparent bg-transparent text-end text-5xl font-bold w-full"
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
      {/* <div className="p-5 bg-yellow-500 text-4xl">
        {result != "Infinity" ? result : "Cannot divide by 0"}
      </div> */}
    </main>
  );
}
