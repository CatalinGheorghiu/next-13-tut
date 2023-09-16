"use client";

interface ErrorProps {
  error: { message: string };
  reset: () => void;
}
const Error = ({ error, reset }: ErrorProps) => {
  return (
    <section className="text-center">
      <h2 className="text-4xl">Oh no!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="btn-primary mx-auto my-4">
        Maybe try again?
      </button>
    </section>
  );
};

export default Error;
