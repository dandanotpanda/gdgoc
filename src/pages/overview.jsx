import { useEffect, useState } from "react";
function Overview() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formats, setFormats] = useState([]);
  const [journey, setJourney] = useState([]);





  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          "https://gdgoc-ugm-api.vercel.app/api/tracks"
        );

        const result = await response.json();

        setTracks(result.data);
        console.log("Data tracks:", result.data);
      } catch (err) {
        setError("Gagal mengambil data tracks");
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);
  useEffect(() => {
  const fetchFormats = async () => {
    try {
      const response = await fetch(
        "https://gdgoc-ugm-api.vercel.app/api/formats"
      );

      const result = await response.json();

      setFormats(result.data);

      console.log("Data formats:", result.data);
    } catch (err) {
      setError("Gagal mengambil data formats");
    }
  };

  fetchFormats();
}, []);
useEffect(() => {
  const fetchJourney = async () => {
    try {
      const response = await fetch(
        "https://gdgoc-ugm-api.vercel.app/api/journey"
      );
      const result = await response.json();
      setJourney(result.data);
      console.log("Data journey:", result.data);
    } catch (err) {
      setError("Gagal mengambil data journey");
    }
  };

  fetchJourney();
}, []);



  
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-3 md:grid-cols-[1.5fr_0.8fr] md:py-5">
        <div>
           <div className="flex items-center">
  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
  <p className="text-[10px] font-medium tracking-wide text-gray-500">
    OVERVIEW · PROGRAMS & LEARNING TRACKS
  </p>
</div>
          
         

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Find your spark.
            <br />
            <span className="text-blue-600">Build your own path.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-500">
            Explore how research, creativity, and development connect.
            Start with one interest. Grow through 
            <br/>practice and the
            people around you.
          </p>
        </div>

      <div className="flex justify-center">

    <img
      src="src/assets/overview.png"
            alt="GDGoC UGM illustration"
            className="h-auto w-full max-w-[620px] rounded-2xl object-contain"
    />
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
           <div className="flex items-center">
  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
  <p className="text-[10px] font-medium tracking-wide text-gray-500">
  EXPLORE YOUR INTERESTS
  </p>
        </div>
        <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Three ways in. Plenty of ways 
          <br/>forward.
        </h2>

        <p className="mt-4 text-sm text-gray-500">
          These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
        </p>

       
<div className="mt-10 grid gap-5 md:grid-cols-3">

   {/* Research Card */}
<div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
  <div className="relative z-10 aspect-[400/232] w-full shrink-0 rounded-t-2xl bg-blue-50">
    <img
      src="/src/assets/research.png"
      alt="Research and discovery"
      className="absolute left-0 top-0 z-20 h-auto w-full object-contain"
    />
  </div>

  <div className="relative z-0 flex flex-1 flex-col p-5">
    <p className="text-[10px] font-semibold uppercase text-blue-600">
      {tracks[0]?.tagline}
    </p>
    <h3 className="mt-2 text-xl font-bold text-gray-900">
      {tracks[0]?.name}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-gray-500">
      {tracks[0]?.description}
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
<div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
  <div className="relative z-10 aspect-[400/232] w-full shrink-0 rounded-t-2xl bg-amber-50">
    <img
      src="/src/assets/design.png"
      alt="Design and creativity"
      className="absolute left-0 top-0 z-20 h-auto w-full object-contain"
    />
  </div>

  <div className="relative z-0 flex flex-1 flex-col p-5">
    <p className="text-[10px] font-semibold uppercase text-amber-600">
      {tracks[1]?.tagline}
    </p>
    <h3 className="mt-2 text-xl font-bold text-gray-900">
      {tracks[1]?.name}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-gray-500">
      {tracks[1]?.description}
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
<div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
  <div className="relative z-10 aspect-[400/232] w-full shrink-0 rounded-t-2xl bg-green-50">
    <img
      src="/src/assets/development.png"
      alt="Development"
      className="absolute left-0 top-0 z-20 h-auto w-full object-contain"
    />
  </div>

  <div className="relative z-0 flex flex-1 flex-col p-5">
    <p className="text-[10px] font-semibold uppercase text-green-600">
      {tracks[2]?.tagline}
    </p>
    <h3 className="mt-2 text-xl font-bold text-gray-900">
      {tracks[2]?.name}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-gray-500">
      {tracks[2]?.description}
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
           <div className="flex items-center">
  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
  <p className="text-[10px] font-medium tracking-wide text-gray-500">
    WAYS TO LEARN
  </p>
