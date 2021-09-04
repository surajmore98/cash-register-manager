import './App.css';
import React, { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [cash, setCash] = useState(0);
  let noteList = [2000, 500, 100, 20, 10, 5, 1];

  const [result, setResult] = useState([]);

  const returnChange = (event) => {
    event.preventDefault();
    if (amount > cash) {
      alert("please given cash is lesser than bill amount");
      return;
    }
    let result = [];
    let givenAmt = Math.abs(amount - cash);

    noteList.forEach((item, index) => {
      let quantity = Math.floor(givenAmt / item);
      givenAmt = givenAmt - quantity * item;
      result.push(quantity);
    });
    setResult(result);
  };

  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      <h3>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </h3>
      <form onSubmit={returnChange}>
        <div>
          <h2>Bill Amount:</h2>
          <input
            type="number"
            min="0"
            onChange={(event) => setAmount(parseInt(event.target.value))}
          />
        </div>
        <div>
          <h2>Cash Given:</h2>
          <input
            type="number"
            min="0"
            onChange={(event) => setCash(parseInt(event.target.value))}
          />
        </div>
        <div className="btn">
          <button className="link primary-link" type="submit">
            Check
          </button>
        </div>
      </form>
      <div>
        <div>
          <h2>Return Change</h2>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th className="table-cell">No of Notes</th>
                {noteList.map((item, index) => {
                  return (
                    <td className="table-cell" key={index}>
                      {result[index]}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <th className="table-cell">Note</th>
                {noteList.map((item, index) => {
                  return (
                    <td className="table-cell" key={index}>
                      {item}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
