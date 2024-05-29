export default function Location() {
  return (
    <div
      className=" flex flex-col-reverse justify-start p-5 py-10 lg:grid lg:grid-cols-5 lg:p-20"
      id="location"
    >
      <div className="lg:col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.061729741046!2d0.07361357861590379!3d51.50390074421823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8af4dd90ae2eb%3A0x434f8c23f47012a7!2sThamesmead%2C%20London!5e0!3m2!1sen!2suk!4v1716910211750!5m2!1sen!2suk"
          className="h-64 w-full rounded-lg border-none shadow-lg lg:h-96 lg:w-[90%]"
          aria-hidden="false"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="lg:col-span-2 lg:py-0 lg:text-2xl">
        <h1 className=" py-5 text-4xl font-bold lg:text-5xl">
          <div className="bg-red-custom mr-1 inline-block h-7 w-7 rounded-full lg:mr-2 lg:h-10 lg:w-10"></div>
          Getting Here
        </h1>
        <p className="prose-xl pb-5 lg:pb-0">
          The event will be held at the Lesnes Estate in Thamesmead. Most
          of our accommodation is in tents, but we do have a number of
          indoor rooms with beds for families or those who aren't able to
          camp. This includes some accessible rooms.
        </p>
      </div>
    </div>
  );
}