</div>
          
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            The format changes. The curiosity 
            <br/>stays.
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Explore the kinds of experiences that help you move from understanding to doing.
          </p>

         <div className="mt-10 grid gap-5 md:grid-cols-2">

  {/* Study Groups */}
  <article className="flex gap-5 rounded-2xl bg-white p-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-500">
       <div className="text-blue-500">
                <img
            src="/src/assets/icon study.png"
            alt="study illustration"
            />
    </div>
    </div>
    <div>
      <h3 className="text-lg font-bold"> {formats[0]?.name} </h3>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">
       {formats[0]?.description}
      </p>
      <p className="mt-3 text-[10px] font-semibold text-blue-600">
        Best for · Learning the fundamentals
      </p>
    </div>
  </article>

  {/* Hands-on Workshops */}
  <article className="flex gap-5 rounded-2xl bg-white p-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg font-bold text-emerald-500">
       <div className="text-blue-500">
                <img
            src="/src/assets/icon hands on.png"
            alt="study illustration"
            />
    </div>
    </div>
    <div>
      <h3 className="text-lg font-bold">{formats[2]?.name}</h3>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">
        {formats[2]?.description}
      </p>
      <p className="mt-3 text-[10px] font-semibold text-blue-600">
        Best for · Trying something new
      </p>
    </div>
  </article>

  {/* Project Circles */}
  <article className="flex gap-5 rounded-2xl bg-white p-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-lg font-bold text-amber-500">
      <div className="text-blue-500">
                <img
            src="/src/assets/icon share.png"
            alt="study illustration"
            />
    </div>
    </div>
    <div>
      <h3 className="text-lg font-bold">{formats[1]?.name}</h3>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">
        {formats[1]?.description}
      </p>
      <p className="mt-3 text-[10px] font-semibold text-blue-600">
        Best for · Putting skills into practice
      </p>
    </div>
  </article>

  {/* Knowledge Sharing */}
  <article className="flex gap-5 rounded-2xl bg-white p-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-lg font-bold text-rose-500">
      <div className="text-blue-500">
                <img
            src="/src/assets/know.png"
            alt="study illustration"
            />
    </div>
    </div>
    <div>
      <h3 className="text-lg font-bold">{formats[3]?.name}</h3>
      <p className="mt-2 text-xs leading-relaxed text-gray-500">
        {formats[3]?.description}
      </p>
      <p className="mt-3 text-[10px] font-semibold text-blue-600">
        Best for · Exchanging perspectives
      </p>
    </div>
  </article>

</div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="scroll-mt-16 mx-auto max-w-7xl px-6 py-20">
         <div className="flex items-center">
  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
  <p className="text-[10px] font-medium tracking-wide text-gray-500">
    PROGRESS, NOT PERFECTION
  </p>
</div>
       

        <h2 className="mt-5 text-3xl font-bold md:text-4xl">
          A journey you can keep building on.
        </h2>

       <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">

  {/* Discover */}
  <article>
    <p className="border-b border-gray-200 pb-4 text-3xl font-bold text-blue-600">
      01
    </p>
    <h3 className="mt-5 text-lg font-bold">{journey[0]?.title}</h3>
    <p className="mt-3 text-xs leading-relaxed text-gray-500">
      {journey[0]?.description}
    </p>
  </article>

  {/* Practice */}
  <article>
    <p className="border-b border-gray-200 pb-4 text-3xl font-bold text-blue-600">
      02
    </p>
    <h3 className="mt-5 text-lg font-bold">{journey[1]?.title}</h3>
    <p className="mt-3 text-xs leading-relaxed text-gray-500">
      {journey[1]?.description}
    </p>
  </article>

  {/* Build */}
  <article>
    <p className="border-b border-gray-200 pb-4 text-3xl font-bold text-blue-600">
      03
    </p>
    <h3 className="mt-5 text-lg font-bold">{journey[2]?.title}</h3>
    <p className="mt-3 text-xs leading-relaxed text-gray-500">
     {journey[2]?.description} 
    </p>
  </article>

  {/* Share */}
  <article>
    <p className="border-b border-gray-200 pb-4 text-3xl font-bold text-blue-600">
      04
    </p>
    <h3 className="mt-5 text-lg font-bold">{journey[3]?.title}</h3>
    <p className="mt-3 text-xs leading-relaxed text-gray-500">
      {journey[3]?.description}
    </p>
  </article>

</div>
      </section>

      {/* STARTING POINT */}
      <section id="starting" className="scroll-mt-16 bg-amber-50 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <div className="flex items-center">
  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
  <p className="text-[10px] font-medium tracking-wide text-gray-500">
    START WHERE YOU ARE
  </p>
</div>
            <h2 className="mt-4 text-2xl font-bold">
              New to tech?
              <br />
              That's a starting point,
              <br/> too.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-gray-600">
              You don't need a finished portfolio or the perfect track choice.
              Pick a topic you're curious
              <br/> about. If you're unsure, tell us
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
            <div className="flex items-center">
  <span className="mr-2 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
  <p className="text-[10px] font-medium tracking-wide text-gray-500">
    YOUR NEXT CHAPTER
  </p>
</div> 
           
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

    
       
    </main>
  )
}

export default Overview 