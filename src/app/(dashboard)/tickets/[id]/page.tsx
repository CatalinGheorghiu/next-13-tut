import { notFound } from "next/navigation";

interface TicketDetailsProps {
  params: {
    id: string;
  };
}

export const dynamicParams = true;

export async function generateMetadata({ params }: TicketDetailsProps) {
  const { title } = await getTicket(params.id);

  return {
    title: `Dojo help desk - ${title}`
  };
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map(({ id }: { id: string }) => ({
    id
  }));
}

async function getTicket(id: string) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const TicketDetails = async ({ params }: TicketDetailsProps) => {
  const { title, user_email, body, priority } = await getTicket(params.id);

  return (
    <section>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{title}</h3>
        <small>Created by {user_email}</small>
        <p>{body}</p>
        <div className={`pill ${priority}`}>{priority}</div>
      </div>
    </section>
  );
};

export default TicketDetails;
