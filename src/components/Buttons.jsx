import axios from "axios";
import { useEffect } from "react";
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
  // const handleHistory = () => {
  //   axios.post("http://localhost:3000/posts", {
  //     num1: numbers.join(""),
  //     operator: operator,
  //     num2: numbers2.join(""),
  //     result: result,
  //   });
  // };
  useEffect(() => {
    if (result != null) {
      axios
        .post("http://localhost:3000/posts", {
          num1: numbers.join(""),
          operator: operator,
          num2: numbers2.join(""),
          result: result,
        })
        .then(() => {
          setNumbers([]);
          setNumbers2([]);
          setOperator("");
        });
    }
  }, [result]);
  return (
    <div className="grid grid-cols-4 gap-4 text-2xl text-center">
      <button
        onClick={() => {
          setNumbers([...numbers, "%"]);
        }}
        className="p-5 bg-yellow-500 rounded-lg hover:bg-yellow-400"
      >
        <FaPercentage className="m-auto" />
      </button>
      <button
        onClick={() => {
          setOperator("");
          setNumbers([]);
          setNumbers2([]);
          setResult(null);
        }}
        className="p-5 font-bold bg-yellow-500 rounded-lg hover:bg-yellow-400"
      >
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
        className="p-5 bg-yellow-500 rounded-lg hover:bg-yellow-400"
      >
        <FaBackspace className="m-auto" />
      </button>
      <button
        onClick={() => setOperator("÷")}
        className="p-5 text-white rounded-lg bg-slate-400 hover:bg-slate-500"
      >
        <FaDivide className="m-auto" />
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 7])
            : setNumbers2([...numbers2, 7]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        7
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 8])
            : setNumbers2([...numbers2, 8]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        8
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 9])
            : setNumbers2([...numbers2, 9]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        9
      </button>
      <button
        onClick={() => setOperator("x")}
        className="p-5 text-white rounded-lg bg-slate-400 hover:bg-slate-500"
      >
        <FaTimes className="m-auto" />
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 4])
            : setNumbers2([...numbers2, 4]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        4
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 5])
            : setNumbers2([...numbers2, 5]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        5
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 6])
            : setNumbers2([...numbers2, 6]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        6
      </button>
      <button
        onClick={() => setOperator("+")}
        className="p-5 text-white rounded-lg bg-slate-400 hover:bg-slate-500"
      >
        <FaPlus className="m-auto" />
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 1])
            : setNumbers2([...numbers2, 1]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        1
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 2])
            : setNumbers2([...numbers2, 2]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        2
      </button>
      <button
        onClick={() => {
          operator === ""
            ? setNumbers([...numbers, 3])
            : setNumbers2([...numbers2, 3]);
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        3
      </button>
      <button
        onClick={() => setOperator("-")}
        className="p-5 text-white rounded-lg bg-slate-400 hover:bg-slate-500"
      >
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
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
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
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        0
      </button>
      <button
        onClick={() => {
          !numbers.includes(".") &&
            (numbers.length === 0
              ? setNumbers([0, "."])
              : setNumbers([...numbers, "."]));
        }}
        className="p-5 rounded-lg bg-zinc-200 hover:bg-zinc-300"
      >
        .
      </button>
      <button
        onClick={() => {
          console.log(result);
          if (operator != "") {
            switch (operator) {
              case "+":
                result === null
                  ? setResult(
                      Number(numbers.join("")) + Number(numbers2.join(""))
                    )
                  : setResult(
                      Number(result) + Number(numbers2.join(""))
                    );
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
        className="p-5 text-white bg-red-700 rounded-lg hover:bg-red-800"
      >
        <FaEquals className="m-auto" />
      </button>
    </div>
  );
}
