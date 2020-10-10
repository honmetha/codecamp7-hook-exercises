import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading-text">React Hooks Exercises</h1>
      <div
        className="content-list-container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/exercise-1">Exercise #1 - Counter (Refactor)</Link>
        <Link to="/exercise-2">Exercise #2 - Color Wheel (Refactor)</Link>
        <Link to="/exercise-3">Exercise #3 - Clock (Refactor)</Link>
        <Link to="/exercise-4">Exercise #4 - Monster Table (Refactor)</Link>
        <Link to="/exercise-5">Exercise #5 - SignupForm (Refactor)</Link>
        <Link to="/exercise-6">Exercise #6 - ContactForm (Custom Hooks)</Link>
        <Link to="/exercise-7">Exercise #7 - Posts App (Context API)</Link>
        <Link to="/exercise-8">
          Exercise #8 - Posts App Theme (Context API)
        </Link>
        <Link to="/exercise-9">Exercise #9 - Posts App (useReducer)</Link>
        <Link to="/exercise-10">Exercise #10 - Posts App (useReducer)</Link>
      </div>
    </div>
  );
}

export default Home;
