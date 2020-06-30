import React from "react";
import TaskList from "./TaskList";

const AppBody = (props) => {
  return (
    <div>
      <TaskList todos={props.todos} />
    </div>
  );
};

export default AppBody;
