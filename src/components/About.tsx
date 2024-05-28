export default function About() {
  return (
    <div
      className="min-h-screen p-5 text-2xl lg:grid lg:grid-cols-5 lg:px-20 lg:pb-20 lg:text-4xl"
      id="about"
    >
      <div className=" lg:col-span-3 lg:pr-20">
        <img src="/images/city-2.jpg" className="h-full object-cover" />
      </div>
      <div className=" py-5 lg:col-span-2 lg:py-0 lg:text-2xl">
        <h1 className="text-title py-10 text-3xl font-bold lg:py-5 lg:text-4xl">
          About the Festival
        </h1>
        <p className="prose lg:prose-xl">
          The Festival of Urban Liberation will be bringing together
          campaigns and communities of resistance and struggles from
          across London.
          <br />
          <br /> London is not only a highly neo-liberal city where global
          capitalism rules, feeding itself the fruits of exploitation both
          here and through the spoils of colonial wealth, it is also a
          city of life, of resistance and struggle, of power from below
          trying to find a way through. From residents fighting demolition
          of their homes and disrepair, to parents fighting against
          closures of schools & nurseries. From those challenging climate
          change, to communities stopping immigration raids, and the
          victims of the Windrush scandal and systemic racism. <br />{' '}
          <br />
          London resists - street by street, block by block - come and
          unite the struggles, celebrate and let's conspire together for a
          future liberated London that includes everyone that chooses to
          make it home, for our collective right to the city.
        </p>
      </div>
    </div>
  );
}
