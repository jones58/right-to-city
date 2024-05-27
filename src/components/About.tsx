export default function About() {
  return (
    <div
      className="min-h-screen p-10 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="about"
    >
      <div className=" lg:col-span-3 lg:pr-20">
        <img src="/images/city-2.jpg" />
      </div>
      <div className="prose py-5 lg:col-span-2 lg:py-0 lg:pr-20 lg:text-2xl">
        <h1 className="py-2 text-3xl font-bold lg:py-5 lg:text-4xl">
          About
        </h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        harum consectetur dolores commodi necessitatibus fuga libero sed
        tenetur minus et? Veritatis, autem tempore. Voluptates illum
        voluptatem ipsa rerum. Harum, laudantium! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Veniam eius esse ad quis odio
        id quidem numquam quasi. Totam vero non corporis id suscipit
        placeat libero voluptatem dolor facilis eum.
      </div>
    </div>
  );
}
