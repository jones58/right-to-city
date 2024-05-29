import EventCard from './eventCard';
import { events } from './eventData';
export default function WhatsOn() {
  return (
    <div
      className="min-h-screen bg-green-600 p-5 text-2xl lg:px-20 lg:pb-20 lg:text-4xl"
      id="whatsOn"
    >
      <h1 className="pb-5 text-3xl font-bold lg:pb-8 lg:text-5xl">
        What's On
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
