
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-harbor-700 text-2xl font-bold">Harbor</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-harbor-600 font-medium">
              Home
            </Link>
            <Link to="/information" className="text-gray-700 hover:text-harbor-600 font-medium">
              Information
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-harbor-600 font-medium">
              Shop
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-harbor-600 font-medium">
              Blog
            </Link>
            <Button className="bg-harbor-600 hover:bg-harbor-700" size="sm">
              Contact Support
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon" className="text-gray-700">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-harbor-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/information" 
                className="text-gray-700 hover:text-harbor-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Information
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-harbor-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-harbor-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button className="bg-harbor-600 hover:bg-harbor-700">
                Contact Support
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
