
  export const Links = [
  {
    name: "Home",
    path : "/",
    index: 1
  },
  {
    name: "About",
    path: "/about",
    index: 2
  },
  {
  name: "Contact",
  path: "/contact",
  index: 3
},
{
  name: "Gallery",
  path: "/gallery",
  index: 4

},
{
  name: "Plans",
  path: "/plans",
  index: 5

},
{
  name: "Trainers",
  path: "/trainers",
  index:1
},
]
 




import { FaRunning, FaDumbbell,   FaBiking, FaFire, FaHeartbeat, FaPeace, FaCross, FaChild } from 'react-icons/fa';


const fitnessData = [
  {
    title: "Cardio Workout",
    description: "High-intensity exercises to get your heart rate up quickly.",
    icon: 'FaRunning'
  },
  {
    title: "Strength Training",
    description: "Build muscle with weightlifting routines to increase your strength.",
    icon: 'FaDumbbell'
  },
  {
    title: "Pilates",
    description: "Core-strengthening exercises designed to enhance your stability.",
    icon: 'FaChild'
  },
  {
    title: "HIIT",
    description: "High-intensity interval training for quick results in fitness improvement.",
    icon: 'FaFire'
  },
  {
    title: "Cycling",
    description: "Endurance and leg strength workout on a bike for health.",
    icon: 'FaBiking'
  },
  {
    title: "Running",
    description: "Improve stamina and cardiovascular health with consistent running .",
    icon: 'FaRunning'
  },
  {
    title: "Meditation",
    description: "Relaxation and mindfulness practice to reduce stress and anxiety.",
    icon: 'FaPeace' 
  },
  {
    title: "CrossFit",
    description: "High-intensity functional training designed to enhance overall physical .",
    icon: 'FaCross'
  }
];


export default fitnessData;

import { FaReact } from "react-icons/fa6";

export const value = [
  {
    icon: FaReact,
    title: "Value One",
    description: "hello everyone it is our value section so please follow us"
  },
  {
    icon: FaReact,
    title: "Value Two",
    description: "hello everyone it is our value section so please follow us"
  },
  {
    icon: FaReact,
    title: "Value Three",
    description: "hello everyone it is our value section so please follow us"
  },
  {
    icon: FaReact,
    title: "Value Four",
    description: "hello everyone it is our value section so please follow us"
  }
];