import { Link } from "react-router-dom";
import logoDcp from "@/assets/logo-dcp.png";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <img src={logoDcp} alt="DS Continental Projects" className="h-12 w-auto mb-4 brightness-200" />
          <p className="text-sm opacity-80 leading-relaxed">
            Energising the Continental Economy through integrated industrial solutions across Africa.
          </p>
        </div>
        <div>
          <h4 className="font-subheading font-semibold mb-4 text-sm uppercase tracking-wider">Our Companies</h4>
          <div className="space-y-2 text-sm opacity-80">
            <Link to="/companies/motors" className="block hover:opacity-100 transition-opacity">DS Continental Motors</Link>
            <Link to="/companies/security" className="block hover:opacity-100 transition-opacity">DS Continental Security</Link>
            <Link to="/companies/trading" className="block hover:opacity-100 transition-opacity">DS Continental Trading</Link>
          </div>
        </div>
        <div>
          <h4 className="font-subheading font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <div className="space-y-2 text-sm opacity-80">
            <Link to="/about" className="block hover:opacity-100 transition-opacity">About Us</Link>
            <Link to="/projects" className="block hover:opacity-100 transition-opacity">Projects</Link>
            <Link to="/partnerships" className="block hover:opacity-100 transition-opacity">Partnerships</Link>
            <Link to="/insights" className="block hover:opacity-100 transition-opacity">Insights</Link>
          </div>
        </div>
        <div>
          <h4 className="font-subheading font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="space-y-2 text-sm opacity-80">
            <p>Nairobi, Kenya</p>
            <p>info@dscontinental.com</p>
            <p>+254 700 000 000</p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © {new Date().getFullYear()} DS Continental Projects. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
