
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

const Information = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-harbor-700 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="h1 mb-4">Information & Support</h1>
            <p className="text-xl text-harbor-100 max-w-2xl mx-auto">
              Everything you need to know about Harbor products and services.
            </p>
          </div>
        </section>
        
        {/* Company Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="h2 text-harbor-800 mb-6">About Harbor</h2>
              <p className="text-gray-700 mb-4">
                Harbor is a trusted beauty product brand focused on creating high-quality, 
                home-made feeling products for families. We started with a simple mission: 
                to provide beauty products that combine professional quality with the comfort 
                and care of home-made solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Our products are formulated with carefully selected ingredients, and every 
                item goes through rigorous testing to ensure it meets our high standards. 
                We believe beauty should be accessible, comfortable, and safe for everyone 
                in the family.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-8">
                <div className="bg-harbor-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-harbor-800 mb-3">Our Stores</h3>
                  <p className="text-gray-700 mb-4">
                    We have over 100 physical stores across the country. Find your nearest 
                    Harbor store to experience our products firsthand.
                  </p>
                  <Button className="bg-harbor-600 hover:bg-harbor-700">Find a Store</Button>
                </div>
                <div className="bg-harbor-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-harbor-800 mb-3">Our Promise</h3>
                  <p className="text-gray-700 mb-4">
                    We stand behind every product we sell with our satisfaction guarantee. 
                    If you're not completely satisfied, we're here to make it right.
                  </p>
                  <Button variant="outline" className="border-harbor-600 text-harbor-600 hover:bg-harbor-50">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="h2 text-harbor-800 mb-6 text-center">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-harbor-800 hover:text-harbor-600 py-4">
                    How do I return a product?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    You can return any unused and unopened products within 30 days of purchase. 
                    For online orders, visit your account page and start a return. For in-store 
                    purchases, bring the product and receipt to any Harbor store.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-harbor-800 hover:text-harbor-600 py-4">
                    Are your products suitable for sensitive skin?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Most of our products are formulated to be gentle on sensitive skin. 
                    We clearly label all ingredients so you can check for potential allergens. 
                    Our Gentle Care line is specifically designed for those with extra 
                    sensitive skin concerns.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-harbor-800 hover:text-harbor-600 py-4">
                    How can I track my order?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Once your order ships, you'll receive a confirmation email with a tracking 
                    number. You can also log into your account on our website to view order 
                    status and tracking information.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-harbor-800 hover:text-harbor-600 py-4">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Yes, we ship to most countries worldwide. International shipping rates 
                    and delivery times vary by location. During checkout, you'll see the 
                    shipping options and costs for your specific country.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-harbor-800 hover:text-harbor-600 py-4">
                    Are your products tested on animals?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    No, Harbor is proudly cruelty-free. We never test our products on animals, 
                    and we work only with suppliers who uphold the same ethical standards.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="h2 text-harbor-800 mb-4">Contact Our Support Team</h2>
              <p className="text-gray-600">
                Can't find what you're looking for? Our customer support team is 
                ready to help with any questions or concerns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mx-auto mb-4">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold text-harbor-800 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available Monday to Friday, 9am to 5pm EST.
                </p>
                <p className="text-xl font-semibold text-harbor-600">1-800-HARBOR-1</p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-harbor-100 rounded-full flex items-center justify-center text-harbor-600 mx-auto mb-4">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold text-harbor-800 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email anytime. We aim to respond within 24 hours.
                </p>
                <p className="text-xl font-semibold text-harbor-600">support@harborbeauty.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Information;
