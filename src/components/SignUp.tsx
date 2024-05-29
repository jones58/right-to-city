import Form from './Form';

export default function SignUp() {
  return (
    <div
      className="bg-blue-custom min-h-screen p-5 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="signUp"
    >
      <div className="lg:col-span-3 lg:pr-20 lg:text-2xl">
        <Form />
      </div>
      <div className="pt-10 lg:col-span-2 lg:p-8 lg:pt-0">
        <img
          src="/images/city-bg.jpg"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
