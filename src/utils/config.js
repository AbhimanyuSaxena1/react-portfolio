export const hashRoutes = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Experience", "/#experience"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
    ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "Developer",
    "Programmer",
    "Tech Enthusiast",
    "Gamer",
    "GSAP Developer"
];
export const myName = "Abhimanyu Saxena";
export const shortDescription = "GSAP and Front End Developer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/abhimanyusaxena1',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/abhimanyu-saxena-1aa5a827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
        name: 'Instagram',
    url: 'https://www.instagram.com/saxena_abi',
    },
    {
        name: 'Email',
        url: 'mailto:abhisaxena215@gmail.com'
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["C", "C++", "HTML/CSS", "Javascript", "Typescript", "Python"],
    },
    {
        name: "Web Development",
        items: ["React", "NextJs", "Node", "Redux", "Tailwind", "RestAPI", "ExpressJs", "SocketIO", "MUI","GSAP","Framer Motion"],
    },
    {
        name: "Database",
        items: ["MySQL", "MongoDB"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Github", "VSCode", "Figma", "Cloudinary", "Postman", "Cursor", "Other"],
    },
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "IndhanPay Pvt Ltd",
        bottomColor: "#6d92bf",
        icon: "https://indhanpay-public.s3.ap-south-1.amazonaws.com/common_file/indhan_logo.png",
        date: "June 2025 - November 2025",
        points: [
            "Developed and maintained the frontend of the IndhanPay website using React, Tailwind, and GSAP, ensuring a smooth and engaging user experience",
            "Collaborated with the backend team to integrate the frontend with the backend, ensuring a seamless user experience",
            "Implemented various features to enhance the user experience, such as a feedback system and a chatbot"
        ],
    },
        {
        title: "Web Developer",
        company_name: "Vaayu Robotics Pvt Ltd",
        bottomColor: "#6d92bf",
        icon: "https://res.cloudinary.com/dtqccwgra/image/upload/v1775203604/360035657_2201755933548546_7757815494626569442_n-modified_kdhr5o.png",
        date: "july 2025 - August 2025",
        points: [
            "Developed and maintained the company website using React.js and Tailwind CSS."  ,
            "Collaborated with cross-functional teams to enhance user experience and functionality. ",
                "Implemented responsive design principles to ensure accessibility across devices.  ",
                "Contributed to a product-based company, VAAYU ROBOTICS, located in Bhopal, Madhya Pradesh"
        ],
    },

    {
        title: "Freelancing Web Developer",
        company_name: "Self-Employed",
        bottomColor: "#f1df87",
        icon: "https://res.cloudinary.com/dtqccwgra/image/upload/v1775204048/freelancer-logo-vector-11573941316qg63taxq8q-modified_p8ikoq.png",
        date: "August 2025 - Present",
        points: [
            "Collaborated with clients to understand project requirements and deliver tailored solutions",
            "Conducted thorough testing to ensure website functionality across different browsers and devices.",
            "Designed and developed responsive websites using HTML, CSS, React.js, Gsap and JavaScript.",
            "Utilized version control systems for efficient code management and collaboration. Enhanced client satisfaction by delivering high-quality work within deadlines."
        ],
    },
     {
        title: "Gsap Developer",
        company_name: "Techrobo (rebranded as PEGAL Agency) ",
        bottomColor: "#f1df87",
        icon: "https://res.cloudinary.com/dtqccwgra/image/upload/v1775203892/techrobo_logo-modified_c99v0j.png",
        date: "july 2025 - Aug 2025",
        points: [
            "Created stunning looking animations for websites using GSAP and Framer Motion",
            "Developed engaging web animations using GSAP, enhancing user experience on various projects.",
            "Created responsive designs that improved site accessibility across devices, contributing to a 20% increase in user engagement.",
            "Gained proficiency in GSAP and Framer Motion during a paid internship at Techrobo, a dynamic startup focused on innovative web solutions."
        ],
    },
   
];

export const projectsData = [
    {
        title: 'Refokkus Website',
        desciption: 'Developed a website for Refokus using React, Tailwind, and GSAP, ensuring a smooth and engaging user experience',
        tech: ['React', 'Tailwind', 'GSAP','Framer Motion'],
        github: 'https://github.com/AbhimanyuSaxena1/Refokus-work.git',
        external: 'https://refokus-work-tau.vercel.app/',
        image: 'https://res.cloudinary.com/dtqccwgra/image/upload/v1753450541/refokus_wucl6b.png'
    },
    {
        title: 'Portfolio',
        desciption: 'Crafted an engaging portfolio site with ReactJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API',
        tech: ['Nodejs', 'React', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap', 'drei'],
        github: 'https://github.com/Am4nn/Portfolio-Website',
        external: 'https://www.Abhimanyusaxena.in',
        image: '/projects/portfolio-front.png'
    },
    {
        title: 'Obys Agency Website',
        desciption: 'Developed a website designed for Obys Agency using React, Tailwind,Shery.js, and GSAP, ensuring a smooth and engaging user experience',
        tech: ['React', 'Tailwind', 'GSAP','Framer Motion','Shery.js',"Html","Css"],
        github: 'https://github.com/AbhimanyuSaxena1/obys-agency.git',
        external: 'https://obys-agency.vercel.app/',
        image: 'https://res.cloudinary.com/dtqccwgra/image/upload/v1753450980/Screenshot_2025-07-25_024544_vda5q0.png'
    },
    {
        title: 'Project Recircle ',
        desciption: "Developed a website for Project Recircle for our Sparkathon Project using React, Tailwind, and GSAP, ExpressJs, and MongoDB ensuring a smooth and engaging user experience (Under Development)",
        tech: ['React', 'Tailwind', 'GSAP','Framer Motion','Shery.js',"Html","Css"],
        github: 'https://github.com/AbhimanyuSaxena1/recircl.git',
        external: 'https://recircl.vercel.app/',
        image: 'https://res.cloudinary.com/dtqccwgra/image/upload/v1753451119/Screenshot_2025-07-25_025538_fzcj4a.png'
    }
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
