import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z4rmtmv", "template_vfigw89", form.current, {
        publicKey: "5eQNDS9_4PU8V9_ap",
      })
      .then(
        (result) => {
          console.log("Success");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5
              style={{
                fontSize: "0.7rem",
              }}
            >
              chakrabortydipayan2012@gmail.com
            </h5>
            <a href="mailto:chakrabortydipayan2012@gmail.com" target={"_blank"}>
              Send Mail
            </a>
          </article>
          <article className="contact__option">
            <ImLinkedin2 className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Dipayan Chakraborty</h5>
            <a
              href="https://www.linkedin.com/in/dipayan-chakraborty-866192208/"
              target={"_blank"}
            >
              Say Hi!
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7477690837</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917477690837"
              target={"_blank"}
            >
              Send Message
            </a>
          </article>
        </div>
        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
