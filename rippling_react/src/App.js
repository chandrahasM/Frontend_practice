import React, { useState } from 'react';

// Define the formElements data structure
const formElements = [
  {
    type: 'text',
    label: 'Full Name',
    name: 'fullName',
    placeholder: 'Enter your full name',
    required: true,
  },
  {
    type: 'number',
    label: 'Age',
    name: 'age',
    placeholder: 'Enter your age',
    min: 0,
    max: 120,
    required: false,
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    options: [
      { value: '', label: 'Select a country' },
      { value: 'usa', label: 'United States' },
      { value: 'canada', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
    ],
    required: true,
  },
];

// UserComponent implementation
const UserComponent = ({ formElements, onSubmit }) => {
  const [formData, setFormData] = useState(
    formElements.reduce((acc, element) => {
      acc[element.name] = '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const missingFields = formElements
      .filter((element) => element.required && !formData[element.name])
      .map((element) => element.label);
    
    if (missingFields.length > 0) {
      alert(`Please fill out the following required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    onSubmit(formData);
  };

  const renderFormElement = (element) => {
    switch (element.type) {
      case 'text':
      case 'number':
        return (
          <div key={element.name} style={{ marginBottom: '1rem' }}>
            <label htmlFor={element.name}>{element.label}{element.required && ' *'}</label>
            <input
              type={element.type}
              id={element.name}
              name={element.name}
              value={formData[element.name]}
              onChange={handleChange}
              placeholder={element.placeholder}
              min={element.min}
              max={element.max}
              required={element.required}
              style={{ display: 'block', width: '100%', padding: '0.5rem' }}
            />
          </div>
        );
      case 'select':
        return (
          <div key={element.name} style={{ marginBottom: '1rem' }}>
            <label htmlFor={element.name}>{element.label}{element.required && ' *'}</label>
            <select
              id={element.name}
              name={element.name}
              value={formData[element.name]}
              onChange={handleChange}
              required={element.required}
              style={{ display: 'block', width: '100%', padding: '0.5rem' }}
            >
              {element.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {formElements.map((element) => renderFormElement(element))}
        <button type="submit" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

// App component
const App = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    alert('Form submitted! Check the console for details.');
  };

  return (
    <div>
      <UserComponent formElements={formElements} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;