import React, { useState } from 'react';
//import SubmittedForm from './SubmittedForm';
//import {useForm} from 'react-hook-form'
const RegistrationForm = () => {
  //const [submitted,setSubmitted]=useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    passport: '',
    travelDate: '',
    returnDate: '',
    destination: '',
    reason: '',
    errors: {
      name: '',
      email: '',
      phone: '',
      passport: '',
      travelDate: '',
      returnDate: '',
      destination: '',
      reason: ''
    }
  });

  const validateForm = () => {
    let valid = true;
    let errors = {
      name: '',
      email: '',
      phone: '',
      passport: '',
      travelDate: '',
      returnDate: '',
      destination: '',
      reason: ''
    };
    if (formValues.name.trim() === '') {
      errors.name = 'Name is required';
      valid = false;
    }
    if (formValues.email.trim() === '') {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }
    if (formValues.phone.trim() === '') {
      errors.phone = 'Phone is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = 'Phone number is invalid';
      valid = false;
    }
    if (formValues.passport.trim() === '') {
      errors.passport = 'Passport is required';
      valid = false;
    }
    if (formValues.travelDate.trim() === '') {
      errors.travelDate = 'Travel date is required';
      valid = false;
    }
    if (formValues.returnDate.trim() === '') {
      errors.returnDate = 'Return date is required';
      valid = false;
    } else if (new Date(formValues.returnDate) < new Date(formValues.travelDate)) {
      errors.returnDate = 'Return date should be after travel date';
      valid = false;
    }
    if (formValues.destination.trim() === '') {
      errors.destination = 'Destination is required';
      valid = false;
    }
    if (formValues.reason.trim() === '') {
      errors.reason = 'Reason for travel is required';
      valid = false;
    }
    setFormValues({ ...formValues, errors });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if (validateForm()) {
      //setSubmitted(true);
      console.log('Form submitted', formValues);
         
      
         
           
            document.getElementById((e.target.name.value))

       

     
      // do something with formValues
     // document.write(e.target.name.value);
     
    //}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  {/*if(submitted)
  {
    return(
     
    <SubmittedForm form={[formValues.name,formValues.email,formValues.phone]}/>
    );
  }*/}

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} />
        {formValues.errors.name && <span>{formValues.errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} />
        {formValues.errors.email && <span>{formValues.errors.email}</span>}
      </div>
      <div>
      <label htmlFor="phone">Email:</label>
        <input type="text" id="phone" name="phone" value={formValues.phone} onChange={handleChange} />
        {formValues.errors.phone && <span>{formValues.errors.phone}</span>}
        </div>
        <div>
        <label htmlFor="passport">Passport:</label>
        <input type="text" id="passport" name="passport" value={formValues.passport} onChange={handleChange} />
        {formValues.errors.passport && <span>{formValues.errors.passport}</span>}
        </div>
        <div>
        <label htmlFor="travelDate">Travel Date:</label>
        <input type="date" id="travelDate" name="travelDate" value={formValues.travelDate} onChange={handleChange} />
        {formValues.errors.travelDate && <span>{formValues.errors.travelDate}</span>}
        </div>
        <div>
        <label htmlFor="returnDate">Return Date:</label>
        <input type="date" id="returnDate" name="returnDate" value={formValues.returnDate} onChange={handleChange} />
        {formValues.errors.returnDate && <span>{formValues.errors.returnDate}</span>}
      
        </div>
        <div>
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" name="destination" value={formValues.destination} onChange={handleChange} />
        {formValues.errors.destination && <span>{formValues.errors.destination}</span>}
        </div>
        <div>
        <label htmlFor="reason">Reason:</label>
        <input type="text" id="reason" name="reason" value={formValues.reason} onChange={handleChange} />
        {formValues.errors.reason && <span>{formValues.errors.reason}</span>}
       </div>
       <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
        </div>
        );
  }
        export default RegistrationForm