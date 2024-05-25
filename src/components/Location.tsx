export default function Location() {
  return (
    <div
      className="min-h-screen p-4 text-lg lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="location"
    >
      <div className="col-span-3 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508105.0866143876!2d-4.760068744374395!3d52.12847532622325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b56fb64b275%3A0xc756e26675d21f40!2sBarbican%20Centre!5e0!3m2!1sen!2suk!4v1716574856668!5m2!1sen!2suk"
          style={{ border: 0 }}
          aria-hidden="false"
          className="border-nonelg:mx-10 h-64 w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center text-center lg:text-left">
        The event will be held at the Barbican.
      </div>
    </div>
  );
}
