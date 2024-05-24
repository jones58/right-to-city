import Animation from '../Animation';

export default function Home() {
  return (
    <Animation>
      <div className="grid min-h-screen grid-rows-4">
        <h1 className="row-span-3 p-10 text-4xl lg:p-20 lg:text-8xl">
          Our Right to the City: <br /> A Festival of Urban Liberation
        </h1>
        <div className="row-span-1 flex flex-col justify-between bg-black text-white lg:flex-row">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
        <div className="row-span-2 px-10"></div>
      </div>
    </Animation>
  );
}
