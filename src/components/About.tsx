export default function About() {
  return (
    <div
      className="min-h-screen p-5 lg:mb-20 lg:grid lg:grid-cols-5 lg:px-20 lg:pb-20"
      id="about"
    >
      <div className="lg:col-span-3 lg:pr-20">
        <img
          src="/images/city-2.jpg"
          className="h-full w-full object-cover"
          alt="City"
        />
      </div>
      <div className="py-5 lg:col-span-2 lg:py-0">
        <h1 className="text-title py-10 text-3xl font-bold text-gray-800 lg:py-5 lg:text-5xl">
          About the Festival
        </h1>
        <p className="prose text-gray-700 lg:prose-xl">
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
