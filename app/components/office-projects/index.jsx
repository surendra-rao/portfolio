import { FaReact, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaBitbucket, FaGithub   } from 'react-icons/fa';
import { SiDjango, SiMysql, SiRedis, SiFastapi, SiJavascript, SiNewrelic, SiAmazonec2, SiAwsfargate , SiJfrogpipelines, SiAwslambda, SiAmazons3, SiBootstrap, SiMongodb, SiGraphql, SiGithubactions  } from 'react-icons/si';
import GlowCard from '../helper/glow-card';
import SectionTitle from '../helper/section-title';
import OfficeProjectCard from './office-project-card';

const officeProjects = [
  {
    id: 1,
    name: "Data Quest Hub (DQH) Client Delivery System",
    description: "Automated data collection, processing, and delivery workflows for custom client packages. Built scalable, fault-tolerant systems for large-scale operations.",
    duration: "2023 - Present",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Docker", icon: FaDocker },
      { name: "AWS Lambda", icon: SiAwslambda },
      { name: "AWS Fargate", icon: SiAwsfargate  },
      { name: "AWS S3", icon: SiAmazons3 },
      { name: "GitHub", icon: FaGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Newrelic", icon: SiNewrelic }, 
    ],
    contributions: [
      "Developed backend modules for data processing and storage using AWS S3 and Dockerized components",
      "Built a package generator for logging metadata and delivering structured data to clients",
      "Implemented exception handling and logging for system reliability",
      "Delivered features on time following Agile Scrum practices",
      "Automated data collection, processing, and package generation using Python scripts"
    ]
  },
  {
    id: 2,
    name: "Context Creation and Management Tool (Internal Tool)",
    description: "Context Creation and Management Tool automates metadata creation, reduces errors, and enhances workflow efficiency with a Context Relevance Check module.",
    duration: "2022 - 2023",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Django Rest Framework", icon: SiDjango },
      { name: "MYSQL", icon: SiMysql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "React JS", icon: FaReact },
      { name: "Amazon EC2", icon: SiAmazonec2   },
      { name: "CICD", icon: SiJfrogpipelines },
      { name: "BitBucket", icon: FaBitbucket  }
    ],
    contributions: [
      "Built backend infrastructure for context management",
      "Developed APIs for context creation and retrieval",
      "Implemented message queuing system using RabbitMQ",
      "Created user interface for context management using React",
      "Optimized database queries for large context datasets"
    ]
  },
  {
    id: 3,
    name: "Work Assignment Tool (Internal Tool)",
    description: "Replaced manual workload management systems with an automated solution to improve operational efficiency.",
    duration: "2022",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "MySQL", icon: SiMysql },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bitbucket", icon: FaBitbucket },

    ],
    contributions: [
      "Developed dynamic reporting modules for real-time department statistics",
      "Designed Restful APIs for efficient frontend-backend communication",
      "Created automated workflow management systems",
      "Improved operational efficiency through process automation",
      "Built user-friendly interfaces for task assignment and tracking"
    ]
  },
  {
    id: 4,
    name: "Real-Time Chat Application (Personal Project)",
    description: "Developed a real-time chat application with instant messaging, message persistence, and user presence tracking. Implemented WebSocket communication, load balancing, and secure user authentication.",
    duration: "2023",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Redis", icon: SiRedis },
      { name: "MongoDB", icon: SiMongodb },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "GitHub", icon: FaGithub },
    ],
    contributions: [
      "Implemented real-time messaging using Flask-SocketIO and WebSockets",
      "Designed user presence tracking and typing indicators",
      "Built secure user authentication system using JWT",
      "Integrated MongoDB for message persistence and chat history",
      "Implemented Redis for load balancing and scalability"
    ]
  }
];

const OfficeProjects = () => {
  return (
    <div id="office-projects" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Office Projects" />
      
      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {officeProjects.map(project => (
          <GlowCard key={project.id} identifier={`office-project-${project.id}`}>
            <OfficeProjectCard project={project} />
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default OfficeProjects;