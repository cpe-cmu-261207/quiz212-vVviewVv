import { useState } from "react";
import { CourseCard } from "./component/view";
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
    },
    {
      name: "lakkhanan issara 620610805",
      gender: "female",
      age: "19"
    }
  ];
  const [num, setnum] = useState(620610805);

  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{num}</p>
        <button
          onClick={() => {
            setnum(num - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setnum(620610805);
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            setnum(num + 1);
          }}
        >
          +
        </button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      {persons.map((item) => {
        return (
          <CourseCard name={item.name} gender={item.gender} age={item.age} />
        );
      })}
    </div>
  );
}

export default App;
