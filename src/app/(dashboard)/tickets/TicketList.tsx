import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface TicketProps {
  id: string;
  title: string;
  body: string;
  priority: string;
}

async function getTickets() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Tickets").select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

const TicketList = async () => {
  // Fetch data
  const tickets = (await getTickets()) || [];

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
