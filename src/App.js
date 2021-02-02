import { useState } from "react";
function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  var num = 620610805;

  function add1() {
    num++;
    console.log(num);
  }
  function delete1() {
    num--;
    console.log(num);
  }
  function reset() {
    num = 620610805;
    console.log(num);
  }
  const myID = 620610805;
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{myID}</p>
        <button onclick="add1()">-</button>
        <button onclick="reset()">reset</button>
        <button onclick="delete1()">+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
