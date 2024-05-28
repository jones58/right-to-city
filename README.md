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
- Added a form component to the site.
- Added some template event data in JSON (wrapped in a tsx file), made an event card component and added it to the what's on section using .map() to go through the data and create a new card for each. Using template data and sample images helped me to do the styling of these components.
- Once I had the design file from the client, I was able to build out the fonts and colours I wanted from the site. The body font they suggested wasn't right (Greve) so I suggested using Klima instead.
- This also gave me my first taste of using a variable font on a website (Greve). It was nice to have just one font file to work from, but a little trickier to set up. I used a custom utility in tailwind to get the widest font I could, setting it as .font-greve-wide, which sets the fontFamily to 'greve' and uses fontVariationSettings to adjust the weight and width.

## How to run it:

- npm install
- npm run dev
