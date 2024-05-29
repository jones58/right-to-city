export default function Home() {
  return (
    <div id="home" className="grid h-screen grid-rows-6">
      <nav className="z-20 row-span-2 flex flex-col justify-start space-y-5 bg-black bg-opacity-70 p-5 text-right text-3xl text-white lg:col-span-2 lg:row-span-1 lg:flex-row lg:items-center lg:justify-end lg:space-x-10 lg:space-y-0 lg:px-20 lg:text-left lg:text-4xl">
        <a href="#about" className="hover:opacity-70">
          About
        </a>
        <a href="#whatsOn" className="hover:opacity-70">
          What's On
        </a>
        <a href="#location" className="hover:opacity-70">
          Getting Here
        </a>
        <a className=" hover:opacity-70" href="#signUp">
          Sign Up
        </a>
      </nav>
      <div className="row-span-3  lg:grid lg:grid-cols-5">
        <div className="relative z-20 mt-20 p-5 pt-20 text-5xl font-bold uppercase text-white lg:col-span-3 lg:p-20 lg:pt-40 lg:text-7xl">
          <h1>
            <h1 className="font-greve-wide-bold">
              Our Right to the City:
            </h1>
            Festival of Urban Liberation
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 z-0 h-screen bg-[url('/images/city-bg.jpg')] bg-cover bg-center brightness-50"></div>
    </div>
  );
}
