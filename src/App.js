import React, { useState } from "react";
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    if (!userInput) {
      return;
    }
    let copy = [...toDoList];
    copy = [
      { id: toDoList.length + 1, task: userInput, complete: false },
      ...copy
    ];
    setToDoList(copy);
  };

  return (
    <div className="m-4">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
