import Navigation from "@/components/Navigation";
import GiftCardSection from "@/components/GiftCardSection";

export default function GiftCardsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <GiftCardSection />
      </div>
      <footer className="w-full bg-coffee-darker text-cream/60 border-t border-cream/10 py-6 text-center text-sm">
        © 2024 Starbucks Corporation. All rights reserved.
      </footer>
    </>
  );
}
