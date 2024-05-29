interface EventCardProps {
  title: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
}

export default function EventCard({
  title,
  imageUrl,
  date,
  time,
  location,
}: EventCardProps) {
  return (
    <div className="bg-white-custom flex max-w-md flex-col  justify-between rounded-lg p-5 shadow-lg ">
      <img
        className="h-32 w-full object-cover object-center"
        src={imageUrl}
        alt={title}
      />
      <h1 className="h-20 pt-5 text-2xl font-bold capitalize lg:pt-2">
        {title}
      </h1>
      <div className="text-right">
        <p className="text-xl">{location}</p>
        <p className="text-xl">{time}</p>
        <p className="text-xl">{date}</p>
      </div>
    </div>
  );
}
