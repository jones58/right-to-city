export default function Home() {
  return (
    <div>
      <div className="grid h-screen grid-rows-4 " id="home">
        <div className="row-span-3 lg:grid lg:grid-cols-5">
          <div className="relative z-20 mt-20 p-10 pt-20 text-5xl font-bold text-white lg:col-span-3 lg:p-20 lg:text-7xl">
            <h1>
              Our Right to the City: <br /> A Festival of Urban Liberation
            </h1>
            <a
              href="#getInvolved"
              className="relative z-20 mt-20 pt-20 text-3xl font-normal  hover:opacity-70 active:opacity-100 lg:col-span-2 lg:text-6xl"
            >
              Get Involved
            </a>
          </div>
        </div>
        <div className="z-20 row-span-1 flex flex-col justify-start bg-black p-10 text-right text-4xl text-white lg:row-span-2 lg:flex-row lg:justify-end lg:space-x-10 lg:space-y-0 lg:p-20 lg:text-4xl">
          <a
            href="#about"
            className="hover:opacity-70 active:opacity-100"
          >
            About
          </a>
          <a
            href="#whatsOn"
            className="hover:opacity-70 active:opacity-100"
          >
            What's On
          </a>
          <a
            href="#location"
            className="hover:opacity-70 active:opacity-100"
          >
            Location
          </a>
        </div>
        <div className="absolute inset-0 z-0 h-screen bg-[url('images/city-bg.jpg')] bg-cover bg-center brightness-50"></div>
      </div>
    </div>
  );
}
