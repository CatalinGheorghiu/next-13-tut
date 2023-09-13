import Link from 'next/link';

interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
  return (
    <section className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>We could not find the page you are looking for</p>
      <p>
        Go back to <Link href="/">Dashboard</Link>
      </p>
    </section>
  );
};

export default NotFound;
