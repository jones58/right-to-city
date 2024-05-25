export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between bg-black p-10 text-2xl text-white lg:flex-row  lg:p-20">
      <p className="font-sans">
        Our Right to the City: A Festival of Urban Liberation
      </p>
      <div className="py-10 lg:py-0">
        <p>
          Site by{' '}
          <a
            href="https://www.jackkershaw.net"
            target="_blank"
            className="
           hover:opacity-70 active:opacity-100"
            aria-label="link to Jack Kershaw's website"
          >
            Jack Kershaw.
          </a>
        </p>
        <p className="py-2">
          Source on{' '}
          <a
            href="https://github.com/jones58/right-to-city"
            target="_blank"
            className="hover:opacity-70 active:opacity-100"
            aria-label="link to the Vital Signs Magazine GitHub repository"
          >
            Github.
          </a>
        </p>
      </div>
    </footer>
  );
}
