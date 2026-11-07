
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Hero Text */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-blue-600">
            GDGOC UGM · 2026/2027
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Big ideas.
            <br />
            <span className="text-blue-600">
              Built together.
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-relaxed text-gray-500">
            A place for curious minds at Universitas Gadjah Mada to learn,
            connect, and build technology that matters.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/overview"
              className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Find your learning track →
            </a>

            <a
              href="/about"
              className="rounded-md border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Get to know us →
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="/src/assets/hero.png"
            alt="GDGoC UGM illustration"
            className="w-full max-w-lg rounded-2xl object-cover"
          />
        </div>

      </section>
      
      {/* Feature Strip */}
      <section className="border-y border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-5 text-sm font-medium md:flex-row">

          <p>
            <span className="mr-2 text-blue-500">■</span>
            Learn by doing
          </p>

          <p>
            <span className="mr-2 text-red-500">■</span>
            Connect across disciplines
          </p>

          <p>
            <span className="mr-2 text-green-500">■</span>
            Build with purpose
          </p>

        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-20">

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
            A CAMPUS. A COMMUNITY.
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Not just learning
            <br />
            tech.
            <br />
            Finding your people.
          </h2>

          <a
            href="/about"
            className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            More about GDGoC UGM →
          </a>
        </div>

        <div className="space-y-5 text-gray-600">
          <p className="text-lg leading-relaxed">
            Google Developer Groups on Campus, Universitas Gadjah Mada
            brings students together around one simple idea: we can go
            further when we learn with each other.
          </p>

          <p className="leading-relaxed">
            From your first line of code to your next product idea,
            there's room to ask questions, share what you know,
            and try something new.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
              Student-led
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
              Peer-powered
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
              Curiosity-first
            </span>
          </div>
        </div>

      </section>

