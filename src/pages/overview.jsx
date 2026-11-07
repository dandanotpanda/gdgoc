const tracks = [
  {
    number: '01',
    eyebrow: 'EXPLORE THE WHY',
    title: 'Research & discovery',
    description: 'Ask better questions, understand people, and turn insight into a clear problem worth solving.',
    tags: 'Problem framing · User research · Product thinking',
    symbol: '⌕',
    color: 'blue',
    bg: 'bg-blue-50',
    accent: 'text-blue-500',
  },
  {
    number: '02',
    eyebrow: 'MAKE IT MEANINGFUL',
    title: 'Design & creativity',
    description: 'Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.',
    tags: 'UI/UX · Visual storytelling · Prototyping',
    symbol: '✎',
    color: 'yellow',
    bg: 'bg-amber-50',
    accent: 'text-amber-500',
  },
  {
    number: '03',
    eyebrow: 'BRING IDEAS TO LIFE',
    title: 'Development',
    description: 'Learn the tools, write the code, and build useful things with people who enjoy figuring it out.',
    tags: 'Web & mobile · Cloud · AI foundations',
    symbol: '</>',
    color: 'green',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-500',
  },
]

const formats = [
  {
    icon: '▣',
    title: 'Study groups',
    description: 'Build foundations with peers. Work through a topic, compare approaches, and make space for questions.',
    best: 'Learning the fundamentals',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: '‹ ›',
    title: 'Hands-on workshops',
    description: 'Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.',
    best: 'Trying something new',
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    icon: '♧',
    title: 'Project circles',
    description: 'Connect research, design, and development around a shared problem. Learn through making and feedback.',
    best: 'Putting skills into practice',
    color: 'bg-amber-50 text-amber-500',
  },
  {
    icon: '♧',
    title: 'Knowledge sharing',
    description: 'Walk through an idea, share a lesson from your process, and discover how other students approach their work.',
    best: 'Exchanging perspectives',
    color: 'bg-rose-50 text-rose-500',
  },
]

const journey = [
  {
    number: '01',
    title: 'Discover',
    description: 'Explore a topic and find the questions you want to answer.',
  },
  {
    number: '02',
    title: 'Practice',
    description: 'Try an exercise, work through a challenge, and ask for help.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Apply your learning to a small idea with a clear purpose.',
  },
  {
    number: '04',
    title: 'Share',
    description: 'Show your process, gather feedback, and help someone else.',
  },
]

