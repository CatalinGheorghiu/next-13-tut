export default function Home() {
  return (
    <div className="rounded-2xl p-4">
      <h1 className="text-7xl font-black text-amber-600 underline">
        Next 13 starter:
      </h1>
      <div className="max-w-fit pt-8">
        <pre className="group cursor-pointer py-2 text-3xl font-black text-amber-600 transition duration-300">
          Tailwind CSS
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full"></span>
        </pre>

        <pre className="group cursor-pointer py-2 text-3xl font-black text-amber-600 transition duration-300">
          Prettier
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full"></span>
        </pre>

        <pre className="group cursor-pointer py-2 text-3xl font-black text-amber-600 transition duration-300">
          ESLint
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full"></span>
        </pre>

        <pre className="group cursor-pointer py-2 text-3xl font-black text-amber-600 transition duration-300">
          Husky
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full"></span>
        </pre>

        <pre className="group cursor-pointer py-2 text-3xl font-black text-amber-600 transition duration-300">
          Lint staging
          <span className="block h-0.5 max-w-0 bg-sky-600 transition-all duration-500 group-hover:max-w-full"></span>
        </pre>
      </div>
    </div>
  );
}
