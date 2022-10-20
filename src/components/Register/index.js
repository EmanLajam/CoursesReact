import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textField';
import * as Yup from 'yup';
import './Register.css'



  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Must be 15 characters or less~1S')
      .required('Required!'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'password must be at least 6 charaters')
      .max(50, 'Must be 15 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must match').required('Confirm password is required'),
  
  });
  export const Register = () => (

  <div>
    
    <Formik
      initialValues={{firstName:'',lastName:'', email: '', password: '', confirmPassword: '' }}
      
      validationSchema = {validate}
      onSubmit ={values => {
        console.log(values)
      }}
     
      >
    
        {Formik => (
            <div className='container-fluid row'>
              <div className='col-6'>
                <h1 className='my-4 font-weight-bold-display-4 txt'>Register</h1>
                {console.log(Formik)}
                <Form>
                    <TextField label="First Name" name="firstName" type="text"/>
                    <TextField label="Last Name" name="lastName" type="text"/>
                    <TextField label="Email" name="email" type="email"/>
                    <TextField label="Password" name="password" type="password"/>
                    <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                    <button className="btn btn-dark mt-3 btns" type="submit">Register</button>
                    <button className="btn btn-danager mt-3 ml-3" type="rest">Rest</button>

                </Form>
                </div>
                <div className='col-6 image'>
                  <img className="imm" src={'./img/background.png'} width="550" height="550"/>
                </div>
            </div>
          
        )}
    </Formik>
  </div>
)

export default Register;