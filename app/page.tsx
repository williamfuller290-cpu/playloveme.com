const pets = ["Puppy", "Kitten", "Bunny", "Dragon", "Bee"];

const updates = [
  {
    title: "New Update",
    text: "New pets, houses, events and exciting adventures.",
  },
  {
    title: "New Pets",
    text: "Collect cute pets and unlock rare friends.",
  },
  {
    title: "New Events",
    text: "Join limited-time events and earn rewards.",
  },
];

export default function Home() {

return (
  <main
    className="min-h-screen"
    style={{
      backgroundImage: "url('/LMWebback.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Navbar */}
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img
          src="/love-me-logo.png"
          alt="Love Me"
          className="h-12"
        />

        <div className="hidden gap-8 font-semibold text-gray-700 md:flex">
          <a href="#">Home</a>
          <a href="#news">News</a>
          <a href="#about">About</a>
        </div>

        <button className="rounded-xl bg-pink-500 px-5 py-2 text-white hover:bg-pink-600">
          Discord
        </button>
      </div>
    </nav>

    {/* Hero */}
    <section className="bg-white/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 lg:flex-row">
        <div className="flex-1">
          <img
            src="/love-me-logo.png"
            alt="Love Me"
            className="mb-8 w-full max-w-[650px] drop-shadow-2xl"
          />

        </div>

        <div className="flex-1">
          <img
            src="/700x500.png"
            alt="Summer Update"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>

    {/* Features */}

    {/* Upcoming News */}
    <section
      id="news"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-12 text-center text-6xl font-extrabold text-pink-500">
        Upcoming News!
      </h2>

      <div className="overflow-hidden rounded-[40px] bg-white/90 shadow-2xl backdrop-blur-sm">
        <img
          src="/700x500.png"
          alt="Love Me Development"
          className="w-full"
        />

        <div className="p-10">
          <h3 className="mb-6 text-4xl font-bold text-pink-500">
            💖 Love Me! Is Coming Soon
          </h3>

          <p className="text-xl leading-relaxed text-gray-700">
            Love Me! is an in-development Roblox game. This process is
            being done to show that anyone can make a Roblox game.

            <br />
            <br />

            We hope to be community funded and give back tenfold once we
            unveil our new game.

            <br />
            <br />

            We hope to grow and make new memories for generations to look
            back on.

            <br />
            <br />

            Thank you for your patience and support ❤️
          </p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="mt-20 bg-pink-100">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <img
          src="/love-me-logo.png"
          alt="Love Me"
          className="mx-auto mb-4 h-16"
        />

        <p className="text-gray-600">
          © 2026 Love Me. All Rights Reserved.
        </p>
      </div>
    </footer>
  </main>
);




}