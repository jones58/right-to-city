import Header from './Header';

export default function Home() {
  return (
    <div id="home" className="h-screen">
      <Header />
      <div className="lg:grid lg:grid-cols-5">
        <div className="relative z-20 mt-10 p-5  py-10 pt-20 text-5xl font-bold uppercase text-white-custom lg:col-span-3 lg:p-20 lg:pt-40 lg:text-7xl">
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
