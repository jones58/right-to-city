import Form from './Form';

export default function SignUp() {
  return (
    <div
      className=" min-h-screen bg-blue-custom p-5 py-10 text-2xl lg:grid lg:grid-cols-5 lg:p-20 lg:text-4xl"
      id="signUp"
    >
      <div className="lg:col-span-3 lg:mr-20 lg:text-2xl">
        <Form />
      </div>
      <div className="pt-10 lg:col-span-2 lg:py-8 lg:pt-0">
        <img
          src="/images/city-3.jpg"
          className="h-full w-full rounded-lg object-cover shadow-lg"
          alt="The image shows a lively street protest or rally with people dancing, shouting, and holding up signs. The atmosphere is energetic and vibrant, with individuals of various backgrounds engaging passionately in the event. Some of the visible signs include messages like 'Kill the Bill.' The crowd appears to be in a city setting, with buildings in the background and a truck nearby. The participants are expressive, with some raising their fists and others immersed in conversation or dance, reflecting a spirited and dynamic scene."
        />
      </div>
    </div>
  );
}
