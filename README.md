# How I made this site:

- Made an Are.na folder of some sites I like:
  https://www.are.na/jack-kershaw/right-to-city
- Started wireframing in Figma
- Bootstrapped with Vite, React and Tailwind CSS
- I noticed my tailwind class sorting plugin for prettier wasn't working, so I loooked online and found a tutorial that reccommending using .prettierrc.json instead of.prettierrc, which fixed it.
- Set up animations with Framer Motion and an Animation file to wrap components in.
- Set up the basic structure of the site. I used the Figma wireframe as a guide
- Added embedded google map to the site with an iframe.
- I spent a lot of time getting the frontpage (technically top page) of the site looking right on mobile and desktop. I liked using Tailwind to quickly iterate on the css and used border-white border-2 to make it easier to adjust padding and margin values.
- Built out Location component using Google Maps embed and styled responsively.
- Added about component.
- Changed favicon to building using an SVG from Iconify.

## How to run it:

- npm install
- npm run dev
