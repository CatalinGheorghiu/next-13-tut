import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface TicketDetailsProps {
  params: {
    id: string;
  };
}

export const dynamicParams = true;

export async function generateMetadata({ params }: TicketDetailsProps) {
  const supabase = createServerComponentClient({ cookies });

  const { data: ticket, error } = await supabase
    .from("Tickets")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `Dojo help desk - ${ticket?.title || "Ticket not found"}`
  };
}

async function getTicket(id: string) {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("Tickets")
    .select()
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  return data;
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
