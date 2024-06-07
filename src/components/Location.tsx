export default function Location() {
  return (
    <div
      className="flex min-h-screen flex-col-reverse justify-between p-5 py-10 lg:grid lg:grid-cols-5 lg:p-20"
      id="location"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.061729741046!2d0.07361357861590379!3d51.50390074421823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8af4dd90ae2eb%3A0x434f8c23f47012a7!2sThamesmead%2C%20London!5e0!3m2!1sen!2suk!4v1716910211750!5m2!1sen!2suk"
        className="h-64 w-full rounded-lg border-none shadow-lg lg:col-span-3 lg:h-full lg:w-[90%]"
        aria-hidden="false"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="text-black-custom lg:col-span-2  lg:text-2xl">
        <h1 className="pb-5 text-4xl font-bold lg:text-5xl">
          <div className="mr-1 inline-block h-7 w-7 rounded-full bg-red-custom lg:mr-2 lg:h-10 lg:w-10"></div>
          Getting Here
        </h1>
        <p className="prose lg:prose-xl">
          The event will be held at the Lesnes Estate in Thamesmead. Most
          of our accommodation is in tents, but we do have a number of
          indoor rooms with beds for families or those who aren't able to
          camp. This includes some accessible rooms.
        </p>
        <h1 className="pb-2 pt-4 text-2xl text-2xl lg:pt-5 lg:text-3xl">
          By Bike
        </h1>
        <p className="prose text-black-custom lg:prose-xl">
          <a
            href="https://www.cyclestreets.net/journey/to/GU23+6QB/RHS+Garden+Wisley/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-custom no-underline font-body hover:opacity-70 active:opacity-100"
          >
            Cycle Streets{' '}
          </a>
          or{' '}
          <a
            href="https://citymapper.com/directions?endaddress=London%2C+UK&endcoord=51.505758%2C0.110059&endname=Thamesmead&startcoord=51.505594916087645%2C-0.1358165957031221&startname=78+Pall+Mall%2C+St.+James%27s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-custom no-underline font-body hover:opacity-70 active:opacity-100"
          >
            Citymapper{' '}
          </a>
          can help you find the best cycle routes to get here.
        </p>
        <h1 className="pb-2 pt-4 text-2xl text-2xl lg:pt-5 lg:text-3xl">
          By Public Transport
        </h1>
        <div className="prose pb-5 text-black-custom font-body lg:prose-xl lg:pb-0">
          <ul className="-m-1 marker:text-black-custom lg:-mx-5 lg:-mt-3">
            <li>Elizabeth Line to Abbey Wood.</li>
            <li>Walk or 472/486 bus to Thamesmead.</li>
            <li>Get off at Lesnes Abbey.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
