import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <>
      <Button
        className="mt-4 mb-2"
        variant="primary"
        type="submit"
        onClick={handleFilter}
      >
        Clear Completed
      </Button>
      <ListGroup>
        {toDoList.map((todo) => {
          return (
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          );
        })}
      </ListGroup>
    </>
  );
};

export default ToDoList;
