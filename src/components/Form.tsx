import { useState } from 'react';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
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
    setFormData({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: '',
    });
    alert('Form submitted successfully!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="font-body max-w-xl space-y-5 bg-white "
    >
      <div className="flex flex-col justify-between space-y-1 pb-2 lg:grid lg:w-full lg:grid-cols-4 lg:space-y-0 lg:pb-0">
        <div className="flex flex-col lg:col-span-1">
          <label
            htmlFor="fname"
            className="mb-2 text-xl font-medium text-neutral-700 lg:mb-5"
          >
            First Name
          </label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First name"
            className="border border-2 border-black px-4 py-2 lg:px-2"
            required
          />
        </div>
        <div className="flex flex-col lg:col-span-2 lg:col-start-3">
          <label
            htmlFor="lname"
            className="mb-2 text-xl font-medium text-neutral-700 lg:mb-5"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last name"
            className=" border border-2 border-black px-4 py-2 lg:px-2 "
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-2 text-xl font-medium text-neutral-700 lg:mb-5"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-2 border-black px-4 py-2 "
          required
        />
      </div>
      <div className="flex flex-col pb-2 lg:pb-0">
        <label
          htmlFor="phone"
          className="mb-2 text-xl font-medium text-neutral-700 lg:mb-5"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className=" border border-2 border-black px-4 py-2 "
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="mb-2 text-xl font-medium text-neutral-700 lg:mb-5"
        >
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Include any relevant notes"
          className=" border border-2 border-black px-4 py-2 "
          rows={4}
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
