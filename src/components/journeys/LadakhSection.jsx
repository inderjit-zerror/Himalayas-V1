export default function LadakhSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-10    text-neutral-800">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column - Main Content */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Section 1: Why Ride Ladakh? */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Why Ride Ladakh?
            </h2>
            <div className="space-y-3 leading-relaxed text-neutral-700 text-base md:text-lg">
              <p className="font-bold text-black">
                Ladakh is Discover Himalayas' signature high-altitude expedition.
              </p>
              <p>
                Beyond the Great Himalayan Range lies a landscape shaped by the ancient
                Silk Route, where the Indus Valley, remote communities and Tibetan
                Buddhist culture come together. For over three decades, Discover
                Himalayas has explored and refined these roads, creating a journey that
                balances adventure, acclimatisation and the freedom of the open road.
              </p>
            </div>
          </div>

          {/* Section 2: The Route */}
          <div className="space-y-4 pt-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              The Route
            </h2>
            <p className="leading-relaxed text-neutral-700 text-base md:text-lg">
              Beginning in Leh, the route gradually climbs through Ladakh's valleys and
              mountain passes before reaching Nubra, Pangong, Hanle and the
              Changthang Plateau. Carefully paced for acclimatisation, it culminates at
              Umling La, the world's highest motorable road, before returning through
              some of Ladakh's most remarkable landscapes.
            </p>
          </div>

        </div>

        {/* Right Column - Sidebar Cards */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Card 1: Journey Highlights */}
          <div className="border border-neutral-600 bg-white">
            <div className="bg-[#333333] py-2 px-4 text-center">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Journey Highlights
              </h3>
            </div>
            <div className="p-6">
              <ul className="list-disc list-inside space-y-2 text-neutral-700 text-sm md:text-base leading-snug">
                <li>12 High Mountain Passes</li>
                <li>3 High-Altitude Himalayan Lakes</li>
                <li>Ancient Buddhist Monasteries</li>
                <li>The Changpa Nomadic Plateau</li>
                <li>The Indus &amp; Nubra Valleys</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Is This Journey For You? */}
          <div className="border border-neutral-600 bg-white">
            <div className="bg-[#dcdcdc] py-2 px-4 text-center border-b border-neutral-400">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Is This Journey For You?
              </h3>
            </div>
            <div className="p-6">
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
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