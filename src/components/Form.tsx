import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  message: string;
}

export default function GetInvolved() {
  const [formData, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let hasErrors = false;
    const errorMessages: { [key: string]: string } = {};

    if (!validateEmail(formData.email)) {
      errorMessages.email = 'Please enter a valid email address.';
      hasErrors = true;
    }

    if (!validatePhone(formData.phone)) {
      errorMessages.phone = 'Please enter a valid phone number.';
      hasErrors = true;
    }

    if (hasErrors) {
      alert(Object.values(errorMessages).join(' '));
      return;
    }

    try {
      const response = await fetch(
        'https://api.airtable.com/v0/appJR1EiOHZwNV46t/tbl1lqA0QKonu7b8d',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  fname: formData.fname,
                  lname: formData.lname,
                  email: formData.email,
                  phone: formData.phone,
                  message: formData.message,
                },
              },
            ],
          }),
        },
      );

      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorDetails = await response.json();
        alert(
          errorDetails.error ||
            'An error occurred while submitting the form. Please try again.',
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(
        'An error occurred while submitting the form. Please try again.',
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg bg-white-custom p-8 text-black-custom shadow-lg font-body"
    >
      <h1 className="pb-5 text-4xl lg:text-5xl">
        <div className="mr-1 inline-block h-7 w-7 rounded-full bg-red-custom lg:mr-2 lg:h-10 lg:w-10"></div>
        Sign Up
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First Name"
          className="rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-custom"
          required
        />
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last Name"
          className="rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-custom"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-custom"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-custom"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-custom"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full rounded-md bg-red-custom px-4 py-3 font-medium text-white-custom shadow-md hover:bg-green-custom focus:outline-none focus:ring-2 focus:ring-green-custom focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
