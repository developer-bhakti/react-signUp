// import React from 'react'

import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  // const doneTask = "Done";

  // const [task, setTask] = useState([]);
  // const [singleTask, setSingleTask] = useState("");
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(singleTask);

  //   const newTask = {
  //     id: task.length + 1,
  //     task: singleTask,
  //   };

  //   setTask([...task, newTask]);
  //   setSingleTask("");
  // };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      {/* <div>


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
          return <Card key={data.id} doneTask={doneTask} task={data.task} />;
        })}
      </div> */}
      <Form />
    </div>
  );
};

export default App;
