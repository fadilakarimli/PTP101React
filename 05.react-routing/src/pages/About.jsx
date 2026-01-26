const About = () => {
  return (
    <main className="min-h-screen py-12 bg-white">
      <section className="max-w-3xl mx-auto px-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center">About</h1>
        <p className="mt-4 text-gray-600 text-center">This project is a minimal React routing demo with simple Tailwind styles. It's made to be easy to read and extend.</p>

        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Purpose</h3>
            <p className="text-gray-600 text-sm">Show how routing and small components fit together in a clean starter.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Principles</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm space-y-1">
              <li>Readable code</li>
              <li>Minimal, consistent styling</li>
              <li>Easy to extend</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Want changes? Tell me which colors, spacing or components you prefer.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
