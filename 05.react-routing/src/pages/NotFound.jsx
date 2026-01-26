import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-gray-600">Page not found</p>
        <Link to="/" className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Go back home</Link>
      </div>
    </main>
  );
};

export default NotFound;
