# Rippling React Assignment

## Problem Statement
Create a React application that dynamically generates a form based on a provided formElements data structure. The formElements should define a list of form fields, each with a specific type (e.g., text, number, select), label, name, and optional configurations (e.g., placeholder, required, options for select). Implement a UserComponent that:

- Accepts formElements and an onSubmit handler as props.
- Renders form elements dynamically based on the formElements structure.
- Maintains state for each form element’s value.
- Handles form submission by validating required fields and passing the form data to the onSubmit handler.
- Ensures the form is reusable and extensible for different field types.

The parent App component should pass a sample formElements array and an onSubmit handler to demonstrate the functionality. Use modern React practices and provide basic styling for usability.

## Skeleton in the question:

## Implementation
This project implements the dynamic form generator using React and Tailwind CSS.