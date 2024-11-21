import GulfCoastCorgis from '../images/GulfCoastCorgis.png';
import piperChat from '../images/piperChat.png';
import wrgcv from '../images/wrgcv.png';


export interface ProjectData {
    image?: string;
    title?: string;
    description?: string;
    tech?: Array<string>,
    links?: string[];
    className?: string;
}

const projects: ProjectData[] = [
    {
        image: piperChat,
        title: "Decentralized p2p chat application",
        description: "A decentralized peer-to-peer chat application built using React.JS, Node.JS, Express, and Gun.js for real-time messaging and data synchronization. The application is hosted on AWS EC2 with Nginx and secured via SSL, featuring a REST API backend with PostgreSQL database integration.",
        tech: ["React.JS", "Node.JS", "Express", "PostgreSQL", "Gun.JS"],
        links: ["https://github.com/evelandy/decentralized-p-2-p-chat-app", "https://piper-chat.com/"],
        className: "project-first"
    },
    {
        image: GulfCoastCorgis,
        title: "GulfCoastCorgis.com",
        description: "A comprehensive breeder management platform developed with WordPress, featuring custom PHP modules and MySQL integration. Built with a focus on performance and user experience, the site includes a custom theme, dynamic content management, and secure client interactions. Deployed on a dedicated Linux server with Apache and SSL encryption.",
        tech: ["WordPress", "HTML", "CSS", "PHP", "MySQL", "JavaScript"],
        links: ["https://github.com/evelandy/", "https://gulfcoastcorgis.com/"],
        className: "project-second"
    },
    {
        image: wrgcv,
        title: "Online Portfolio",
        description: "A modern, responsive portfolio built with React.js and TypeScript, featuring dynamic content rendering and smooth animations. Leverages CI/CD pipelines for automated deployment, with custom React hooks and context management. Updated regularly with new projects and features through Git version control.",
        tech: ["React.JS", "TypeScript", "Tailwind", "CSS", "JavaScript"],
        links: ["https://bitbucket.org/WRGriffin/onlinecv", "https://wrgcv.com/"],
        className: "project-third"
    },
    // {
    //     image: '../images/GulfCoastCorgis.png',
    //     title: "GulfCoastCorgis.com",
    //     description: "A fully functional website built with WordPress, MySQL, HTML, CSS, JavaScript, and placed on the client's custom Linux server running Apache. ",
    //     tech: ["WordPress", "HTML", "CSS", "MySQL", "JavaScript"],
    //     links: ["https://github.com/evelandy/", "https://gulfcoastcorgis.com/"],
    //     className: "project-third"
    // },
]

export default projects;
