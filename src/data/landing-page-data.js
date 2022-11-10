import culture from "~/assets/culture.png"
import training from "../assets/training.png"
import benefits from "../assets/benefits.png"
import gokenHq from "../assets/gokenHq.png"
import flowing from "../assets/flowingliquid.jpg"
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const imagesAndTexts = [
    {
        id: 1,
        title: `CULTURE`,
        description: `Our associates are like family – and we treat them that way! We hold 
        bi-annual town hall meetings and recognize associates with VMV (Vision, Mission, Values) and Service Awards. 
        Associates also enjoy social events throughout the year including tailgates, golf outings, tennis tournaments, summer family events, 
        STEM day for the children of our associates, and our popular Coffee & Cars event – a 
        monthly Saturday morning tradition when we gather to lift the hoods of our favorite cars and swap tips and tricks.`,
        image: culture
    },
    {
        id: 2,
        title: `TRAINING & DEVELOPMENT`,
        description: `We take pride in hiring entrepreneurial individuals who are motivated by challenging work, and 
        continue to invest in them through ongoing development initiatives. We provide initial training in our technical center for 
        all associates, engage professional 
        organizations for continued professional development and are committed to creating career growth opportunities for associates.`,
        image: training
    
    },
    {
        id: 3,
        title: `COMPETITIVE BENEFITS`,
        description: `We take pride in hiring entrepreneurial individuals who are motivated by challenging work, 
        and continue to invest in them through ongoing development initiatives. 
        We provide initial training in our technical center for all associates, 
        engage professional organizations for continued professional development and are
         committed to creating career growth opportunities for associates.`,
        image: benefits
    },
]


export const joinTheTeamButtons = [
    {
        id: 1,
        title: "Step inside our office",
        videoLink: gokenHq,
        subtitle: `Based in Ohio, Goken is an engineering and staffing solutions provider fuelled by exceptional talent who partner 
        with companies to solve problems, accelerate development cycles and build better products`
    },
    {
        id: 2,
        title: "Work With Us",
        buttonText: "Explore Jobs"
    },
    {
        id: 3,
        title: "Let’s make it happen",
        buttonText: "Search Jobs"
    },
    {
        id: 4,
        title: "INTERESTED TO LEARN MORE ABOUT US?",
        buttonText: "Get in Touch",
        image: flowing
    },
    {
        id: 5,
        title: "WORK WITH US",
    },
    
]

export const blogPosts = [
    {
        id: 1,
        title: "Goken America debuts on 2017 Top 5000 List, Actively Growing Workforce",
        description: `There are numerous possibilities for using automation in the CATIA environment for optimizing the design. 
        One way to do that is scripting, which involves writing code to execute a specific task. Another method involves writing a program 
        in languages such as C, C#, and VBA to create new abstractions. The third approach is to develop an optimization algorithm that 
        defines free variables and at the same time impose constraints and ranges to guide the optimization tool.`,
        image: training
    },
    {
        id: 2,
        title: "How Goken assisted an Aerospace OEM in standardizing their current processes",
        description: `When working in an environment that is fast-paced and riddled with disparate processes, 
        productivity often suffers due to rework. A lack of organizational processes and work methods can quickly 
        snowball into the organization not being able to release products on time or even diversify when needed. `,
        image: culture
    },
    {
        id: 3,
        title: "Goken Training Methodology Fast Tracks Learning on the Job",
        description: `You cannot improve what you cannot measure. At Goken, we believe strongly in improving performance 
        through continuous evaluation. We have been fortunate enough to work with clients who share our philosophy of continuous 
        improvement. However, clients also realize that such improvement requires a process-oriented approach and a basic competency level`,
        image: benefits
    }

]


export const footerLinks = [
    {
        id: 1,
        category: "Solutions & Services",
        subcategories: [
            "Product Development",
            "Staffing",
            "Productivity",
            "Dassault Partnership",
            "Engineering Design",
            "Automation",
            "Validation",
            "Language Services",
            "Knowledge Management",
            "GokenGO"
        ]
    },
    {
        id: 2,
        category: "Quick Links",
        subcategories: [
            "Home",
            "Careers",
            "About Us",
            "Contact Us",
            "Engineering Design",
            "Insights",
            "Privacy Policy"
        ]
    },
    {
        id: 3,
        category: "Follow Us",
        quickLinks: [
            {name: "Linkedin", link: "https://www.linkedin.com/company/goken-america", component: <FaLinkedinIn color="dodgerblue" size="30"/>},
            {name: "Youtube", link: "https://www.youtube.com/channel/UCdDGdBxEwzg95OO3QQFEjhw", component: <FaYoutube color="red" size="35"/>},
        ],
        companyText: `Goken is an engineering and staffing solutions provider fuelled by 
        exceptional talent who partner with companies to solve problems, accelerate 
        development cycles and build better products​`
    },
]


export const ListingPageTiles = [
    {
        id: 1,
        title: "",
        subtitle: ``,
        description:"",
        image1: training
    },
    {
        id: 2,
        title: "",
        subtitle: ``,
        description:"",
        image1: training
    },
    {
        id: 3,
        title: "",
        subtitle: ``,
        description:"",
        image1: culture
    },
]