import React from 'react';
import {ErrorMessage, Field, useField } from 'formik';
import './Register.css'

export const TextField = ({label,...props}) =>{
    const[field, meta] = useField(props);
return(
    <div className='mb-2 form'>
    <label  htmlFor={field.name}>{label} </label>
    <input 
    className={`form-control shadow-none forminput ${meta.touched && meta.error  && 'is-invalid'}`}
    {...field} {...props}
    autoComplete="off"/>

<ErrorMessage component="div" name={field.name} className="error"/>
    </div>
)

}