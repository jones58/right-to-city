export default function Home() {
  return (
    <div>
      <div className="grid h-screen grid-rows-4 " id="home">
        <div className="row-span-3 lg:grid lg:grid-cols-5">
          <h1 className="relative z-20 mt-20 p-10 pt-20 text-5xl font-bold text-white lg:col-span-3 lg:p-20 lg:text-8xl">
            Our Right to the City: <br /> A Festival of Urban Liberation
          </h1>
        </div>
        <div className="z-20 row-span-1 flex flex-col justify-start bg-black p-10 text-3xl text-white lg:row-span-1 lg:flex-row lg:justify-end lg:space-x-10 lg:space-y-0 lg:px-20 lg:text-4xl">
          <a href="#about" className="decoration-wavy hover:underline">
            About
          </a>
          <a href="#whatsOn" className="decoration-wavy hover:underline">
            What's On
          </a>
          <a href="#location" className="decoration-wavy hover:underline">
            Location
          </a>
          <a
            href="#getInvolved"
            className="decoration-wavy hover:underline"
          >
            Get Involved
          </a>
        </div>
        <div className="absolute inset-0 z-0 h-screen bg-[url('images/city-bg.jpg')] bg-cover bg-center brightness-50"></div>
      </div>
    </div>
  );
}
