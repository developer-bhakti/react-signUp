// import React from 'react'

import { useState } from "react";
import Card from "./Components/Card";


const App = () => {
  const [task, setTask] = useState([]);
  
  //single task state 
  const [singleTask, setSingleTask] = useState("");

  // ye funtion task ko add karta hai
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(singleTask);

    const newTask = {
      id: task.length + 1,
      task: singleTask,
    };

    setTask([...task, newTask]);
    setSingleTask("");
  };
  
  // ye remove karega to
  const doneTask = (id) => {
    setTask(task.filter((t) => t.id !== id));
  };


  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            className="border-2 py-2 px-2 mr-4"
            type="text"
            placeholder="Enter Your Task "
            value={singleTask}
            onChange={(e) => setSingleTask(e.target.value)}
          />
          <button className="border-2 py-2 px-6 hover:bg-black hover:text-white">
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {task.map((data) => {
          return (
            <Card
              key={data.id}
              doneTask={doneTask}
              id={data.id}
              task={data.task}
            />
          );
        })}
      </div>
      {/* <Form /> */}
    </div>
  );
};

export default App;
