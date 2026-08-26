export default function LadakhSection() {
  return (
    <section className="bg-white sm:min-h-screen  flex justify-center items-center py-16 px-6 md:px-12 lg:px-20    text-neutral-800 overflow-x-hidden">
      <div className=" mx-auto grid grid-cols-1 w-full  lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column - Main Content */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Section 1: Why Ride Ladakh? */}
          <div className="space-y-4 ">
            <h3 className=" capitalize! ">
              Why Ride Ladakh?
            </h3>
            <div className="space-y-3 leading-relaxed text-base md:text-lg">
              
              <p className=" sm:max-w-[40vw]">
                <span className=" font-semibold!">
                Ladakh is Discover Himalayas' signature high-altitude expedition. 
              </span> 
                 Beyond the Great Himalayan Range lies a landscape shaped by the ancient
                Silk Route, where the Indus Valley, remote communities and Tibetan
                Buddhist culture come together. For over three decades, Discover
                Himalayas has explored and refined these roads, creating a journey that
                balances adventure, acclimatisation and the freedom of the open road.
              </p>
            </div>
          </div>

          {/* Section 2: The Route */}
          <div className="space-y-4 pt-2 w-fit">
            <h3 className="text-3xl md:text-4xl capitalize! font-extrabold text-black tracking-tight">
              The Route
            </h3>
            <p className="leading-relaxed sm:max-w-[40vw] ">
              Beginning in Leh, the route gradually climbs through Ladakh's valleys and
              mountain passes before reaching Nubra, Pangong, Hanle and the
              Changthang Plateau. Carefully paced for acclimatisation, it culminates at
              Umling La, the world's highest motorable road, before returning through
              some of Ladakh's most remarkable landscapes.
            </p>
          </div>

        </div>

       {/* Right Column - Sidebar Cards */}
<div className="lg:col-span-4 space-y-8 ml-auto">
  
  {/* Card 1: Journey Highlights */}
  <div className="border border-neutral-600 bg-white w-full max-w-sm">
    <div className="bg-[#333333] py-6 text-center px-4">
      <h5 className="text-xs font-semibold uppercase tracking-wider text-white">
        Journey Highlights
      </h5>
    </div>
    <div className="p-6">
      <ul className="list-disc list-inside space-y-2 text-neutral-700 text-sm md:text-base leading-snug">
        <p className="text-[1rem]!">12 High Mountain Passes</p>
        <p className="text-[1rem]!">3 High-Altitude Himalayan Lakes</p>
        <p className="text-[1rem]!">Ancient Buddhist Monasteries</p>
        <p className="text-[1rem]!">The Changpa Nomadic Plateau</p>
        <p className="text-[1rem]!">The Indus &amp; Nubra Valleys</p>
      </ul>
    </div>
  </div>

  {/* Card 2: Is This Journey For You? */}
  <div className="border border-neutral-600 bg-white w-full max-w-sm">
    <div className="bg-[#dcdcdc] py-6 px-4 text-center border-b border-neutral-400">
      <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
        Is This Journey For You?
      </h5>
    </div>
    <div className="p-6">
      <p className="text-neutral-700 text-[1rem]! text-sm md:text-base leading-relaxed">
        Perfect for riders who dream of high-altitude adventure, long
        mountain roads and experiencing one of the world's most
        extraordinary landscapes from the saddle.
      </p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}