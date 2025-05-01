
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SampleForm from "@/components/SampleForm";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-harbor-700 to-harbor-900 text-white">
          <div className="container-custom py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <h1 className="h1">Beauty Products with a Home-Made Feel</h1>
                <p className="text-xl text-harbor-100">
                  Premium quality beauty products made with care. 
                  Experience the Harbor difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/shop">Shop Now</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/10"
                    asChild
                  >
                    <a href="#support">Customer Support</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Beauty products arranged on a table" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-harbor-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="h2 text-harbor-800 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                At Harbor, we're committed to creating products that prioritize quality, 
                comfort, and care for our customers and their families.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mx-auto mb-4">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-harbor-800 mb-3">Quality First</h3>
                  <p className="text-gray-600">
                    We never compromise on quality. Each product is carefully formulated 
                    with premium ingredients for superior results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mx-auto mb-4">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-harbor-800 mb-3">Family-Focused</h3>
                  <p className="text-gray-600">
                    As parents ourselves, we design products with families in mind, 
                    ensuring they're safe, effective, and bring comfort to your home.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mx-auto mb-4">
                    <Star size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-harbor-800 mb-3">Customer Support</h3>
                  <p className="text-gray-600">
                    We believe in exceptional service. Our dedicated support team is 
                    always ready to assist you with any questions or concerns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SampleForm />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="h2 text-harbor-800">Need Help? We're Here For You</h2>
                <p className="text-lg text-gray-600">
                  Our dedicated customer support team is ready to assist you with any 
                  questions or concerns about our products.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mr-4 mt-1">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-harbor-700">Browse Our Information</h3>
                      <p className="text-gray-600">Check our <Link to="/information" className="text-harbor-600 hover:underline">information page</Link> for answers to common questions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mr-4 mt-1">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-harbor-700">Contact Our Support Team</h3>
                      <p className="text-gray-600">Can't find what you need? Our support team is just a click away.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mr-4 mt-1">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-harbor-700">Try Before You Buy</h3>
                      <p className="text-gray-600">Request a free sample to experience our quality firsthand.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Customer support representative" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-harbor-600 text-white py-16">
          <div className="container-custom text-center">
            <h2 className="h2 mb-6">Ready to Experience Harbor Quality?</h2>
            <p className="text-lg text-harbor-100 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have made Harbor products 
              a part of their daily routine.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <Link to="/shop">Shop Our Collection</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
