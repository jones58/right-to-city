export default function Home() {
  return (
    <div
      id="home"
      className="relative grid h-screen grid-rows-5 lg:grid-rows-4"
    >
      <div className="row-span-3 lg:row-span-4 lg:grid lg:grid-cols-5">
        <div className="relative z-20 mt-20 p-10 pt-20 text-5xl font-bold text-white lg:col-span-3 lg:p-20 lg:pt-40 lg:text-7xl">
          <h1>
            Our Right to the City: <br /> Festival of Urban Liberation
          </h1>
        </div>
      </div>
      <nav className="z-20 row-span-2 flex flex-col justify-start bg-black p-10 lg:row-span-1 lg:grid lg:grid-cols-5 lg:items-center lg:p-20">
        <div className="pb-10 text-3xl text-white lg:col-span-3 lg:pb-0 lg:text-4xl">
          <a href="#getInvolved" className="hover:opacity-70">
            Get Involved
          </a>
        </div>
        <div className="flex flex-col justify-start space-y-5 text-right text-3xl text-white lg:col-span-2 lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0 lg:text-left lg:text-4xl">
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#whatsOn" className="hover:opacity-70">
            What's On
          </a>
          <a href="#location" className="hover:opacity-70">
            Location
          </a>
        </div>
      </nav>
      <div className="absolute inset-0 z-0 h-screen bg-[url('/images/city-bg.jpg')] bg-cover bg-center brightness-50"></div>
    </div>
  );
}
