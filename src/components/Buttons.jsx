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
  numbers2,
  setNumbers2,
  operator,
  setOperator,
  result,
  setResult,
}) {
  return (
    <div className="grid grid-cols-4 gap-4 text-center text-2xl">
      <button
        onClick={() => {
          setNumbers([...numbers, "%"]);
        }}
        className="p-5 bg-yellow-500 hover:bg-yellow-400 rounded-lg">
        <FaPercentage className="m-auto" />
      </button>
      <button
        onClick={() => {
          setOperator("");
          setNumbers([]);
          setNumbers2([]);
          setResult(null);
        }}
        className="p-5 bg-yellow-500 font-bold hover:bg-yellow-400 rounded-lg">
        C
      </button>
      <button
        onClick={() => {
          const popArr = [...numbers];
          const popArr2 = [...numbers2];
          operator === ""
            ? (popArr.pop(), setNumbers(popArr))
            : (popArr2.pop(), setNumbers2(popArr2));
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
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 7])
            : setNumbers2([...numbers2, 7]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        7
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 8])
            : setNumbers2([...numbers2, 8]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        8
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 9])
            : setNumbers2([...numbers2, 9]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        9
      </button>
      <button
        onClick={() => setOperator("x")}
        className="p-5 bg-slate-400 hover:bg-slate-500 text-white rounded-lg">
        <FaTimes className="m-auto" />
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 4])
            : setNumbers2([...numbers2, 4]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        4
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 5])
            : setNumbers2([...numbers2, 5]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        5
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 6])
            : setNumbers2([...numbers2, 6]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        6
      </button>
      <button
        onClick={() => setOperator("+")}
        className="p-5 bg-slate-400 hover:bg-slate-500 text-white rounded-lg">
        <FaPlus className="m-auto" />
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 1])
            : setNumbers2([...numbers2, 1]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        1
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 2])
            : setNumbers2([...numbers2, 2]);
        }}
        className="p-5 bg-zinc-200 hover:bg-zinc-300 rounded-lg">
        2
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 3])
            : setNumbers2([...numbers2, 3]);
        }}
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
          operator === ""
            ? numbers.length === 0
              ? setNumbers([])
              : setNumbers([...numbers, 0])
            : numbers2.length === 0
            ? setNumbers2([0])
            : setNumbers2([...numbers2, 0]);
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
        onClick={() => {
          setNumbers([]);
          setNumbers2([]);
          setOperator("");

          if (operator != "") {
            switch (operator) {
              case "+":
                setResult(Number(numbers.join("")) + Number(numbers2.join("")));
                break;
              case "-":
                setResult(numbers.join("") - numbers2.join(""));
                break;
              case "x":
                setResult(numbers.join("") * numbers2.join(""));
                break;
              case "÷":
                setResult((numbers.join("") / numbers2.join("")).toFixed(8));
                break;
              default:
                setNumbers("Invalid");
                break;
            }
          }
        }}
        className="p-5 bg-red-700 text-white hover:bg-red-800 rounded-lg">
        <FaEquals className="m-auto" />
      </button>
    </div>
  );
}
