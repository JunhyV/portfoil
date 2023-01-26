import { motion } from "framer-motion";
import fakeStore from "../assets/Fake-store.jpg";
import huddle from "../assets/huddle.png";
import post from "../assets/post.jpg";
import rating from "../assets/rating.jpg";
import techPRO from "../assets/TechPRO.jpg";
import zeldaApi from "../assets/Zelda-api.jpg";

export const projects = [
    {
        id:1,
        name: 'Fake Store',
        skills: 'REACT / VITEJS',
        img: fakeStore,
        code:'https://github.com/JunhyV/react-shopping-cart',
        view:'https://junhyv.github.io/react-shopping-cart/',
    },
    {
        id:2,
        name: 'Landing page',
        skills: 'HTML / CSS',
        img: huddle,
        code:'',
        view:'https://junhyv.github.io/huddle-landing-page-with-single-in',
    },
    {
        id:3,
        name: 'Article Card',
        skills: 'REACT / VITEJS',
        img: post,
        code:'https://github.com/JunhyV/react-product-preview-card-component',
        view:'https://junhyv.github.io/react-product-preview-card-component/',
    },
    {
        id:4,
        name: 'Interactive Rating',
        skills: 'REACT / VITEJS',
        img: rating,
        code:'https://github.com/JunhyV/react-interactive-rating',
        view:'https://junhyv.github.io/react-interactive-rating/',
    },
    {
        id:5,
        name: 'TechPRO',
        skills: 'HTML / CSS',
        img: techPRO,
        code:'https://github.com/JunhyV/CSS-practice-headsets',
        view:'https://junhyv.github.io/CSS-practice-headsets/',
    },
    {
        id:6,
        name: 'Zelda Api',
        skills: 'REACT',
        img: zeldaApi,
        code:'https://github.com/JunhyV/zelda-api',
        view:'https://junhyv.github.io/zelda-api/',
    },
]