import SocialIcons from './social-icons';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between bg-black-custom p-5 py-10 text-2xl text-white-custom lg:flex-row lg:px-20">
      <div className="flex flex-col space-y-9">
        <a href="#home" className="hover:opacity-70">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Our Right to the City: A Festival of Urban Liberation
          </h1>
        </a>
        <SocialIcons />
      </div>
      <div className="mt-10 flex flex-col space-y-3 lg:justify-end lg:text-right">
        <p>
          Site by{' '}
          <a
            href="https://www.jackkershaw.net"
            target="_blank"
            className="font-body hover:opacity-70"
            aria-label="link to Jack Kershaw's website"
          >
            Jack Kershaw.
          </a>
        </p>
        <p>
          Source on{' '}
          <a
            href="https://github.com/jones58/right-to-city"
            target="_blank"
            className="font-body hover:opacity-70"
            aria-label="link to the Vital Signs Magazine GitHub repository"
          >
            Github.
          </a>
        </p>
      </div>
    </footer>
  );
}
