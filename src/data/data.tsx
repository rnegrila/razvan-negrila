import {
  /*AcademicCapIcon,*/
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
/*import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  EducationTimelineItem
} from './dataDef';
import FacebookIcon from '../components/Icon/FacebookIcon';
import type {Certifications} from './dataDef';
import azureFundamentalsImage from '../images/certifications/microsoft-certified-fundamentals-badge.png';
import { createTimelineSubtitle } from '../components/Sections/Resume/DateUtils';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume Website',
  description: "A personal presentation website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Certifications: 'certifications',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Razvan Negrila.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pitești, Romania based <strong className="text-stone-100">Site Reliability Engineer II</strong>, currently working
        at <strong className="text-stone-100">Microsoft</strong>. I specialize in ensuring the reliability and performance of Windows Autopatch and Windows Updates, making sure our users receive seamless and efficient experiences with their Windows devices.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me playing <strong className="text-stone-100">video games</strong>, spending quality time with my <strong className="text-stone-100">family</strong>, <strong className="text-stone-100">reading</strong>, <strong className="text-stone-100">traveling </strong> to awesome places and watching <strong className="text-stone-100">movies</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/CV_EN_Razvan_Negrila.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Pitești, Argeș, Romania', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Romanian', Icon: FlagIcon},
    {label: 'Interests', text: 'Video Games, Books, Travel, Movies', Icon: SparklesIcon},
    /*{label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},*/
    {label: 'Employment', text: 'Microsoft Romania', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Romanian',
        level: 10,
      },
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  /*{
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },*/
];

/**
 * Certifications section
 */
