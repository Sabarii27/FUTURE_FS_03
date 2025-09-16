import Navigation from "@/components/Navigation";
import RewardsSection from "@/components/RewardsSection";

export default function RewardsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <RewardsSection />
      </div>
      <footer className="w-full bg-coffee-darker text-cream/60 border-t border-cream/10 py-6 text-center text-sm">
        © 2024 Starbucks Corporation. All rights reserved.
      </footer>
    </>
  );
}
