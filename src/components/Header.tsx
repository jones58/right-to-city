export default function Header() {
  return (
    <header className="relative z-20 flex flex-col justify-start space-y-5 bg-black-custom bg-opacity-40 p-5 text-right text-3xl text-white-custom lg:col-span-2 lg:flex-row lg:items-center lg:justify-end lg:space-x-10 lg:space-y-0 lg:px-20 lg:py-10 lg:text-left lg:text-4xl">
      <a href="#about" className="hover:opacity-70">
        About
      </a>
      <a href="#whatsOn" className="hover:opacity-70">
        What's On
      </a>
      <a href="#location" className="hover:opacity-70">
        Getting Here
      </a>
      <a className=" hover:opacity-70" href="#signUp">
        Sign Up
      </a>
    </header>
  );
}
