import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faDivide } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [exp, setExp] = useState("");
  const [ans, setAns] = useState("");

  function handleExp(val) {
    if (exp === "") {
      if (val === "*" || val === "/" || val === "+" || val === "-") {
        setExp("");
        setAns("");
      } else {
        setExp(val);
        setAns(val);
      }
    } else {
      const updatedValue = exp + val;
      setExp(updatedValue);
      setAns(eval(updatedValue));
    }
  }

  const deleteChr = () => {
    const updatedValue = exp.slice(0, -1);
    setExp(updatedValue);
    setAns(updatedValue);
  };

  function allClear() {
    setExp("");
    setAns("");
  }

  function onEvaluate() {
    setExp(ans);
    setAns("");
  }

  return (
    <div className="bg-[#1D3849] flex justify-center items-center h-[100vh] max-w-[100vw] pb-6">
      <div className="body w-[80%] lg:w-[25%] h-[70%] bg-[#142f44] rounded-2xl shadow-md shadow-[#000] text-white">
        <div className="screen h-[30%] mb-4">
          <div className="expression h-[60%] mb-2">
            <h1>{exp}</h1>
          </div>
          <div className="answer h-[30%]">
            <h1 className="w-[100%] pl-12"> <span>{ans ? "=>" : ""}</span> <span>{ans}</span></h1>
          </div>
        </div>

        <div className="btns flex justify-evenly flex-wrap p-2">
          <div
            className="w-[20%] mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              allClear();
            }}
          >
            AC
          </div>
          <div
            className="w-[20%] mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              deleteChr();
            }}
          >
            <FontAwesomeIcon icon={faDeleteLeft} />
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("%");
            }}
          >
            %
          </div>
          <div
            className="w-[20%] mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("/");
            }}
          >
            <FontAwesomeIcon icon={faDivide} style={{ color: "#f7f7f7" }} />
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("7");
            }}
          >
            7
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("8");
            }}
          >
            8
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("9");
            }}
          >
            9
          </div>
          <div
            className="w-[20%] mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("*");
            }}
          >
            x
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("4");
            }}
          >
            4
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("5");
            }}
          >
            5
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl  active:scale-90"
            onClick={() => {
              handleExp("6");
            }}
          >
            6
          </div>
          <div
            className="w-[20%] mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("-");
            }}
          >
            -
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("1");
            }}
          >
            1
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("2");
            }}
          >
            2
          </div>
          <div
            className="w-[20%]  mr-4 mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("3");
            }}
          >
            3
          </div>
          <div
            className="w-[20%] mb-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("+");
            }}
          >
            +
          </div>
          <div
            className="w-[20%]  mr-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp("0");
            }}
          >
            0
          </div>
          <div
            className="w-[20%]  mr-4 text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              handleExp(".");
            }}
          >
            .
          </div>
          <div
            className="w-[46%] text-center py-4 rounded-xl active:scale-90"
            onClick={() => {
              onEvaluate();
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
