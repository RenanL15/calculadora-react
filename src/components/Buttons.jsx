import {
  FaBackspace,
  FaDivide,
  FaEquals,
  FaMinus,
  FaPercentage,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { PiPlusMinusBold } from "react-icons/pi";

export default function Buttons({
  numbers,
  setNumbers,
  operator,
  setOperator,
}) {
  return (
    <div className="grid grid-cols-4 gap-4 text-center text-2xl">
      <button
        onClick={() => setNumbers([...numbers, "%"])}
        className="p-5 bg-yellow-500 hover:bg-yellow-400 rounded-lg">
        <FaPercentage className="m-auto" />
      </button>
      <button
        onClick={() => {
          setOperator("");
          setNumbers([]);
        }}
        className="p-5 bg-yellow-500 font-bold hover:bg-yellow-400 rounded-lg">
        C
      </button>
      <button
        onClick={() => {
          const popArr = [...numbers];
          popArr.pop();
          setNumbers(popArr);
        }}
        className="p-5 bg-yellow-500 hover:bg-yellow-400 rounded-lg">
        <FaBackspace className="m-auto" />
      </button>
      <button
        onClick={() => setOperator("÷")}
        className="p-5 bg-slate-400 hover:bg-slate-500 text-white rounded-lg">
        <FaDivide className="m-auto" />
      </button>
      <button
        onClick={() => setNumbers([...numbers, 7])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        7
      </button>
      <button
        onClick={() => setNumbers([...numbers, 8])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        8
      </button>
      <button
        onClick={() => setNumbers([...numbers, 9])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        9
      </button>
      <button
        onClick={() => setOperator("x")}
        className="p-5 bg-slate-400 hover:bg-slate-500 text-white rounded-lg">
        <FaTimes className="m-auto" />
      </button>
      <button
        onClick={() => setNumbers([...numbers, 4])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        4
      </button>
      <button
        onClick={() => setNumbers([...numbers, 5])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        5
      </button>
      <button
        onClick={() => setNumbers([...numbers, 6])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        6
      </button>
      <button
        onClick={() => setOperator("+")}
        className="p-5 bg-slate-400 hover:bg-slate-500 text-white rounded-lg">
        <FaPlus className="m-auto" />
      </button>
      <button
        onClick={() => setNumbers([...numbers, 1])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        1
      </button>
      <button
        onClick={() => setNumbers([...numbers, 2])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        2
      </button>
      <button
        onClick={() => setNumbers([...numbers, 3])}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        3
      </button>
      <button
        onClick={() => setOperator("-")}
        className="p-5 bg-slate-400 hover:bg-slate-500 text-white rounded-lg">
        <FaMinus className="m-auto" />
      </button>
      <button
        onClick={() => {
          const shArr = [...numbers];
          shArr.shift();
          numbers.includes("-")
            ? setNumbers(shArr)
            : numbers.length > 0 && setNumbers(["-", ...numbers]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        <PiPlusMinusBold className="m-auto" />
      </button>
      <button
        onClick={() => {
          numbers.length === 0 ? setNumbers([]) : setNumbers([...numbers, 0]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        0
      </button>
      <button
        onClick={() => {
          !numbers.includes(".") &&
            (numbers.length === 0
              ? setNumbers([0, "."])
              : setNumbers([...numbers, "."]));
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        .
      </button>
      <button
        onClick={() => setNumbers([...numbers, 0])}
        className="p-5 bg-red-700 text-white hover:bg-red-800 rounded-lg">
        <FaEquals className="m-auto" />
      </button>
    </div>
  );
}
