import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorGlow from "../effects/CursorGlow";

export default function Layout({ children }) {
  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-[var(--color-bg)]">
      <CursorGlow />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <motion.main
          key={typeof window !== "undefined" ? window.location.pathname : "page"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}
