import React, { useState } from 'react';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First name"
        />
      </div>
      <div>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last name"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
