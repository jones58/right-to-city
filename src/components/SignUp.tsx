import Form from './Form';

export default function SignUp() {
  return (
    <div
      className="min-h-screen p-10 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="signUp"
    >
      <div className="prose lg:col-span-3 lg:pr-20 lg:text-2xl">
        <h1 className="text-3xl font-bold lg:text-4xl">Sign Up</h1>
        <Form />
      </div>
      <div className=" lg:col-span-2">
        <img src="/images/city-bg.jpg" className="" />
      </div>
    </div>
  );
}
