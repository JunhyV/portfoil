import React from "react";
import "./footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <a
        className="footer__link"
        href="https://www.facebook.com/JonhyNoKisi/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="footer__img icon icon-tabler icon-tabler-brand-facebook"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#353535"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      </a>
      <a
        className="footer__link"
        href="https://www.instagram.com/junhy_avina/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="footer__img icon icon-tabler icon-tabler-brand-instagram"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#353535"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </a>
      <a
        className="footer__link"
        href="https://api.whatsapp.com/send?phone=5213121741559"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="footer__img icon icon-tabler icon-tabler-brand-whatsapp"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#353535"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
        </svg>
      </a>
    </motion.footer>
  );
};

export default Footer;
