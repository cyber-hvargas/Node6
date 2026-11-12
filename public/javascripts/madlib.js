import React from 'react';
import { createRoot } from 'react-dom/client';

const FormComponent = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    restaurant: '',
    food: '',
    condiment: '',
    vegetable: '',
    goodLuck: '',
    sideDish: '',
    badLuck: '',
    likeFruit: '',
    dislikeFruit: '',
    likeDrink: '',
    dislikeDrink: '',
    dessert: ''
  });

  const [message, setSubmit] = React.useState(false); // initialize it as an empty object

  // When you click submit button, sendStuff runs
  // Send formData to the server using fetch('/form').

    const handleChange = ({ target: { name, value } }) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));

      setSubmit(false);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmit(true);
    };

    const handleReset = () => {
      setFormData({
            name: '',
            restaurant: '',
            food: '',
            condiment: '',
            vegetable: '',
            goodLuck: '',
            sideDish: '',
            badLuck: '',
            likeFruit: '',
            dislikeFruit: '',
            likeDrink: '',
            dislikeDrink: '',
            dessert: ''
          });

      setSubmit(false)
    };

    return (
      <div>
        <h1>A Visit to My Favorite Restaurant</h1>
        <h3>Input your word choice:</h3>

        <form onSubmit={handleSubmit} onReset={handleReset}>

        <div className='form-row'>
          <label>Type your name:</label>
          <input type='text' name='name'
            value={formData.name} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type your favorite restaurant:</label>
          <input type='text' name='restaurant'
            value={formData.restaurant} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type your favorite food to eat:</label>
          <input type='text' name='food'
            value={formData.food} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a condiment:</label>
          <input type='text' name='condiment'
            value={formData.condiment} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a vegetable:</label>
          <input type='text' name='vegetable'
            value={formData.vegetable} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a number of good luck:</label>
          <input type='text' name='goodLuck'
            value={formData.goodLuck} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a side-dish:</label>
          <input type='text' name='sideDish'
            value={formData.sideDish} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a number of bad luck:</label>
          <input type='text' name='badLuck'
            value={formData.badLuck} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a fruit you like:</label>
          <input type='text' name='likeFruit'
            value={formData.likeFruit} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a fruit you dislike:</label>
          <input type='text' name='dislikeFruit'
            value={formData.dislikeFruit} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a drink you like:</label>
          <input type='text' name='likeDrink'
            value={formData.likeDrink} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a drink you dislike:</label>
          <input type='text' name='dislikeDrink'
            value={formData.dislikeDrink} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Type a dessert you like:</label>
          <input type='text' name='dessert'
            value={formData.dessert} onChange={handleChange} required />
        </div>

          <button type={'submit'}>Submit</button>
          <button type={'reset'}>Reset</button>

        </form>
        {message && (
            <div>
              <p>
                Hello {formData.name}, welcome to the {formData.restaurant} joint, what can I get you?” the waitress asked.
                {formData.name} took a deep breath. “Hello, we need seventeen {formData.food}, three with no {formData.condiment},
                three with {formData.condiment} and no {formData.vegetable}, five plain, and the rest regular. {formData.goodLuck}
                large {formData.sideDish}, {formData.badLuck} small {formData.sideDish}, four {formData.likeFruit} shakes,
                three {formData.dislikeFruit} shakes, two {formData.dislikeDrink}, five {formData.likeDrink}.
                Also a sugar {formData.dessert}. Did you get all that, hon?”
                You waitress said: "Unfortunately, no, I did not."
              </p>
            </div>
        )}

      </div>
    );
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


const form = createRoot(document.getElementById('root'));
form.render(<FormComponent />);