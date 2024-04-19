import React, { useState } from "react";
import "./cal.css";
const Calculator = () => {
  // Managing states

  const [result, setresult] = useState("");

  const handleEvent = (event) => {
    let val = event.target.innerText;
    let res = result;

    switch (val) {
      case "AC":
        setresult("");
        break;
      case "←":
        setresult(result.slice(0, -1));
        break;
      case "÷":
        val = "/";
        setresult(result + val);
        break;
      case "−":
        val = "-";
        setresult(result + val);
        break;
      case "×":
        val = "*";
        setresult(result + val);
        break;
      case "=":
        setresult(eval(result));
        break;

      default:
        setresult((res = res + val));
    }
  };
  return (
    <div className="wraper">
      <div className="calculator-div">
        <div className="display">
          <h1 className="title">Calculator 2.0</h1>
          <input
            type="text"
            name="display-result"
            className="result-input"
            value={result}
            readOnly
            autoComplete="off"
          />
        </div>

        <div className="all-buttons">
          <div className="handler">
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              AC
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              &#8592;
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              &#37;
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              &#247;
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              7
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              8
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              9
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              &#215;
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              4
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              5
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              6
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              &#8722;
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              1
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              2
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              3
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              &#43;
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              0
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn"
            >
              .
            </button>
            <button
              onClick={(e) => {
                handleEvent(e);
              }}
              className="cal-btn equal"
            >
              &#61;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
