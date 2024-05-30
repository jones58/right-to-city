import EventCard from './eventCard';
import { events } from './eventData';
export default function WhatsOn() {
  return (
    <div
      className="min-h-screen bg-green-custom p-5 py-10 text-2xl lg:p-20 lg:text-4xl"
      id="whatsOn"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="items-center rounded-lg bg-white-custom p-5 shadow-lg">
          <h1 className="pb-5 text-4xl font-bold capitalize lg:pb-10 lg:pt-2 lg:text-5xl">
            <div className="mr-1 inline-block h-7 w-7 rounded-full bg-red-custom lg:mr-2 lg:h-10 lg:w-10"></div>
            What's On
          </h1>
          <p className="prose text-black-custom font-body lg:prose-xl">
            Alongside the events, this year's party will be bigger and
            better than ever before. Look out for DJs, art, theatre, and
            games.
          </p>
        </div>
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            imageUrl={event.imageUrl}
            time={event.time}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
}
