import { useState } from 'react';

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
    setFormData({ fname: '', lname: '', email: '', phone: '' });
    alert('Form submitted successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl space-y-6 border bg-white p-8"
    >
      <div className="flex flex-col justify-between">
        <label
          htmlFor="fname"
          className="mb-5 text-xl font-medium text-neutral-700"
        >
          First Name
        </label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First name"
          className="border px-4 py-2 "
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="lname"
          className="mb-5 text-xl font-medium text-neutral-700"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last name"
          className=" border px-4 py-2 "
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-5 text-xl font-medium text-neutral-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-4 py-2 "
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="mb-5 text-xl font-medium text-neutral-700"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className=" border px-4 py-2 "
          required
        />
      </div>
      <div>
        <input
          type="submit"
          value="Submit"
          className="w-full  bg-black px-4 py-2 font-medium text-white hover:bg-black hover:opacity-70 focus:outline-none focus:ring-opacity-50"
        />
      </div>
    </form>
  );
}
