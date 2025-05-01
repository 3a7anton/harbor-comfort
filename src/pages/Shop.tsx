
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "Hydrating Facial Cream",
    description: "Deeply moisturizing cream for all skin types.",
    price: 29.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1745141063798-7fa04698ea80?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Gentle Cleansing Wash",
    description: "Soft, foaming cleanser suitable for sensitive skin.",
    price: 24.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Revitalizing Serum",
    description: "Powerful anti-aging serum with natural extracts.",
    price: 39.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Soothing Bath Salts",
    description: "Relaxing bath salts with essential oils for comfort.",
    price: 19.99,
    rating: 4.9,
    image: "https://plus.unsplash.com/premium_photo-1679064286563-d686f06aed37?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Nourishing Hair Mask",
    description: "Deep conditioning treatment for damaged hair.",
    price: 34.99,
    rating: 4.6,
    image: "https://plus.unsplash.com/premium_photo-1721203654219-d353fbc7da5c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Family Care Bundle",
    description: "Collection of our best-selling family products.",
    price: 89.99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1594125311687-3b1b3eafa9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = [
  "All Products",
  "Face Care",
  "Hair Care",
  "Body Care",
  "Family Sets",
  "New Arrivals"
];

const Shop = () => {
  const addToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-harbor-700 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="h1 mb-4">Shop Our Products</h1>
            <p className="text-xl text-harbor-100 max-w-2xl mx-auto">
              Discover our premium beauty products made with care and quality.
            </p>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container-custom">
            <div className="flex overflow-x-auto gap-4 py-2 hide-scrollbar">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-harbor-600" : "text-harbor-700 border-harbor-200"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} className={product.rating < 5 ? "opacity-50" : ""} />
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-harbor-800">${product.price}</span>
                      <Button 
                        size="sm" 
                        className="bg-harbor-600 hover:bg-harbor-700"
                        onClick={() => addToCart(product.name)}
                      >
                        <ShoppingCart size={16} className="mr-1" /> Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="mx-1 border-harbor-200 text-harbor-700">1</Button>
              <Button variant="outline" className="mx-1 border-harbor-200 text-harbor-700">2</Button>
              <Button variant="outline" className="mx-1 border-harbor-200 text-harbor-700">3</Button>
              <Button variant="outline" className="mx-1 border-harbor-200 text-harbor-700">Next</Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-harbor-50 py-16">
          <div className="container-custom text-center">
            <h2 className="h2 text-harbor-800 mb-4">Can't Find What You Need?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our customer support team is ready to help you find the perfect product for your needs.
            </p>
            <Button className="bg-harbor-600 hover:bg-harbor-700" size="lg">Contact Support</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
