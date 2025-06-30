import React, { useState } from "react";
import Window from "../os/Window";

export interface CalculatorAppProps extends WindowAppProps {}

const BUTTONS = [
  ['%', 'CE', 'C', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['±', '0', '.', '='],
];

const OPERATORS = ['/', '*', '-', '+'];

// Função para ajustar o tamanho da fonte do display conforme o número de dígitos
function getDisplayFontSize(display: string) {
  const base = 32; // px
  const min = 12;
  const length = display.length;
  if (length < 11) return base;
  if (length < 15) return base - 5;
  if (length < 20) return base - 10;
  if (length < 28) return base - 16;
  return min;
}

const CalculatorApp: React.FC<CalculatorAppProps> = (props) => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [acc, setAcc] = useState<number>(0);

  const handleClick = (value: string) => {
    if (value === "C" || value === "CE") {
      setDisplay("0");
      setOperator(null);
      setAcc(0);
      setWaitingForOperand(false);
      return;
    }

    if (value === "%") {
      setDisplay((parseFloat(display) / 100).toString());
      setWaitingForOperand(true);
      return;
    }

    if (value === "±") {
      setDisplay((parseFloat(display) * -1).toString());
      return;
    }

    if (OPERATORS.includes(value)) {
      setAcc(parseFloat(display));
      setOperator(value);
      setWaitingForOperand(true);
      return;
    }

    if (value === "=") {
      if (!operator) return;
      let result = acc;
      const next = parseFloat(display);
      switch (operator) {
        case "+": result = acc + next; break;
        case "-": result = acc - next; break;
        case "*": result = acc * next; break;
        case "/": result = next !== 0 ? acc / next : NaN; break;
      }
      setDisplay(isNaN(result) ? "Error" : result.toString());
      setOperator(null);
      setAcc(0);
      setWaitingForOperand(true);
      return;
    }

    // Números e ponto
    if (waitingForOperand) {
      setDisplay(value === "." ? "0." : value);
      setWaitingForOperand(false);
    } else {
      if (value === "." && display.includes(".")) return;
      setDisplay(display === "0" && value !== "." ? value : display + value);
    }
  };

  const displayFontSize = getDisplayFontSize(display);

  return (
    <Window
      width={380}
height={530}
top={200}
left={200}
      windowBarIcon="calculatorIcon"
      windowTitle="Calculator"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText="© Copyright 2025 Pedro Oliveira"
    >
      <style>
        {`
        .win95-calc-outer {
          width: 100%;
          height: 100%;
          min-width: 260px;
          min-height: 380px;
          background: #dfdfdf;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
        }
        .win95-calc-inner {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: stretch;
          align-items: stretch;
          height: 100%;
          width: 100%;
          padding: 16px 16px 10px 16px;
        }
        .win95-calc-display {
          background: #222;
          color: #7bf76a;
          border: 2px inset #aaa;
          border-radius: 2px;
          padding: 14px 8px 10px 8px;
          margin-bottom: 22px;
          text-align: right;
          letter-spacing: 2px;
          min-height: 36px;
          max-height: 65px;
          width: 90%;
          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          box-sizing: border-box;
          display: flex;
          align-items: flex-end;
          font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
        }
        .win95-calc-buttons {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(5, 1fr);
          gap: 7px;
          width: 90%;
          height: 100%;
        }
        .win95-calc-btn {
          width: 100%;
          height: 100%;
          font-size: clamp(14px, 1.2vw, 22px);
          border: 2px outset #fff;
          background: #e0e0e0;
          color: #222;
          font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
          border-radius: 2px;
          cursor: pointer;
          outline: none;
          transition: background 0.1s;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }
        .win95-calc-btn:active {
          border: 2px inset #888;
          background: #cfcfcf;
        }
        .win95-calc-btn:last-child {
          color: #1976d2;
          font-weight: bold;
        }
        .win95-calc-btn.equal {
          background: #b3e5fc;
          color: #000;
        }
        .win95-calc-btn.op {
          background: #e3e7f7;
          color: #1976d2;
          font-weight: bold;
        }
        .win95-calc-btn.clear {
          color: #c62828;
        }
        `}
      </style>
      <div className="win95-calc-outer">
        <div className="win95-calc-inner">
          <div
            className="win95-calc-display"
            data-testid="display"
            title={display}
            style={{ fontSize: displayFontSize }}
          >
            {display}
          </div>
          <div className="win95-calc-buttons">
            {BUTTONS.flat().map((btn, i) => (
              <button
                key={btn + i}
                className={
                  "win95-calc-btn" +
                  (btn === "=" ? " equal" : "") +
                  (OPERATORS.includes(btn) ? " op" : "") +
                  (btn === "C" || btn === "CE" ? " clear" : "")
                }
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
};

export default CalculatorApp;