import TicketList from "@/app/(dashboard)/tickets/TicketList";
import { Suspense } from "react";
import Loading from "@/app/(dashboard)/loading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dojo help desk - Tickets"
};
const Tickets = () => {
  return (
    <section>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
        <Link href={`/tickets/create`} className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </section>
  );
};

export default Tickets;
