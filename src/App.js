import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmail = (e) => {
    var regex = new RegExp('^[a-zA-Z0-9!@#$%^&*._-]+$');
    // var regex = new RegExp(/^[ A-Za-z0-9_@./#&+-]*$/);
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
      e.preventDefault();
      return false;
    }
  };

  console.log(email);
  return (
    <div>
      <h1>Hi hariharan</h1>
      <label htmlFor="emailid">Email address</label>
      <br />
      <input
        id="emailid"
        name="email"
        type="email"
        onChange={handleChange}
        onKeyPress={isEmail}
      />
    </div>
  );
}
