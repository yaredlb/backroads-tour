import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://x.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Travel the world without breaking the bank. Discover budget-friendly destinations, smart travel hacks, and money-saving tips that let you explore more while spending less. With a little planning and creativity, you can turn your dream trips into reality without compromising on the experience.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Embark on an unforgettable hiking adventure where every trail leads to new heights and breathtaking views. From majestic mountains to lush forests, the world is full of paths waiting to be explored. Whether you’re a seasoned hiker or a beginner, the journey is as endless as the landscapes you’ll discover.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "After a day of exploring, there’s nothing like returning to a place of incredible comfort. Whether it’s a luxurious hotel, a cozy cabin, or a serene retreat, enjoy the ultimate in relaxation and rejuvenation. Discover accommodations that offer the perfect blend of adventure and comfort, making your travels truly unforgettable.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: ` Embark on a journey to the Roof of the World, where ancient monasteries, breathtaking landscapes, and a rich cultural heritage await. In Tibet, adventure takes on a new meaning as you traverse rugged mountains, explore sacred temples, and immerse yourself in the tranquil beauty of the Himalayas. From the spiritual aura of Lhasa to the serene shores of Yamdrok Lake, every moment in Tibet offers a unique blend of awe and wonder. Prepare to be captivated by the magic of this mystical land, where adventure and spirituality meet.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: ` Discover the vibrant heart of Indonesia as you journey through the island of Java. From the bustling streets of Jakarta to the ancient temples of Borobudur, Java offers a rich tapestry of culture, history, and natural beauty. Explore the lush tea plantations, hike up to the mesmerizing crater lakes of Mount Ijen, and immerse yourself in the traditional arts and crafts of Yogyakarta. Whether you're drawn to its volcanic landscapes or its lively cities, Java promises an adventure filled with the best of what Indonesia has to offer.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: ` Dive into the vibrant energy of Hong Kong, where East meets West in a dazzling fusion of culture, cuisine, and skyline. Wander through bustling street markets, savor world-class dim sum, and take in the breathtaking views from Victoria Peak. From the neon-lit streets of Kowloon to the serene beaches of the Outlying Islands, Hong Kong offers a dynamic blend of modernity and tradition. Whether you're exploring ancient temples or cutting-edge skyscrapers, Hong Kong is a city that never ceases to amaze.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: ` Embark on a journey through Kenya and experience the essence of African adventure. From the majestic wildlife of the Maasai Mara to the pristine beaches of Diani, Kenya offers a tapestry of unforgettable experiences. Witness the Great Migration, explore the vibrant culture of Nairobi, and enjoy the stunning landscapes of Mount Kenya. Whether you're on a thrilling safari or relaxing by the Indian Ocean, Kenya's diverse beauty and rich heritage will leave you in awe. Discover the highlights that make Kenya a truly extraordinary destination.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
  {
    id: 6,
    image: tour6, // Replace with the image source for Lake Mburo
    date: "August 10th, 2024",
    title: "Lake Mburo, Uganda",
    info: ` Explore the serene landscapes of Lake Mburo, Uganda’s hidden gem nestled in the heart of the African savanna. This tranquil lake is surrounded by diverse wildlife, including zebra, impala, and hippos, making it a perfect destination for a relaxing safari experience. Enjoy boat safaris on the lake, guided nature walks, and birdwatching in this picturesque haven. Lake Mburo National Park offers a unique blend of scenic beauty and abundant wildlife, providing an intimate and memorable African adventure.`,
    location: "Uganda",
    duration: 10,
    cost: 2500,
  },
  {
    id: 5,
    image: tour5, // Replace with the image source for Taj Mahal
    date: "March 15th, 2023",
    title: "Taj Mahal",
    info: ` Experience the timeless beauty of the Taj Mahal, India’s most iconic symbol of love and architectural marvel. This stunning white marble mausoleum, set against the backdrop of lush gardens and serene reflecting pools, is a testament to Mughal grandeur and craftsmanship. Wander through the intricate carvings and ornate details of this UNESCO World Heritage site, and marvel at its majestic symmetry and breathtaking views. The Taj Mahal offers an unforgettable glimpse into India’s rich history and artistic heritage.`,
    location: "India",
    duration: 7,
    cost: 2200,
  },
];
