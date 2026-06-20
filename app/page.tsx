const features = ["Adopt Pets", "Build Homes", "Make Friends", "Explore"];

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
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-pink-500">💖 Love Me!</h1>

          <div className="hidden gap-8 font-semibold text-gray-700 md:flex">
            <a href="#">Home</a>
            <a href="#pets">Pets</a>
            <a href="#updates">Updates</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </div>

          <button className="rounded-xl bg-pink-500 px-5 py-2 text-white">
            Discord
          </button>
        </div>
      </nav>

    <section className="bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 lg:flex-row">
         <div className="flex-1">
  <img
    src="/love-me-logo.png"
    alt="Love Me"
    className="mb-8 w-full max-w-[650px]"
  />

  <button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-10 py-5 rounded-full font-bold shadow-lg">
    🎮 Play on Roblox
  </button>
</div>

          <div className="flex-1">
            <img
    src="/700x500.png"
     alt="Summer Update"
     className="w-full rounded-3xl shadow-xl"
/>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl bg-white p-8 text-center shadow"
            >
              <h3 className="text-xl font-bold text-pink-500">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="pets" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-5xl font-bold text-pink-500">
          Featured Pets
        </h2>

        <div className="grid gap-6 md:grid-cols-5">
          {pets.map((pet) => (
            <div
              key={pet}
              className="rounded-3xl bg-white p-5 text-center shadow"
            >
              <img
                src="https://placehold.co/250x250"
                alt={pet}
                className="mb-4 w-full rounded-2xl"
              />

              <h3 className="text-2xl font-bold text-pink-500">{pet}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="updates" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-12 text-center text-5xl font-bold text-pink-500">
          Latest Updates
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {updates.map((update) => (
            <div
              key={update.title}
              className="overflow-hidden rounded-3xl bg-white shadow"
            >
              <img
                src="https://placehold.co/600x350"
                alt={update.title}
                className="w-full"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-500">
                  {update.title}
                </h3>

                <p className="mt-2 text-gray-600">{update.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 bg-pink-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <h3 className="text-3xl font-bold text-pink-500">Love Me!</h3>

          <p className="mt-4 text-gray-600">
            © 2026 Love Me. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}