import { ArrowUpRight } from "lucide-react";

export const Footer = ({ english }) => (
  <footer className="site-footer">
    <div className="section-wrap footer-inner">
      <div><span className="footer-brand">T<span>✳</span>S</span><p>© {new Date().getFullYear()} Tobias Alfonso · {english ? "Made with curiosity." : "Hecho con curiosidad."}</p></div>
      <a href="#hero">{english ? "Back to the surface" : "Volver a la superficie"} <ArrowUpRight size={14} /></a>
    </div>
  </footer>
);