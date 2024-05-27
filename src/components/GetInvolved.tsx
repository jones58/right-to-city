import Form from './Form';

export default function GetInvolved() {
  return (
    <div
      className="min-h-screen p-10 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="getInvolved"
    >
      <div className="prose lg:col-span-3 lg:pr-20 lg:text-2xl">
        <h1 className="text-3xl font-bold lg:text-4xl">Get Involved</h1>
        <Form />
      </div>
      <div className="col-span-2">photo here</div>
    </div>
  );
}
