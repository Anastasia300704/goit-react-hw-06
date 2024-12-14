import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';  // Імпорт Yup для валідації

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must not exceed 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(7, 'Phone number must be at least 7 characters')
      .max(15, 'Phone number must not exceed 15 characters')
      .required('Phone number is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);  // Логіка додавання контакту
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Enter contact name"
        />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Phone number</label>
        <Field
          type="text"
          id="number"
          name="number"
          placeholder="Enter phone number"
        />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;