function Overview() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-[1.5fr_0.8fr] md:py-16">
        <div>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
            ● OVERVIEW · PROGRAMS & LEARNING TRACKS
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Find your spark.
            <br />
            <span className="text-blue-600">Build your own path.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-500">
            Explore how research, creativity, and development connect.
            Start with one interest. Grow through practice and the
            people around you.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex h-52 w-52 items-center justify-center rounded-3xl bg-blue-100 text-8xl text-blue-500 shadow-xl shadow-blue-100 md:h-64 md:w-64">
            ⌕
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <nav className="sticky top-0 z-20 border-y border-gray-200 bg-white/95">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 py-4 text-xs font-medium whitespace-nowrap">
          <a href="#tracks" className="text-blue-600">Learning tracks ↓</a>
          <a href="#formats" className="text-gray-500 hover:text-blue-600">Learning formats ↓</a>
          <a href="#journey" className="text-gray-500 hover:text-blue-600">Your learning journey ↓</a>
          <a href="#starting" className="text-gray-500 hover:text-blue-600">Find a starting point ↓</a>
        </div>
      </nav>

      {/* LEARNING TRACKS */}
      <section id="tracks" className="scroll-mt-16 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
          ● EXPLORE YOUR INTERESTS
        </p>

        <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Three ways in. Plenty of ways forward.
        </h2>

        <p className="mt-4 text-sm text-gray-500">
          These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tracks.map((track) => (
            <article key={track.number} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className={`flex h-40 items-center justify-center ${track.bg}`}>
                <span className={`text-8xl font-light ${track.accent}`}>
                  {track.symbol}
                </span>
              </div>

              <div className="p-5">
                <p className="text-[9px] font-semibold uppercase text-blue-600">
                  {track.eyebrow}
                </p>

                <h3 className="mt-3 text-xl font-bold">{track.title}</h3>

                <p className="mt-3 min-h-16 text-xs leading-relaxed text-gray-500">
                  {track.description}
                </p>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-[10px] text-gray-400">{track.tags}</p>
                  <a href="#formats" className="mt-4 inline-block text-xs font-semibold text-blue-600">
                    Explore this track →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PATHWAY TABLE */}
        <h3 className="mt-14 text-xl font-bold">
          From an interest to something you can show.
        </h3>

        <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[600px] text-left text-xs">
            <thead className="bg-gray-100 text-gray-500">
              <tr>
                <th className="p-4">Pathway</th>
                <th className="p-4">What you can practice</th>
                <th className="p-4">A possible outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 font-semibold">Research & discovery</td>
                <td className="p-4 text-gray-500">Listening, problem framing, and testing assumptions</td>
                <td className="p-4 text-gray-500">A research insight and a focused problem brief</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Design & creativity</td>
                <td className="p-4 text-gray-500">Ideation, user flows, and prototype feedback</td>
                <td className="p-4 text-gray-500">An interactive prototype and a design story</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Development</td>
                <td className="p-4 text-gray-500">Coding, testing, and connecting tools</td>
                <td className="p-4 text-gray-500">A working demo with a clear explanation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[10px] text-gray-400">
          Illustrative learning outcomes. Topics and opportunities are shared through community updates.
        </p>
      </section>

      {/* LEARNING FORMATS */}
      <section id="formats" className="scroll-mt-16 bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
            ● WAYS TO LEARN
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            The format changes. The curiosity stays.
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Explore the kinds of experiences that help you move from understanding to doing.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {formats.map((format) => (
              <article key={format.title} className="flex gap-5 rounded-2xl bg-white p-6">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${format.color}`}>
                  {format.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold">{format.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {format.description}
                  </p>
                  <p className="mt-3 text-[10px] font-semibold text-blue-600">
                    Best for · {format.best}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="scroll-mt-16 mx-auto max-w-7xl px-6 py-20">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
          ● PROGRESS, NOT PERFECTION
        </p>

        <h2 className="mt-5 text-3xl font-bold md:text-4xl">
          A journey you can keep building on.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {journey.map((step) => (
            <article key={step.number}>
              <p className="border-b border-gray-200 pb-4 text-3xl font-bold text-blue-600">
                {step.number}
              </p>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* STARTING POINT */}
      <section id="starting" className="scroll-mt-16 bg-amber-50 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
              ● START WHERE YOU ARE
            </p>
            <h2 className="mt-4 text-2xl font-bold">
              New to tech?
              <br />
              That's a starting point, too.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-gray-600">
              You don't need a finished portfolio or the perfect track choice.
              Pick a topic you're curious about. If you're unsure, tell us
              what interests you and we can start a conversation.
            </p>
            <a href="/contact" className="mt-4 inline-block text-xs font-semibold text-blue-600">
              Ask about getting started →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl bg-blue-50 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
              ● YOUR NEXT CHAPTER
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Bring your curiosity.
              <br />
              We'll build from there.
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a href="/overview" className="rounded-md bg-blue-600 px-5 py-3 text-xs font-semibold text-white hover:bg-blue-700">
              Explore the overview →
            </a>
            <a href="/contact" className="text-xs font-semibold text-blue-600">
              Talk to the community →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-bold">Google Developer Groups</h3>
            <p className="mt-1 text-[10px] text-blue-600">On Campus · Universitas Gadjah Mada</p>
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-gray-500">
              A student community for curious minds, shared learning, and technology with purpose.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold">Explore</h3>
            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/overview">Overview</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold">Keep in the loop</h3>
            <a href="https://instagram.com" className="mt-4 inline-block text-xs text-blue-600">
              @gdgoc.ugm
            </a>
            <p className="mt-4 text-xs text-gray-500">Learn together. Build together.</p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl justify-between border-t border-gray-200 pt-5 text-[10px] text-gray-400">
          <span>© GDGoC Universitas Gadjah Mada</span>
          <span>Made for the campus. Open to possibilities.</span>
        </div>
      </footer>
    </main>
  )
}

export default Overview