export default function About() {
  return (
    <div
      className="min-h-screen bg-white-custom p-5 py-5 lg:grid lg:grid-cols-5 lg:p-20  "
      id="about"
    >
      <div className="lg:col-span-3 lg:pr-20">
        <img
          src="/images/city-2.jpg"
          className="mt-5 h-full w-full rounded-lg object-cover shadow-lg lg:mt-0"
          alt="City"
        />
      </div>
      <div className="py-5 lg:col-span-2 lg:py-0">
        <h1 className="py-5 text-4xl font-bold text-black-custom lg:text-5xl ">
          <div className="mr-1 inline-block h-7 w-7 rounded-full bg-red-custom lg:mr-2 lg:h-10 lg:w-10"></div>
          About the Festival
        </h1>
        <p className="prose text-black-custom lg:prose-xl">
          The Festival of Urban Liberation will be bringing together
          campaigns and communities of resistance from across London.
          London is not only a highly neoliberal city where global
          capitalism rules, feeding itself the fruits of exploitation both
          here and through the spoils of colonial wealth.
        </p>
        <br />
        <p className="prose text-black-custom lg:prose-xl">
          London is also a city of life, of resistance and struggle, of
          power from below trying to find a way through. London resists -
          street by street, block by block. Come and celebrate and let's
          conspire together for a future liberated London that includes
          everyone that chooses to make it home, for our collective right
          to the city.
        </p>
      </div>
    </div>
  );
}
