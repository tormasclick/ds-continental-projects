import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Chatbot from "./Chatbot";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <Breadcrumbs />
    <main className="flex-1">{children}</main>
    <Footer />
    <Chatbot />
  </div>
);

export default Layout;
