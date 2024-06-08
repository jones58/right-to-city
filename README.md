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
- I noticed the site wasn't taking up a lot of the available room on mobile, so I changed the padding from 10 to 5.
- Adjusting the size and spacing of components so that when a page/subpage is opened, it shows most if not all of the content. This allows the user to navigate through the site easily.
- Upgraded the form using Material Design principles.
- Added custom colour scheme to the site with Tailwind, loosely based on the colours used by the graphic designer of marketing materials. I wanted to make them more saturated for web, to give a bold, fresh look.
- I liked the red circles on the poster the graphic designer made. I thought about ways to incorporate them into my design, settling on adding them next to section titles. I did this using a div inline block: `tsx  <div className="bg-red-custom mr-2 inline-block h-10 w-10 rounded-full"></div> `. I think this does a good job of tying the sections together and creating a clear hierarchy.
- As I was making the backtotop button, I had some issues with how it was displaying(at the bottom of the page and not each viewport). I debugged this and realised the issue was it was wrapped in the animation component.
- Added validation on the phone number and email adress on the form component. I used regex to validate these, within functions that run on submit.
- I next wanted to link my form to an Airtable spreadsheet

  - I used [this guide](https://www.youtube.com/watch?app=desktop&v=K1-ANCLd47k) and [this one](https://github.com/tiagofsanchez/tiagofsanchez/blob/master/content/posts/2019-10-06-building-a-contact-form-with-airtable.md) to try and work it out, but to no avail.
  - I then read about using Postman to test APIs and realised the JSON I was submitting wasn't as requested by the Airtable API.
  - I found the correct JSON by testing some dummy data in Postman:
    {"fields": {"fname": "John", "lname": "Doe", "email": "john.doe@example.com", "phone": "123-456-7890", "message": "I am interested in getting involved." } }
  - I then set about getting my form to return the data in this format.I console.logged out the json object I was posting with the form until I got what I was looking it.
  - When I having trouble submitting the form to the API, I realised that I was using a NextJS API route method within React. I didn't want to move my project to React, so I looked up how to integrate APIs in React with Axios. I wrapped the API call in a try catch block within the form component's handleSubmit function. This proved far simpler then setting up an API route.
  - I next had some issues using process.env., since this is a client side project. I solved this by looking through the [Vite docs](https://vitejs.dev/guide/env-and-mode), and finding that I needed to use `import.meta.env` to get the environment variables from the .env file, as well as prefacing variable names with `VITE_`.

- Used Google Lighthouse to check and improve accessibility:

  - Starting on a score of 96, I improved this by adding titles for the map iframe within the location component. I added `aria-title="map showing the location of the festival"` to the iframe.
  - Improved SEO by adding a meta description to the site.

- Used the WCAG Contrast checker extension to check the contrast of colours on the site. The only issues were with the embedded Google map, for which there is a "view larger map" option for those who need it.

- I wasn't happy with using alerts for popups on submit, so I looked into other options. Rather than creating a new component, I opted to use the [SweetAlert2](https://sweetalert2.github.io/) library. I used it to display a success message on form submission, and error messages for the form validation.

## How to run it:

- npm install
- npm run dev
