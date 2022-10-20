import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../Register/textField';
import * as Yup from 'yup';




  const validate = Yup.object({
  
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'password must be at least 6 charaters')
      .max(50, 'Must be 15 characters or less')
      .required('Password is required'),
   
  });
  export const Login = () => (

  <div>
    
    <Formik
      initialValues={{email: '', password: '' }}
      
      validationSchema = {validate}
      onSubmit ={values => {
        console.log(values)
      }}
     
      >
    
        {Formik => (
            <div className='container-fluid row'>
              <div className='col-6'>
                <h1 className='my-4 font-weight-bold-display-4 txt'>Welcome back</h1>
                {console.log(Formik)}
                <Form>
                   
                    <TextField label="Email" name="email" type="email"/>
                    <TextField label="Password" name="password" type="password"/>
                   
                    <button className="btn btn-dark mt-3 btns" type="submit">Login</button>
                    

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

export default Login;