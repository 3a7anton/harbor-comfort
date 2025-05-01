
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-harbor-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Harbor</h3>
            <p className="text-harbor-100 mb-4">Premium beauty products with a home-made feel.</p>
            <div className="flex space-x-4 text-harbor-100">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/information" className="text-harbor-100 hover:text-white">FAQs</Link></li>
              <li><Link to="/information" className="text-harbor-100 hover:text-white">Shipping</Link></li>
              <li><Link to="/information" className="text-harbor-100 hover:text-white">Returns</Link></li>
              <li><Link to="/information" className="text-harbor-100 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-harbor-100 hover:text-white">All Products</Link></li>
              <li><Link to="/shop" className="text-harbor-100 hover:text-white">Best Sellers</Link></li>
              <li><Link to="/shop" className="text-harbor-100 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-harbor-100 hover:text-white">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-harbor-100 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-harbor-100 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-harbor-100 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-harbor-700 mt-8 pt-6 text-harbor-100 text-sm">
          <p>© {currentYear} Harbor Beauty Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
