import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';

export const headerData = {
  logo: '/images/header/logo.svg',
};

export const navData = {
  items: [
    { 
    href: '/', 
    name: 'Home' 
  },
    { 
    href: '/', 
    name: 'About' 
  },
    { 
    href: '/', 
    name: 'Gallery' 
  },
    { 
    href: '/', 
    name: 'Interview' 
  },
    { 
    href: '/', 
    name: 'Articles' 
  },
    { 
    href: '/', 
    name: 'Contact' 
  }
  ]
};

export const socialData = [
  { 
    href: '/', 
    icon: GrFacebookOption 
    },
  { 
    href: '/', 
    icon: IoLogoInstagram  
    },
  { 
    href: '/', 
    icon: IoLogoPinterest  
    },
  { 
    href: '/', 
    icon: IoLogoTwitter  
    },
  { 
    href: '/', 
    icon: IoLogoYoutube  
    },
];

export const heroData = {
  title: 'I’m Void Sir.',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  btnText: 'read more',
  btnIcon: IoMdArrowForward,
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    "Hi, I'm Void, a passionate tattoo artist who turns stories into art. With years of experience, I transform ideas into meaningful tattoos, capturing unique moments and feelings. At my studio, each brand is more than just paint on skin, it's a visual narrative that celebrates each client's individuality.",
  subtitle2:
    'My artistic journey aims to create lasting connections through tattooing. Each drawing is an authentic expression, reflecting not only my technical skill, but also the essence of those who trust me to immortalize their stories. Be part of this journey, where tattoos transcend aesthetics and become a unique way of telling and preserving experiences.',
  btnText: 'Know more',
};

export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  images: [
    {
      src: '/images/gallery/1.png',
      original: '/images/gallery/1.png',
      width: 465,
      height: 412,
    },
    {
      src: '/images/gallery/2.png',
      original: '/images/gallery/2.png',
      width: 465,
      height: 540,
    },
    {
      src: '/images/gallery/3.png',
      original: '/images/gallery/3.png',
      width: 465,
      height: 412,
    },
    {
      src: '/images/gallery/4.png',
      original: '/images/gallery/4.png',
      width: 465,
      height: 540,
    },
    {
      src: '/images/gallery/5.png',
      original: '/images/gallery/5.png',
      width: 465,
      height: 540,
    },
    {
      src: '/images/gallery/6.png',
      original: '/images/gallery/6.png',
      width: 464,
      height: 412,
    },
    {
      src: '/images/gallery/7.png',
      original: '/images/gallery/7.png',
      width: 465,
      height: 540,
    },
    {
      src: '/images/gallery/8.png',
      original: '/images/gallery/8.png',
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: FaPlay
};

export const testimonialData = [
  {
    quoteImg: '/images/testimonials/quote.svg',
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: '/images/testimonials/quote.svg',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: FaMapMarkerAlt,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: FaPhoneAlt,
        number: '+49 93 30493943',
      },
      email: {
        icon: FaEnvelope,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: FaMapMarkerAlt,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: FaPhoneAlt,
        number: '+49 34 36573355',
      },
      email: {
        icon: FaEnvelope,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: FaMapMarkerAlt,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: FaPhoneAlt,
      number: '+49 34 36573355',
    },
    email: {
      icon: FaEnvelope,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: FiSend 
    },
  },
};