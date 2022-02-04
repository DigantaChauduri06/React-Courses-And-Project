export default function Event({ events }) {
  console.log("Hello From events");
  return (
    <div>
      <h1>Events are listed here</h1>
      {events.map((item) => {
        return (
          <div>
            <p>Date: {item.date}</p>
            <p>Date: {item.date}</p>
            <p>Date: {item.location}</p>
          </div>
        );
      })}
    </div>
  );
}
