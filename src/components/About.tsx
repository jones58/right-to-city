export default function About() {
  return (
    <div
      className="min-h-screen p-5 py-10 lg:grid lg:grid-cols-5 lg:p-20 "
      id="about"
    >
      <div className="lg:col-span-3 lg:pr-20">
        <img
          src="/images/city-2.jpg"
          className="h-full w-full rounded-lg object-cover shadow-lg"
          alt="City"
        />
      </div>
      <div className="py-5 lg:col-span-2 lg:py-0">
        <h1 className=" text-black-custom py-5 text-4xl font-bold lg:text-5xl">
          <div className="bg-red-custom mr-1 inline-block h-7 w-7 rounded-full lg:mr-2 lg:h-10 lg:w-10"></div>
          About the Festival
        </h1>
        <p className="prose lg:prose-xl">
          The Festival of Urban Liberation will be bringing together
          campaigns and communities of resistance from across London.
          <br />
          <br />
          London is not only a highly neoliberal city where global
          capitalism rules, feeding itself the fruits of exploitation both
          here and through the spoils of colonial wealth, it is also a
          city of life, of resistance and struggle, of power from below
          trying to find a way through. From residents fighting demolition
          of their homes and disrepair, to parents fighting against
          closures of schools and nurseries. From those challenging
          climate change, to communities stopping immigration raids, and
          the victims of the Windrush scandal and systemic racism.
          <br />
          <br />
          London resists - street by street, block by block. Come and
          celebrate and let's conspire together for a future liberated
          London that includes everyone that chooses to make it home, for
          our collective right to the city.
        </p>
      </div>
    </div>
  );
}
