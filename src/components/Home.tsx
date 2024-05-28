export default function Home() {
  return (
    <div
      id="home"
      className="relative grid h-screen grid-rows-5 lg:grid-rows-4"
    >
      <div className=" row-span-3 lg:row-span-4 lg:grid lg:grid-cols-5">
        <div className="relative z-20 mt-20 p-10 pt-20 text-5xl font-bold uppercase text-white lg:col-span-3 lg:p-20 lg:pt-40 lg:text-7xl">
          <h1>
            Our Right to the City: <br /> Festival of Urban Liberation
          </h1>
        </div>
      </div>
      <nav className="z-20 row-span-2 flex flex-col justify-start bg-black p-10 lg:row-span-1 lg:grid lg:grid-cols-5 lg:items-center lg:p-20">
        <a
          className="z-20 flex h-24 w-24 flex-col justify-center rounded-full bg-red-500 hover:opacity-70 lg:col-span-3 lg:h-40 lg:w-40"
          href="#CallToAction"
        >
          <h1 className="text-center text-xl uppercase text-white lg:text-2xl">
            Find
            <br />
            out
            <br />
            more
          </h1>
        </a>
        <div className="flex flex-col justify-start space-y-5 text-right text-3xl text-white lg:col-span-2 lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0 lg:text-left lg:text-4xl">
          <a href="#whatsOn" className="hover:opacity-70">
            What's On
          </a>
          <a href="#location" className="hover:opacity-70">
            Getting Here
          </a>
          <a href="#signUp" className="hover:opacity-70">
            Sign Up
          </a>
        </div>
      </nav>
      <div className="absolute inset-0 z-0 h-screen bg-[url('/images/city-bg.jpg')] bg-cover bg-center brightness-50"></div>
    </div>
  );
}
