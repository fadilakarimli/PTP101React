import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen py-16 bg-white">
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-3 text-gray-600">A simple React routing starter with clean, minimal styles.</p>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800">Highlights</h2>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Lightweight routing with react-router-dom</li>
            <li>Utility styles with Tailwind</li>
            <li>Small, reusable components</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
