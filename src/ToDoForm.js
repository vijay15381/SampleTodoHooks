import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <Form inline onSubmit={handleSubmit} className="to-do-form">
      <Form.Control
        type="text"
        placeholder="To do item..."
        onChange={handleChange}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ToDoForm;
