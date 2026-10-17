import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Instagram, Linkedin, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

export const ContactSection = ({ english }) => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [messageState, setMessageState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setMessageState("");
    emailjs.sendForm("default_service", "template_oz4l4ir", formRef.current, "jLT0e7lEuu-v2DUqm")
      .then(() => {
        setMessageState(english ? "Message sent. Thanks for reaching out." : "Mensaje enviado. ¡Gracias por escribirme!");
        formRef.current.reset();
      })
      .catch(() => setMessageState(english ? "Something went wrong. Please try again later." : "Algo salió mal. Probá de nuevo más tarde."))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap contact-layout">
        <div className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{english ? "SEND A SIGNAL" : "ENVIÁ UNA SEÑAL"}</p>
          <h2>{english ? <>Have an idea?<br /><em>Let's give it a world.</em></> : <>¿Tenés una idea?<br /><em>Démosle un mundo.</em></>}</h2>
          <p>{english ? "Open to junior opportunities, collaborations and conversations about game development, creative technology or strange little projects." : "Estoy abierto a oportunidades junior, colaboraciones y charlas sobre desarrollo de videojuegos, tecnología creativa o proyectos raros."}</p>
          <a className="contact-email" href="mailto:tobiasalfonso2301@gmail.com"><Mail size={17} /> tobiasalfonso2301@gmail.com <ArrowUpRight size={15} /></a>
          <div className="contact-location"><MapPin size={15} /> Buenos Aires, Argentina</div>
          <div className="social-links">
            <a href="https://github.com/El-Tobi10" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/tobias-alfonso-37a51926b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://www.instagram.com/tobiasmg10/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <span className="form-kicker">{english ? "MESSAGE / 001" : "MENSAJE / 001"}</span>
          <label htmlFor="name">{english ? "Your name" : "Tu nombre"}</label>
          <input id="name" name="name" required placeholder={english ? "How should I call you?" : "¿Cómo te llamás?"} />
          <label htmlFor="email">{english ? "Email address" : "Tu correo electrónico"}</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
          <label htmlFor="message">{english ? "What are you thinking about?" : "¿Qué tenés en mente?"}</label>
          <textarea id="message" name="message" rows="4" required placeholder={english ? "Tell me a little about it..." : "Contame un poco..." } />
          <button className="button-primary form-submit" type="submit" disabled={sending}>{sending ? (english ? "Sending..." : "Enviando...") : (english ? "Send message" : "Enviar mensaje")} <Send size={15} /></button>
          {messageState && <p className="form-status" role="status">{messageState}</p>}
        </form>
      </div>
    </section>
  );
};