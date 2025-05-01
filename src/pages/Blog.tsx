
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Beauty Tips for Busy Parents",
    excerpt: "Discover how to maintain your beauty routine when you're always on the go with these simple tips.",
    date: "May 1, 2025",
    author: "Emma Johnson",
    image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Beauty Tips"
  },
  {
    id: 2,
    title: "Understanding Skincare Ingredients: A Parent's Guide",
    excerpt: "Learn which ingredients to look for and which to avoid in your family's skincare products.",
    date: "April 28, 2025",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1556227834-09f1a38f262f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Skincare"
  },
  {
    id: 3,
    title: "Creating a Family Self-Care Routine",
    excerpt: "How to incorporate self-care into your family's schedule for a happier, healthier home.",
    date: "April 23, 2025",
    author: "Sarah Williams",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Family Care"
  },
  {
    id: 4,
    title: "The Importance of Clean Beauty for Your Family",
    excerpt: "Why choosing clean beauty products matters for your family's health and well-being.",
    date: "April 19, 2025",
    author: "David Roberts",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Clean Beauty"
  },
  {
    id: 5,
    title: "Harbor's Commitment to Sustainable Packaging",
    excerpt: "Learn about our journey towards more sustainable packaging solutions and reducing environmental impact.",
    date: "April 15, 2025",
    author: "Olivia Green",
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability"
  },
  {
    id: 6,
    title: "Product Spotlight: Our New Family Care Line",
    excerpt: "Introducing our newest collection designed specifically for the needs of modern families.",
    date: "April 10, 2025",
    author: "Thomas Miller",
    image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Product News"
  }
];

const categories = [
  "All Posts",
  "Beauty Tips",
  "Skincare",
  "Family Care",
  "Clean Beauty",
  "Sustainability"
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-harbor-700 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="h1 mb-4">Harbor Blog</h1>
            <p className="text-xl text-harbor-100 max-w-2xl mx-auto">
              Tips, guides, and updates from the Harbor Beauty community.
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
        
        {/* Featured Post */}
        <section className="py-12">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Family self-care routine"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-harbor-100 text-harbor-700">
                  Family Care
                </div>
                <h2 className="h2 text-harbor-800">Creating a Self-Care Routine for the Whole Family</h2>
                <p className="text-gray-600">
                  In today's fast-paced world, it's essential to make time for self-care—not just 
                  for yourself, but for everyone in your family. Learn how to create routines that 
                  benefit all family members.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>May 1, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>Emma Johnson</span>
                  </div>
                </div>
                <Button className="bg-harbor-600 hover:bg-harbor-700 mt-2">Read Article</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="h2 text-harbor-800 mb-8">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-harbor-100 text-harbor-700 mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-harbor-200 text-harbor-700 hover:bg-harbor-50">
                      Read More
                    </Button>
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
        
        {/* Newsletter */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="h2 text-harbor-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-8">
                Stay updated with the latest beauty tips, product launches, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                />
                <Button className="bg-harbor-600 hover:bg-harbor-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
