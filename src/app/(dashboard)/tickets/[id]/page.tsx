import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DeleteBtn from "@/app/(dashboard)/tickets/[id]/DeleteBtn";

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
  const { title, user_email, body, priority, id } = await getTicket(params.id);
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <section>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session?.user?.email === user_email && <DeleteBtn id={id} />}
        </div>
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
