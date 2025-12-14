import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            }
          );

          const data = await response.json();
          alert("User registered successfully! " + JSON.stringify(data));
          resetForm();
        } catch (err) {
          console.error(err);
          alert("Registration failed.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Formik Registration Form</h2>

          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
