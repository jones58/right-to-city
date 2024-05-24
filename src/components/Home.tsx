export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-4">
      <h1 className="row-span-2 p-10 text-4xl lg:row-span-3 lg:p-20 lg:text-8xl">
        Our Right to the City: <br /> A Festival of Urban Liberation
      </h1>
      <div className="row-span-1 flex flex-col justify-end space-y-5 bg-black p-10 text-3xl text-white lg:row-span-1 lg:flex-row lg:space-x-10 lg:space-y-0 lg:px-20 lg:text-4xl">
        <a href="#location">About</a>
        <h1>What's On</h1>
        <h1>Location </h1>
        <h1> Get Involved </h1>
      </div>
      <div className="row-span-2 px-10"></div>
    </div>
  );
}
