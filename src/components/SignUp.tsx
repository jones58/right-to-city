import Form from './Form';

export default function SignUp() {
  return (
    <div
      className=" min-h-screen bg-blue-custom p-5 py-10 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="signUp"
    >
      <div className="lg:col-span-3 lg:mr-20 lg:text-2xl">
        <Form />
      </div>
      <div className="pt-10 lg:col-span-2 lg:p-8 lg:pt-0">
        <img
          src="/images/city-3.jpg"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
