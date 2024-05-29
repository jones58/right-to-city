import { useState, ChangeEvent, FormEvent } from 'react';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      className=" bg-white-custom space-y-6 rounded-lg p-8 shadow-lg font-body"
    >
      <h1 className="pb-5 text-4xl lg:text-5xl">
        <div className="bg-red-custom mr-1 inline-block h-7 w-7 rounded-full lg:mr-2 lg:h-10 lg:w-10"></div>
        Sign Up
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First Name"
          className="focus:ring-green-custom rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2"
          required
        />
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last Name"
          className="focus:ring-green-custom rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="focus:ring-green-custom w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="focus:ring-green-custom w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="focus:ring-green-custom w-full resize-none rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="text-white-custom bg-red-custom focus:ring-green-custom hover:bg-green-custom w-full rounded-md px-4 py-3 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
