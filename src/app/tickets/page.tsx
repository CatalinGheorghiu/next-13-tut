import TicketList from '@/app/tickets/TicketList';

interface TicketsProps {}

const Tickets = ({}: TicketsProps) => {
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

      <TicketList />
    </section>
  );
};

export default Tickets;
