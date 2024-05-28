export default function Location() {
  return (
    <div
      className="min-h-screen p-5 text-lg lg:grid lg:grid-cols-5 lg:p-20"
      id="location"
    >
      <div className="py-5 lg:col-span-2 lg:py-0 lg:pr-20 lg:text-2xl">
        <h1 className="py-2 text-3xl font-bold lg:py-5 lg:text-4xl">
          Location
        </h1>
        <p className="prose-xl">
          The event will be held at the Barbican. Most of our
          accommodation is in tents, but we do have a number of indoor
          rooms with beds for families or those who aren't able to camp.
          This includes some accessible rooms.
        </p>
      </div>
      <div className="lg:col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508105.0866143876!2d-4.760068744374395!3d52.12847532622325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b56fb64b275%3A0xc756e26675d21f40!2sBarbican%20Centre!5e0!3m2!1sen!2suk!4v1716574856668!5m2!1sen!2suk"
          aria-hidden="false"
          className="h-64 w-full border-none lg:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
