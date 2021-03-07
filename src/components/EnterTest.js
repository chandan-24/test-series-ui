import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { PATHS } from '../constants';
import { setActivePath } from '../globalStore/actions/handleUiState';

const TextInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  return (
    <div className="mx-auto w-4/5 h-24 pt-10">
      <input
        className="w-full px-4 py-2 ml-auto mr-auto  border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

class EnterTest extends Component {
  render() {
    return (
      <div className="absolute top-16 w-full avail-height bg-gray-100">
        <div className="mx-auto mt-24 w-96 h-80 bg-white rounded-lg shadow-">
          <Formik
            initialValues = {{
              testId: '',
              testPin: '',
            }}
            validationSchema = { Yup.object({
              testId: Yup.string().required('Required'),
              testPin: Yup.string().required('Required'),
            })}
            onSubmit = {(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values))
                setSubmitting(false);
                const nextPath = `${PATHS.START_TEST}/${values.testId}`;
                this.props.setActivePath(nextPath);
                this.props.history.push(nextPath)
              }, 1000);
            }}
          >
            { formik => {
              console.log(formik)
                return <Form>
                  <TextInput
                    name="testId"
                    type="text"
                    placeholder="Enter Test ID"
                  />
                  <TextInput
                    name="testPin"
                    type="text"
                    placeholder="Enter Pin"
                  />
                  <div className="w-36 mx-auto pt-10">
                    <button className="w-full text-2xl bg-green-400 text-white px-4 py-1.5 rounded-md hover:bg-green-500 cursor-pointer ease-in-out duration-400" type="submit" disabled={!formik.isValid || formik.isSubmitting}>Sart Now</button>
                  </div>
                </Form>
              }
            }
          </Formik>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { setActivePath }

export default connect(null, mapDispatchToProps)(EnterTest);
