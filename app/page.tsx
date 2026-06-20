export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold text-pink-600 mb-4">
        Love Me!
      </h1>

      <p className="text-xl text-gray-700 max-w-2xl mb-8">
        Hatch pets, build homes, make friends, and explore a magical world.
      </p>

      <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold">
        Play Now
      </button>
    </main>
  );
}