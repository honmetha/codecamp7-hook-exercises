import React, { useState } from "react";
import "./index.css";

function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [complain, setComplain] = useState("");
  const [ratings, setRatings] = useState("");

  function handleFirstnameChange(e) {
    setFirstname(e.target.value);
  }

  function handleLastnameChange(e) {
    setLastname(e.target.value);
  }

  function handleComplainChange(e) {
    setComplain(e.target.value);
  }

  function handleRatingChange(e) {
    setRatings(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      JSON.stringify({
        firstname,
        lastname,
        ratings,
        complain,
      })
    );
    resetForm();
  }

  function resetForm() {
    setFirstname("");
    setLastname("");
    setRatings("");
    setComplain("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="field-container">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          name="firstname"
          type="text"
          value={firstname}
          onChange={handleFirstnameChange}
        />
      </div>
      <div className="field-container">
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          name="lastname"
          type="text"
          value={lastname}
          onChange={handleLastnameChange}
        />
      </div>
      <div className="field-container">
        <label htmlFor="complain">Complain</label>
        <textarea
          id="complain"
          name="complain"
          type="text"
          rows={5}
          value={complain}
          onChange={handleComplainChange}
        />
      </div>

      <div className="field-container">
        <label htmlFor="ratings">Ratings</label>
        <select
          name="ratings"
          id="ratings"
          value={ratings}
          onChange={handleRatingChange}
        >
          <option value="">Select Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
      </div>

      <button className="button button-submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
