import Form from './Form';

export default function SignUp() {
  return (
    <div
      className="min-h-screen bg-white p-5 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="signUp"
    >
      <div className="lg:col-span-3 lg:pr-20 lg:text-2xl">
        <h1 className="pb-5 text-4xl">Sign Up</h1>
        <Form />
      </div>
      <div className="pt-10 lg:col-span-2 lg:pt-0">
        <img src="/images/city-bg.jpg" className="" />
      </div>
    </div>
  );
}
