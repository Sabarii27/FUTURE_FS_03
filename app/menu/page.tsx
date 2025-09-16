import Navigation from "@/components/Navigation";
import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">{/* Add padding to offset fixed navbar */}
        <MenuSection />
      </div>
      <footer className="w-full bg-coffee-darker text-cream/60 border-t border-cream/10 py-6 text-center text-sm">
        © 2024 Starbucks Corporation. All rights reserved.
      </footer>
    </>
  );
}