{/* Learning Tracks Section */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="mb-10">
    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
      FIND YOUR STARTING POINT
    </p>

    <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Many interests. One shared journey.
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Follow what excites you. Explore a track, then connect the dots with others.
        </p>
      </div>

      <a href="/overview" className="text-sm font-medium text-blue-600 hover:underline">
        See the overview →
      </a>
    </div>
  </div>

  <div className="grid gap-5 md:grid-cols-3">

    {/* Research Card */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex h-44 items-center justify-center bg-blue-50">
        <span className="text-7xl">🔍</span>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase text-blue-600">
          EXPLORE THE WHY 
        </p>
        <h3 className="mt-2 text-xl font-bold text-gray-900">
     <img src="/src/assets/research.png" />
          Research & discovery
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Ask better questions, understand people, and turn insight into a clear problem worth solving.
        </p>
        <div className="my-4 border-t border-gray-100" />
        <p className="text-xs text-gray-400">
          Problem framing · User research · Product thinking
        </p>
        <a href="/overview" className="mt-4 inline-block text-sm font-medium text-blue-600">
          Explore this track →
        </a>
      </div>
    </div>

    {/* Design Card */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex h-44 items-center justify-center bg-amber-50">
        <span className="text-7xl">🎨</span>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase text-amber-600">
          MAKE IT MEANINGFUL
        </p>
        <h3 className="mt-2 text-xl font-bold text-gray-900">
            <img src="/src/assets/design.png"/>
          Design & creativity
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.
        </p>
        <div className="my-4 border-t border-gray-100" />
        <p className="text-xs text-gray-400">
          UI/UX · Visual storytelling · Prototyping
        </p>
        <a href="/overview" className="mt-4 inline-block text-sm font-medium text-blue-600">
          Explore this track →
        </a>
      </div>
    </div>

    {/* Development Card */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="flex h-44 items-center justify-center bg-green-50">
        <span className="text-7xl">💻</span>
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase text-green-600">
          BRING IDEAS TO LIFE
        </p>
        <h3 className="mt-2 text-xl font-bold text-gray-900">
             <img src="/src/assets/development.png"/>
          Development
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Learn the tools, write the code, and build useful things with people who enjoy figuring it out.
        </p>
        <div className="my-4 border-t border-gray-100" />
        <p className="text-xs text-gray-400">
          Web & mobile · Cloud · AI foundations
        </p>
        <a href="/overview" className="mt-4 inline-block text-sm font-medium text-blue-600">
          Explore this track →
        </a>
      </div>
    </div>

  </div>
</section>

{/* Learning Experience Section */}
<section className="bg-gray-100 py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        MORE THAN A CLASSROOM
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
        Less watching. More making.
      </h2>

      <p className="mt-3 text-sm text-gray-500">
        Learn in a way that turns a new concept into something you can actually use.
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-3">

      {/* Card 1 */}
      <div className="rounded-2xl bg-white p-7">
        <div className="mb-5 text-blue-500">
          <span className="text-xl">▣</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Study together
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Work through foundations in peer learning sessions. Bring your questions; leave with a next step.
        </p>

        <a href="/overview" className="mt-5 inline-block text-xs font-medium text-blue-600">
          Study groups & guided practice 
        </a>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl bg-white p-7">
        <div className="mb-5 text-blue-500">
          <span className="text-xl">‹ ›</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Try it hands-on
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Practice a tool or technique in a workshop, then put it to work in a small experiment.
        </p>

        <a href="/overview" className="mt-5 inline-block text-xs font-medium text-blue-600">
          Workshops & technical sessions 
        </a>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl bg-white p-7">
        <div className="mb-5 text-blue-500">
          <span className="text-xl">♧</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Share the process
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Exchange feedback, explain your decisions, and learn from different ways of thinking.
        </p>

        <a href="/overview" className="mt-5 inline-block text-xs font-medium text-blue-600">
          Project circles & sharing sessions 
        </a>
      </div>

    </div>
  </div>
</section>

{/* Project Section */}
<section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

  {/* Project Illustration */}
  <div className="rounded-3xl bg-amber-50 p-8 md:p-10">
    <div className="mb-5 flex items-center justify-between">
      <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
        IDEA → PROTOTYPE
      </p>
      <span className="text-blue-500">‹/›</span>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex gap-1">
        <span className="h-2 w-2 rounded-full bg-red-400"></span>
        <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
        <span className="h-2 w-2 rounded-full bg-green-400"></span>
      </div>

      <h3 className="text-xl font-bold leading-tight text-gray-900">
        A little less friction.
        <br />
        A better campus day.
      </h3>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-md bg-blue-50 p-3 text-xs font-semibold text-gray-700">
          Discover
        </div>
        <div className="rounded-md bg-blue-50 p-3 text-xs font-semibold text-gray-700">
          Connect
        </div>
        <div className="rounded-md bg-red-50 p-3 text-xs font-semibold text-gray-700">
          Share
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-400">
        Start with a student need. Build a small, useful solution.
      </p>
    </div>

    <p className="mt-5 text-[9px] uppercase tracking-wider text-gray-500">
      EXAMPLE PROJECT BRIEF · NOT A LAUNCHED PRODUCT
    </p>
  </div>

  {/* Project Description */}
  <div>
    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
      BUILD SOMETHING THAT MATTERS
    </p>

    <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
      Your next project could start on campus.
    </h2>

    <p className="mt-5 leading-relaxed text-gray-500">
      What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
    </p>

    <p className="mt-4 leading-relaxed text-gray-500">
      Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
    </p>

    <a
      href="/overview"
      className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
    >
      Explore project-based learning →
    </a>
  </div>

</section>

{/* Learning Journey Section */}
<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="mb-10">
    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
      MAKE YOUR FIRST MOVE
    </p>

    <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
      You don’t need to have it all figured out.
    </h2>
  </div>

  <div className="grid gap-10 md:grid-cols-3">

    {/* Step 1 */}
    <div>
      <p className="text-4xl font-bold text-blue-600">01</p>

      <div className="my-4 border-t border-gray-200" />

      <h3 className="text-lg font-bold text-gray-900">
        Follow your curiosity
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        Explore the tracks and find a topic you want to understand better.
      </p>
    </div>

    {/* Step 2 */}
    <div>
      <p className="text-4xl font-bold text-blue-600">02</p>

      <div className="my-4 border-t border-gray-200" />

      <h3 className="text-lg font-bold text-gray-900">
        Learn alongside others
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        Join a learning opportunity, ask a question, and share your perspective.
      </p>
    </div>

    {/* Step 3 */}
    <div>
      <p className="text-4xl font-bold text-blue-600">03</p>

      <div className="my-4 border-t border-gray-200" />

      <h3 className="text-lg font-bold text-gray-900">
        Turn learning into action
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        Practice through a project, exchange feedback, and pass something on.
      </p>
    </div>

  </div>
</section>

{/* Community Banner */}
<section className="bg-green-50 py-12">
  <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:gap-10">

    {/* Decorative Icon */}
    <div className="text-6xl text-green-600 md:text-7xl">
      ✦
    </div>

    {/* Banner Text */}
    <div>
      <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
        Different majors. Different starting points.
        <br />
        A place for all of them.
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        You don't have to be the most experienced person in the room.
        Curiosity, kindness, and a willingness to learn are a good place to start.
      </p>
    </div>

  </div>
</section>

{/* FAQ Section */}
<section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3">

  {/* FAQ Heading */}
  <div>
    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
      A FEW GOOD QUESTIONS
    </p>

    <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
      Wondering
      <br />
      where
      <br />
      to begin?
    </h2>

    <a
      href="/contact"
      className="mt-5 inline-block text-sm font-medium text-blue-600 hover:underline"
    >
      Ask us a question →
    </a>
  </div>

  {/* FAQ Questions */}
  <div className="space-y-5 md:col-span-2">

    <details className="group border-b border-gray-200 pb-5" open>
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-gray-900">
        Do I need to know how to code?
        <span className="text-blue-600 transition-transform group-open:rotate-180">
          ⌄
        </span>
      </summary>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.
      </p>
    </details>

    <details className="group border-b border-gray-200 pb-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-gray-900">
        Is this only for computer science students?
        <span className="text-blue-600 transition-transform group-open:rotate-180">
          ⌄
        </span>
      </summary>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        Different disciplines bring different perspectives.
        Explore the overview to find a starting point that fits your interests.
      </p>
    </details>

    <details className="group border-b border-gray-200 pb-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-gray-900">
        How can I find learning opportunities?
        <span className="text-blue-600 transition-transform group-open:rotate-180">
          ⌄
        </span>
      </summary>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.
      </p>
    </details>

  </div>
</section>

{/* Final CTA Section */}
<section className="mx-auto max-w-7xl px-6 py-16">
  <div className="flex flex-col justify-between gap-8 rounded-3xl bg-blue-50 p-8 md:flex-row md:items-center md:p-12">

    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        YOUR NEXT CHAPTER
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        Bring your curiosity.
        <br />
        We’ll build from there.
      </h2>

      <p className="mt-4 text-sm text-gray-500">
        Find a learning track, meet a collaborator, or start a conversation.
      </p>
    </div>

    <div className="flex flex-col items-start gap-4">
      <a
        href="/overview"
        className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
      >
        Explore the overview →
      </a>

      <a
        href="/contact"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        Talk to the community →
      </a>
    </div>

  </div>
</section>

{/* Footer */}
<footer className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-6 py-12">

    <div className="grid gap-10 md:grid-cols-3">

      {/* Brand */}
      <div>

        <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
          A student community for curious minds, shared learning, and technology with purpose.
        </p>
      </div>

      {/* Explore */}
      <div>
        <h4 className="text-sm font-bold text-gray-900">
          Explore
        </h4>

        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/overview" className="hover:text-blue-600">Overview</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-sm font-bold text-gray-900">
          Keep in the loop
        </h4>

        <a
          href="https://www.instagram.com/gdgoc.ugm/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm text-blue-600 hover:underline"
        >
          @gdgoc.ugm
        </a>

        <div className="mt-4 flex gap-4 text-sm text-gray-500">
          <a href="https://www.instagram.com/gdgoc.ugm/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Learn together. Build together.
        </p>
      </div>

    </div>

    {/* Copyright */}
    <div className="mt-12 flex flex-col justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-400 md:flex-row">
      <p>© GDGoC Universitas Gadjah Mada · 2026/2027</p>
      <p>Made for the campus. Open to possibilities.</p>
    </div>

    <div className="mt-6 flex gap-1">
      <span className="h-1 w-8 bg-blue-500"></span>
      <span className="h-1 w-8 bg-red-500"></span>
      <span className="h-1 w-8 bg-yellow-400"></span>
      <span className="h-1 w-8 bg-green-500"></span>
    </div>

  </div>
</footer>

    </>
  )
}

export default Home
