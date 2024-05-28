export default function Location() {
  return (
    <div
      className=" p-5 text-lg lg:grid lg:grid-cols-5 lg:px-20 lg:pb-20"
      id="location"
    >
      <div className="py-5 lg:col-span-2 lg:py-0 lg:pr-20 lg:text-2xl">
        <h1 className="py-2 text-3xl font-bold lg:py-5 lg:text-4xl">
          Location
        </h1>
        <p className="prose-xl">
          The event will be held at the Lesnes Estate in Thamesmead. Most
          of our accommodation is in tents, but we do have a number of
          indoor rooms with beds for families or those who aren't able to
          camp. This includes some accessible rooms.
        </p>
      </div>
      <div className="lg:col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.061729741046!2d0.07361357861590379!3d51.50390074421823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8af4dd90ae2eb%3A0x434f8c23f47012a7!2sThamesmead%2C%20London!5e0!3m2!1sen!2suk!4v1716910211750!5m2!1sen!2suk"
          className="h-64 w-full border-none lg:h-96"
          aria-hidden="false"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
