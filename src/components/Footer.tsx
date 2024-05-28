import SocialIcons from './social-icons';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between bg-black p-5 text-2xl text-white lg:flex-row lg:px-20">
      <div>
        <p className="py-10 text-2xl font-bold lg:py-0 lg:pb-10 lg:pt-10">
          Our Right to the City: A Festival of Urban Liberation
        </p>
        <SocialIcons />
      </div>
      <div className="py-10 lg:text-right">
        <p>
          Site by{' '}
          <a
            href="https://www.jackkershaw.net"
            target="_blank"
            className="hover:opacity-70 active:opacity-100"
            aria-label="link to Jack Kershaw's website"
          >
            Jack Kershaw.
          </a>
        </p>
        <p className="py-5 lg:py-12">
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
