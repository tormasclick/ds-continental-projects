import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <Breadcrumbs />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
