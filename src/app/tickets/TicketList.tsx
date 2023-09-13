import Link from "next/link";

interface TicketProps {
  id: string;
  title: string;
  body: string;
  priority: string;
}

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  });

  return res.json();
}

const TicketList = async () => {
  // Fetch data
  const tickets = await getTickets();

  return (
    <>
      {tickets.map(({ id, title, body, priority }: TicketProps) => (
        <div key={id} className="card my-5">
          <Link href={`/tickets/${id}`}>
            <h3>{title}</h3>
            <p>{body.slice(0, 200)}...</p>
            <div className={`pill ${priority}`}>{priority} priority</div>
          </Link>
        </div>
      ))}

      {tickets.length === 0 && (
        <div className="card my-5">
          <h3>No tickets found</h3>
          <p className="text-center">Try adding a ticket!</p>
        </div>
      )}
    </>
  );
};

export default TicketList;
