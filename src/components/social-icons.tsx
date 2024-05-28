export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-start space-x-12 lg:items-end lg:space-x-10 lg:pb-0">
      <a
        href="https://www.facebook.com/profile.php?id=615594488741147"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Vital Signs Facebook page"
        className="flex items-end justify-end hover:opacity-70"
      >
        <span className="icon-[mdi--facebook] p-5"></span>
      </a>
      <a
        href="https://www.twitter.com/healthworkersu1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Vital Signs Twitter page"
        className="flex items-end justify-end hover:opacity-70"
      >
        <span className="icon-[mdi--twitter] p-5"></span>
      </a>
      <a
        href="https://www.instagram.com/vitalsignsmag/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Vital Signs Instagram page"
        className="flex items-end justify-end hover:opacity-70"
      >
        <span className="icon-[mdi--instagram] p-5"></span>
      </a>
      <a
        aria-label="link to the Vital Signs email"
        href="mailto:vitalsignsmag@proton.me"
        target="_blank"
        className="flex items-end justify-end hover:opacity-70"
      >
        <span className="icon-[mdi--email] p-5"> </span>
      </a>
    </div>
  );
}
