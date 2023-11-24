import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";

export default function App() {
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState("");

  // useEffect(() => {
  //   setNumbers(numbers.slice(0, 10));
  // }, [numbers]);

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-400">
      <div className="bg-zinc-700 p-8 max-w-[30rem] mx-6 rounded-lg shadow-2xl">
        <div className="flex flex-col bg-white mb-8 rounded-lg px-4 py-2">
          <span
            className={`ml-auto ${operator != "" ? "visible" : "invisible"}`}>
            {numbers.length === 0 ? 0 : numbers.join("")}{" "}
            {operator ? operator : 0}
          </span>
          <input
            type="text"
            onBlur={(e) => e.target.focus()}
            value={numbers.length === 0 ? 0 : numbers.join("").slice(0, 12)}
            autoFocus
            maxLength={4}
            className="pointer-events-none caret-transparent bg-transparent text-end text-5xl font-bold w-full"
          />
        </div>
        <Buttons
          numbers={numbers}
          setNumbers={setNumbers}
          operator={operator}
          setOperator={setOperator}
        />
      </div>
    </main>
  );
}
