// import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({ task, doneTask, id }) => {
  return (
    <div className="border-2 p-3 flex flex-col justify-center items-center">
      <h1 className="text-2xl">{task}</h1>
      <button
        onClick={() => doneTask(id)}
        className="border-2 py-3 px-4 mt-2.5 hover:bg-black hover:text-white"
      >
        Done Task
      </button>
    </div>
  );
};

export default Card;
