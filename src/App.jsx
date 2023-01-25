// import "./App.css";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { Profile } from "./components/Profile";

export function App() {
  // const users = [
  //   {
  //     name: "Tsunode",
  //     age: 24,
  //   },
  //   {
  //     name: "Nicole",
  //     age: 27,
  //   },
  //   {
  //     name: "Alysson",
  //     age: 21,
  //   },
  //   {
  //     name: "Alex",
  //     age: 32,
  //   },
  // ];

  const [users, setUsers] = useState([]);

  return (
    <main>
      <Counter />
      {users.map((user, index) => (
        <Profile key={index} name={user.name} age={user.age} />
      ))}
    </main>
  );
}

// class => className
// <input > => <input />
// html => htmlFor
// não pode retornar varios elementos