export const certifications: Certifications[] = [
  {
    name: 'Azure Administrator',
    issuedBy: 'Microsoft',
    image: azureFundamentalsImage,
    verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/YourName/12345',
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'LC Drill Pro',
    description: 'Created a presentation website for a local business.',
    url: 'https://drillpro.github.io/home/',
    image: porfolioImage1,
  },
  /*{
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },*/
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: EducationTimelineItem[] = [
  {
    date: 'June 2014',
    location: 'National College "Ion C. Brătianu"',
    title: 'Baccaulareate',
    content: <p>4 years of French bilingual Mathematics and Computer Science</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2024 - Present',
    location: 'Microsoft Romania',
    title: 'Site Reliability Engineer II',
    content: (
      <p>
        Provide expert technical support by analyzing complex customer incidents and developing innovative solutions to enhance system functionality. Mentor junior engineers, deliver educational sessions, and actively participate in initiatives like academic projects and conferences.
      </p>
    ),
    subtitle: createTimelineSubtitle('March 2024 - Present')
  },
  {
    date: 'June 2022 - February 2024',
    location: 'Microsoft Romania',
    title: 'Site Reliability Engineer',
    content: (
      <p>
        Analyzed customer-reported incidents, identified solutions within available resources, and optimized software performance. Engaged in professional development, collaborated with senior colleagues, and contributed to knowledge sharing within the team.
      </p>
    ),
    subtitle: createTimelineSubtitle('June 2022 - February 2024')
  },
  {
    date: 'March 2022 - June 2022',
    location: 'Societe Generale Global Solution Centre',
    title: 'Operational IT Risk Analyst',
    content: (
      <p>
        Ensured the implementation of Level 1 Permanent Controls for Global Technology Services. Managed access rights, updated control plans, conducted quality assurance on evaluations, and provided analytical support to Operational Risk Managers.
      </p>
    ),
    subtitle: createTimelineSubtitle('March 2022 - June 2022')
  },
  {
    date: 'November 2020 - March 2022',
    location: 'Stefanini Romania SRL',
    title: 'Support Desk Engineer',
    content: (
      <p>
        Provided remote technical support to clients, resolving software and hardware issues and troubleshooting network problems. Assisted with ticket management, escalations, and collaborated with team members to deliver effective solutions.
      </p>
    ),
    subtitle: createTimelineSubtitle('November 2020 - March 2022')
  },
  {
    date: 'September 2019 - November 2020',
    location: 'Automobile Dacia SA, Mioveni, Romania',
    title: 'Customer Service Analyst',
    content: (
      <p>
        Ensured efficient spare parts shipments and maintained high-quality customer service. Acted as the liaison between international clients and central warehouses in France. Managed sales administration tasks such as order placement, dispatch monitoring, invoicing, and customs operations. Utilized tools like Spotfire for analysis and reporting to optimize logistics flows and procedures.
      </p>
    ),
    subtitle: createTimelineSubtitle('September 2019 - November 2020')
  },
  {
    date: 'February 2019 - September 2019',
    location: 'Webhelp Romania',
    title: 'Team Leader',
    content: (
      <p>
        Led a team of Client Advisors, overseeing project management and resource allocation. Prepared daily and monthly reports for clients, participated in conferences, and facilitated trainings and coaching sessions. Conducted recruitment assessments and implemented strategies to improve project results.
      </p>
    ),
    subtitle: createTimelineSubtitle('February 2019 - September 2019')
  },
  {
    date: 'October 2017 - February 2019',
    location: 'Webhelp Romania',
    title: 'Continuous Improvement Department Expert (SWAT Team)',
    content: (
      <p>
        Assisted advisors in developing growth plans alongside team leaders. Supported team objectives through training, individual coaching, and qualitative analysis. Handled cases to enhance productivity across projects, providing ideas for procedural improvements and organizational efficiency.
      </p>
    ),
    subtitle: createTimelineSubtitle('October 2017 - February 2019')
  },
  {
    date: 'August 2017 - October 2017',
    location: 'Amoma SRL',
    title: 'Customer Advisor',
    content: (
      <p>
        Provided commercial assistance in online hotel reservations for customers worldwide via email and phone. Resolved inquiries and issues, ensuring customer satisfaction in the tourism sector.
      </p>
    ),
    subtitle: createTimelineSubtitle('August 2017 - October 2017')
  },
  {
    date: 'October 2014 - August 2017',
    location: 'Webhelp Romania',
    title: 'Client Advisor',
      content: (
      <p>
        Offered technical and commercial support in the telecom field to French customers through email, chat, instant messaging, and calls. Addressed customer needs effectively, enhancing client engagement and service quality.
      </p>
    ),
    subtitle: createTimelineSubtitle('October 2014 - August 2017')  
  },
];

/**
 * Testimonial section
*/
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Peter Parker',
      text: 'Working with Razvan is like having your own friendly neighborhood problem-solver! His tech-sense is always tingling when there\'s a challenge, and he tackles Windows issues faster than I can shoot webs. Not only does he keep our services running smoothly, but he also brings the perfect balance of professionalism and fun to the team. With great power comes great reliability, and Razvan definitely delivers on both fronts!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: "Tony Stark",
      text: "Listen up - and I don't say this often - but this guy might actually be as smart as I am. His infrastructure is as reliable as my Mark LXXXV suit, and trust me, that's saying something. He automates systems faster than JARVIS and keeps services running smoother than my facial hair. Definitely hire him and double his salary expectations - he's giving me a run for my money in the genius department. And coming from me, that's basically a Nobel Prize recommendation.",
      image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you want to get in touch with me, just write me a message or reach out to me via one of the below channels.',
  items: [
    {
      type: ContactType.Email,
      text: 'negrila.razvan@gmail.com',
      href: 'mailto:negrila.razvan@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pitești, Argeș, Romania',
      href: 'https://www.google.com/maps/place/Pite%C8%99ti/@44.8560234,24.8323034,12733m',
    },
    {
      type: ContactType.Instagram,
      text: '@negrila.razvan.1',
      href: 'https://www.instagram.com/negrila.razvan.1/',
    },
    {
      type: ContactType.Github,
      text: 'rnegrila',
      href: 'https://github.com/rnegrila',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rnegrila'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/razvan-negrila/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/negrila.razvan.1'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/negrila.razvan.1/'},
];
