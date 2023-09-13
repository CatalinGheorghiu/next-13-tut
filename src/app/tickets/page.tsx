import TicketList from "@/app/tickets/TicketList";
import { Suspense } from "react";
import Loading from "@/app/loading";

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
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </section>
  );
};

export default Tickets;
