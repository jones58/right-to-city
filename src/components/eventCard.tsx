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
    <div className="flex max-w-md flex-col justify-between border-2 border-black p-5">
      <img
        className="h-40 w-full object-cover lg:h-64"
        src={imageUrl}
        alt={title}
      />
      <div className="h-24 pt-5 text-2xl font-bold">{title}</div>
      <div className="text-right">
        <p className="text-xl">{location}</p>
        <p className="text-xl">{time}</p>
        <p className="text-xl">{date}</p>
      </div>
    </div>
  );
}
