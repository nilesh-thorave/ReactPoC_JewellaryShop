import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { connect } from "react-redux";

import { submitFeedback } from "../../store/actions/feedbackAction";

import "./contact.css";

const submittedForm = () => {
  return <p>Thanks for your feedback.</p>;
};

const Contact = (props) => {
  const initialValues = { fname: "", email: "", phone: "", comment: "" };
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Leave us a message:</p>
      </div>
      <div className="row justify-content-center">
        <div className="column">
          <Formik
            initialValues={initialValues}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Email address is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.fname) {
                errors.fname = "Name is Required";
              }

              if (!values.comment) {
                errors.comment = "Message is Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              props.submitFeedback(values);
              setSubmitting(true);
              /* feedback.submitFeedback(values)
          .then((response)=>{
              alert('Thank you for your feedback.');
              setSubmitting(false);
              resetForm();
          }, (error =>{
            alert('error: ' + JSON.stringify(error, null, 2));
              setSubmitting(false);
          })) */
            }}
          >
            {({ isSubmitting, setSubmitting, resetForm }) => (
              <Form>
                <Field type="text" name="fname">
                  {({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="form-control"
                      placeholder="Your name.."
                    />
                  )}
                </Field>
                <ErrorMessage name="fname" component="div">
                  {msg => (
                    <div className="field-error">
                      <span className="text-danger">{msg}</span>
                    </div>
                  )}
                </ErrorMessage>
                <Field type="email" name="email">
                  {({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="form-control"
                      placeholder="Your Email Address.."
                    />
                  )}
                </Field>
                <ErrorMessage name="email" component="div">
                  {msg => (
                    <div className="field-error">
                      <span className="text-danger">{msg}</span>
                    </div>
                  )}
                </ErrorMessage>
                <Field type="text" name="phone">
                  {({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="form-control"
                      placeholder="Your phone number.."
                    />
                  )}
                </Field>
                <ErrorMessage name="phone" component="div" />
                <Field type="textarea" name="comment">
                  {({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Write something.."
                      className="form-control"
                      style={{ height: "170px" }}
                    />
                  )}
                </Field>
                <ErrorMessage name="comment" component="div">
                  {msg => (
                    <div className="field-error">
                      <span className="text-danger">{msg}</span>
                    </div>
                  )}
                </ErrorMessage>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <div className="text-success center">
                  {props.feedback.submitted ? submittedForm() : null}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    submitFeedback: feedback => dispatch(submitFeedback(feedback))
  };
};

const mapStateToProps = state => {
  return {
    feedback: state.feedback
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
