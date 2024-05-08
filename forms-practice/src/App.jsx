import React, { useState } from "react";
import './App.css';

function App() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    option1: false,
    option2: false,
    option3: false
  });

  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <p>CheckBoxes:</p>
        <div>
          <label>
            Option 1:
            <input
              type="checkbox"
              name="option1"
              checked={formData.option1}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Option 2:
            <input
              type="checkbox"
              name="option2"
              checked={formData.option2}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Option 3:
            <input
              type="checkbox"
              name="option3"
              checked={formData.option3}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
