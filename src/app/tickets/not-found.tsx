import Link from 'next/link';

interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
  return (
    <section className="text-center">
      <h2 className="text-3xl">We hit a brick wall</h2>
      <p>We could not find the page you are looking for</p>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>
      </p>
    </section>
  );
};

export default NotFound;
