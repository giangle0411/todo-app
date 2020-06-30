import React from "react";

const AddNewTask = (props) => {
  return (
    <form onSubmit={props.addTask}>
      <div>
        <div>
          <label className="text-white">Add a new task</label>
          <input
            type="text"
            name="task"
            value={props.task}
            onChange={props.handleInputChange}
          />
        </div>

        <button> Add Task </button>
      </div>
    </form>
  );
};

export default AddNewTask;
