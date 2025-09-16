"use client";

export default function GiftCardSection() {
  return (
    <section className="w-full bg-[#f9f6ee] text-coffee-dark py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-4">Gift cards</h1>
        <h2 className="text-sm font-semibold text-coffee-dark/70 mb-6 tracking-widest">FEATURED</h2>
        {/* Featured Cards */}
        <div className="flex flex-wrap gap-6 mb-8">
          {/* Replace src with your own images */}
          <img src="/giftcard1.png" alt="Gift Card 1" className="rounded-xl shadow-lg w-72 h-44 object-cover bg-white" />
          <img src="/giftcard2.png" alt="Gift Card 2" className="rounded-xl shadow-lg w-72 h-44 object-cover bg-white" />
          <img src="/giftcard3.png" alt="Gift Card 3" className="rounded-xl shadow-lg w-72 h-44 object-cover bg-white" />
          <img src="/giftcard4.png" alt="Gift Card 4" className="rounded-xl shadow-lg w-72 h-44 object-cover bg-white" />
        </div>
        {/* Info Banner */}
        <div className="flex items-center bg-[#eaf5eb] rounded-lg p-4 mb-8">
          <span className="mr-3 text-xl">🎁</span>
          <span className="text-coffee-dark/80">Effortlessly send up to 10 eGifts per purchase. Select a design to start!</span>
        </div>
        {/* Received a gift card */}
        <div className="bg-[#eaf5eb] rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <span className="font-semibold text-coffee-dark text-lg mr-2">Received a gift card?</span>
            <span className="text-coffee-dark/70">Earns 2★ per $1</span>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-coffee-dark/10 px-4 py-2 rounded-full font-semibold text-coffee-dark hover:bg-coffee-dark hover:text-white transition-all duration-200">Add or Reload</button>
            <button className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-coffee-dark transition-all duration-200">Check balance</button>
          </div>
        </div>
        {/* Fall Section */}
        <h3 className="text-xs font-bold text-coffee-dark/60 mb-4 tracking-widest uppercase">Fall</h3>
        <div className="flex flex-wrap gap-6">
          <img src="/giftcard5.png" alt="Gift Card 5" className="rounded-xl shadow-lg w-72 h-44 object-cover bg-white" />
          <img src="/giftcard3.png" alt="Gift Card 3" className="rounded-xl shadow-lg w-72 h-44 object-cover bg-white" />
        </div>
      </div>
    </section>
  );
}
