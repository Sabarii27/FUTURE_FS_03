import Navigation from "@/components/Navigation";
import AddToCartButton from "@/components/AddToCartButton";

export default function HotCoffeePage() {
  return (
    <>
      <Navigation />
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-coffee-dark">Hot Coffee</h1>
        <p className="text-lg text-coffee-dark/80 mb-8">Enjoy our signature hot coffee drinks, freshly brewed and made to order. Choose from a variety of blends and customizations to make your perfect cup.</p>
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-coffee-dark">Caffè Americano</h2>
          <p className="text-coffee-dark/80 mb-2">Rich, full-bodied espresso with hot water for a light layer of crema.</p>
          <span className="block text-starbucks-green font-bold mb-2">₹3.25</span>
          <AddToCartButton slug="caffe-americano" title="Caffè Americano" price="₹3.25" />
        </div>
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-coffee-dark">Caffè Latte</h2>
          <p className="text-coffee-dark/80 mb-2">Espresso with steamed milk and a light layer of foam.</p>
          <span className="block text-starbucks-green font-bold mb-2">₹3.95</span>
          <AddToCartButton slug="caffe-latte" title="Caffè Latte" price="₹3.95" />
        </div>
        {/* Add more drinks as needed */}
      </div>
    </>
  );
}
