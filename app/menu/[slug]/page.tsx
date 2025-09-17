// Required for static export in Next.js app router
export function generateStaticParams() {
  return [
    { slug: "hot-coffee" },
    { slug: "cold-coffee" },
    { slug: "hot-tea" },
    { slug: "cold-tea" },
    { slug: "refreshers" },
    { slug: "frappuccino" },
    { slug: "hot-chocolate" },
    { slug: "bottled-beverages" },
    // Breakfast items
    { slug: "egg-pesto-mozzarella-sandwich" },
    { slug: "bacon-gouda-egg-sandwich" },
    { slug: "double-smoked-bacon-cheddar-egg-sandwich" },
    { slug: "sausage-cheddar-egg-sandwich" },
    { slug: "turkey-bacon-cheddar-egg-sandwich" },
    { slug: "impossible-breakfast-sandwich" },
    { slug: "avocado-spread" }
  ];
}
import Navigation from "@/components/Navigation";
import AddToCartButton from "@/components/AddToCartButton";

const productDetails: Record<string, { title: string; description: string; price: string }> = {
  "hot-coffee": {
    title: "Hot Coffee",
    description: "Enjoy our signature hot coffee drinks, freshly brewed and made to order. Choose from a variety of blends and customizations to make your perfect cup.",
  price: "₹399"
  },
  "cold-coffee": {
    title: "Cold Coffee",
    description: "Iced coffee drinks, expertly brewed and served cold for a refreshing experience.",
  price: "₹499"
  },
  "hot-tea": {
    title: "Hot Tea",
    description: "A selection of premium hot teas, steeped to perfection.",
  price: "₹499"
  },
  "cold-tea": {
    title: "Cold Tea",
    description: "Chilled teas, perfect for a cool and refreshing break.",
  price: "₹399"
  },
  "refreshers": {
    title: "Refreshers",
    description: "Fruity, vibrant Starbucks Refreshers® beverages.",
  price: "₹599"
  },
  "frappuccino": {
    title: "Frappuccino®",
    description: "Blended beverages with coffee, milk, and ice for a creamy treat.",
  price: "₹599"
  },
  "hot-chocolate": {
    title: "Hot Chocolate",
    description: "Rich, creamy hot chocolate for a comforting treat.",
  price: "₹299"
  },
  "bottled-beverages": {
    title: "Bottled Beverages",
    description: "Ready-to-drink bottled beverages for on-the-go refreshment.",
  price: "₹499"
  },
  // Breakfast items
  "egg-pesto-mozzarella-sandwich": {
    title: "Egg, Pesto & Mozzarella Sandwich",
    description: "Cage-free eggs, creamy mozzarella, and a vibrant basil pesto on a toasted artisan roll.",
  price: "₹499"
  },
  "bacon-gouda-egg-sandwich": {
    title: "Bacon, Gouda & Egg Sandwich",
    description: "Applewood-smoked bacon, aged Gouda, and a cage-free egg on an artisan roll.",
  price: "₹599"
  },
  "double-smoked-bacon-cheddar-egg-sandwich": {
    title: "Double-Smoked Bacon, Cheddar & Egg Sandwich",
    description: "Thick-cut bacon, cheddar cheese, and a cage-free egg on a croissant bun.",
  price: "₹499"
  },
  "sausage-cheddar-egg-sandwich": {
    title: "Sausage, Cheddar & Egg Sandwich",
    description: "Savory sausage, cheddar cheese, and a cage-free egg on an English muffin.",
  price: "₹399"
  },
  "turkey-bacon-cheddar-egg-sandwich": {
    title: "Turkey Bacon, Cheddar & Egg Sandwich",
    description: "Reduced-fat turkey bacon, cheddar cheese, and a cage-free egg on a wheat English muffin.",
  price: "₹699"
  },
  "impossible-breakfast-sandwich": {
    title: "Impossible™ Breakfast Sandwich",
    description: "Plant-based sausage, cage-free egg, and cheddar cheese on an artisan ciabatta bun.",
  price: "₹500"
  },
  "avocado-spread": {
    title: "Avocado Spread",
    description: "Fresh, creamy avocado with a touch of sea salt, garlic, and lime.",
  price: "₹250"
  }
};

export default function ProductOrderPage({ params }: { params: { slug: string } }) {
  const details = productDetails[params.slug] || {
    title: "Product",
    description: "Product details coming soon.",
  price: "₹0.00"
  };

  return (
    <>
      <Navigation />
      <div className="pt-24 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-coffee-dark">{details.title}</h1>
        <p className="text-lg text-coffee-dark/80 mb-8">{details.description}</p>
        <div className="bg-white rounded-xl shadow p-8 mb-8">
          <span className="block text-starbucks-green font-bold mb-2 text-2xl">{details.price}</span>
          <AddToCartButton slug={params.slug} title={details.title} price={details.price} />
        </div>
      </div>
    </>
  );
}
