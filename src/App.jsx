import { useState } from "react";

export default function App() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-slate-500">
      <div className="bg-slate-200 p-5">
        <div className="">
          <input
            type="number"
            className="caret-transparent text-end text-2xl font-bold"
          />
        </div>
      </div>
    </main>
  );
}
