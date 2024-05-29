import EventCard from './eventCard';
import { events } from './eventData';
export default function WhatsOn() {
  return (
    <div
      className="bg-green-custom min-h-screen p-5 text-2xl lg:px-20 lg:pb-20 lg:text-4xl"
      id="whatsOn"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="bg-white-custom rounded-lg p-5 shadow-lg">
          <h1 className="pt-5 text-3xl font-bold capitalize lg:pt-2 lg:text-5xl">
            <div className="bg-red-custom mr-2 inline-block h-10 w-10 rounded-full"></div>
            What's On
          </h1>
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
