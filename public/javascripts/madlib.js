import React from 'react';
import { createRoot } from 'react-dom/client';

const FormComponent = () => {
  //const [formData, setFormData] = React.useState({ first: 'Tim', last: 'Berners-Lee' });
  const [formData, setFormData] = React.useState({ first: '', last: '' });
  const [message, setMessage] = React.useState({}); // initialize it as an empty object

  // When you click submit button, sendStuff runs
  // Send formData to the server using fetch('/form').
  const sendStuff = async (event) => {
    event.preventDefault(); // prevent form default event which refreshes the page
    try {
      const response = await fetch('/form', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=UTF-8',},
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setMessage(await response.json());  // assuming response is JSON
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  /* As you type handleChange runs immediately
    React grabs your keystroke, updates the formData state object, and 
    re-renders the component so the letters show up in the box.
    value is tied to formData.first and formData.last
  */
  // de-structure the event object directly in the function parameters
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Alternative way (longer version)
  /*
  const handleChange = (event) => {
    const name = event.target.name; // "name" is from HTML input tag attribute to identify first or last
    const value = event.target.value;
    setFormData((prev) => {
      const updatedFormData = { ...prev };  // Spread the previous state
      updatedFormData[name] = value;   // Update the property corresponding to the provided name with the new value
      return updatedFormData; // Return the updated state
    });
  };*/

  /* Note that.....
  In React, state objects should be treated as immutable (you shouldn't modify the existing state directly). 
  Also, when you call setFormData, React does not merge your new changes with the old state automatically
  it completely replaces the old state object with whatever new object you provide.

  Spreading previous state means taking all the existing key-value pairs inside an object and 
  copying them over into a brand-new object using JavaScript's Spread Operator (...)
  This is same as python's spread operator 
  Python uses an asterisk (*) for lists and tuples, and a double asterisk (**) for dictionaries
  Kotlin has a spread operator same as python (*), more restritive though
  */

  return (
    <div>
      <form method="post" onSubmit={sendStuff}>
        <label> Enter your first name </label><br />
        <input type="text" name="first" placeholder="Enter your first name"
                            value={formData.first} onChange={handleChange} /><br />
        <label> Enter your last name</label> <br />
        <input type="text" name="last" placeholder="Enter your last name" 
                            value={formData.last} onChange={handleChange} /><br /><br />
        <input type="submit" value="Post something"></input>
      </form>
      {message && (
        <>
        <p>{message.first}</p>
        <p>{message.last}</p>
        </>
      )}
    </div>
  );
};

const form = createRoot(document.getElementById('form'));
form.render(<FormComponent />);