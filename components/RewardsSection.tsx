"use client";

export default function RewardsSection() {
  return (
    <section id="rewards" className="w-full bg-[#f9f6ee] text-coffee-dark py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Getting started is easy</h2>
      <p className="text-lg text-center mb-16">Earn Stars and get rewarded in a few easy steps.</p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-2 border-starbucks-green flex items-center justify-center text-2xl font-bold text-starbucks-green mb-6">1</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Create an account</h3>
          <p className="text-base text-center text-coffee-dark/80">
            To get started, <a href="#" className="text-starbucks-green underline">join now</a>. You can also <a href="#" className="text-starbucks-green underline">join in the app</a> to get access to the full range of Starbucks® Rewards benefits.
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-2 border-starbucks-green flex items-center justify-center text-2xl font-bold text-starbucks-green mb-6">2</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Order and pay how you’d like</h3>
          <p className="text-base text-center text-coffee-dark/80">
            Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="#" className="text-starbucks-green underline">Learn how</a>
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-2 border-starbucks-green flex items-center justify-center text-2xl font-bold text-starbucks-green mb-6">3</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Earn Stars, get Rewards</h3>
          <p className="text-base text-center text-coffee-dark/80">
            As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </div>
      </div>
      {/* Endless Extras Section */}
  <section className="w-full bg-white text-coffee-dark py-20 flex flex-col items-center shadow rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Endless Extras</h2>
        <p className="text-lg text-center mb-12 max-w-2xl">
          Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Fun freebies */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-white/80 h-32 w-32 flex items-center justify-center shadow-md">
                <img src="/rewards-fun-freebies.png" alt="Fun freebies" className="h-20 w-20 object-contain" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Fun freebies</h3>
            <p className="text-base text-center text-coffee-dark/80 mb-4">
              Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
            </p>
            <a href="#" className="text-starbucks-green underline font-medium">Learn more</a>
          </div>
          {/* Order & pay ahead */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-white/80 h-32 w-32 flex items-center justify-center shadow-md">
                <img src="/rewards-order-ahead.png" alt="Order & pay ahead" className="h-20 w-20 object-contain" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Order & pay ahead</h3>
            <p className="text-base text-center text-coffee-dark/80 mb-4">
              Master the art of ordering ahead with saved favorites and payment methods.
            </p>
            <a href="#" className="text-starbucks-green underline font-medium">Learn more</a>
          </div>
          {/* Get to free faster */}
          <div className="flex flex-col items-center">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-white/80 h-32 w-32 flex items-center justify-center shadow-md">
                <img src="/rewards-get-faster.png" alt="Get to free faster" className="h-20 w-20 object-contain" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Get to free faster</h3>
            <p className="text-base text-center text-coffee-dark/80 mb-4">
              Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
            </p>
            <a href="#" className="text-starbucks-green underline font-medium">Learn more</a>
          </div>
        </div>
      </section>
      {/* How to Earn Stars Section */}
      <section className="w-full bg-[#f9f6ee] text-coffee-dark py-20 flex flex-col items-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Cash or card, you earn Stars</h2>
        <p className="text-lg text-center mb-12 max-w-2xl">
          No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 1★ per dollar */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-coffee-dark mb-1">1★ per dollar</span>
              <span className="text-base text-coffee-dark/80 mb-2">Pay as you go</span>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-3">
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#00754A"/><rect x="12" y="16" width="32" height="24" rx="4" fill="#fff"/><rect x="16" y="20" width="8" height="8" rx="2" fill="#00754A"/><rect x="32" y="20" width="8" height="8" rx="2" fill="#00754A"/></svg>
                </div>
                <h4 className="font-semibold text-lg mb-1 text-center">Scan and pay separately</h4>
                <p className="text-center text-coffee-dark/80">Use cash or credit/debit card at the register.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-3">
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#00754A"/><rect x="16" y="16" width="24" height="32" rx="4" fill="#fff"/><rect x="20" y="36" width="16" height="4" rx="2" fill="#00754A"/></svg>
                </div>
                <h4 className="font-semibold text-lg mb-1 text-center">Save payment in the app</h4>
                <p className="text-center text-coffee-dark/80">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
              </div>
            </div>
          </div>
          {/* 2★ per dollar */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-coffee-dark mb-1">2★ per dollar</span>
              <span className="text-base text-coffee-dark/80 mb-2">Add funds in the app</span>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-3">
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#00754A"/><circle cx="28" cy="28" r="12" fill="#fff"/><text x="28" y="33" textAnchor="middle" fontSize="24" fill="#00754A" fontWeight="bold">+$</text></svg>
                </div>
                <h4 className="font-semibold text-lg mb-1 text-center">Preload</h4>
                <p className="text-center text-coffee-dark/80">To save time and earn Stars twice as fast, add money to your digital Starbucks Card.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-3">
                  <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><rect width="56" height="56" rx="12" fill="#00754A"/><rect x="16" y="16" width="24" height="24" rx="4" fill="#fff"/><rect x="24" y="24" width="8" height="8" rx="2" fill="#00754A"/></svg>
                </div>
                <h4 className="font-semibold text-lg mb-1 text-center">Register your gift card</h4>
                <p className="text-center text-coffee-dark/80">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
