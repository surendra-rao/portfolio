import { FaReact, FaPython, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaBitbucket, FaGithub   } from 'react-icons/fa';
import { SiDjango, SiMysql, SiRedis, SiRabbitmq, SiFastapi, SiJavascript, SiAmazonec2, SiJfrogpipelines  } from 'react-icons/si';
import GlowCard from '../helper/glow-card';
import SectionTitle from '../helper/section-title';
import OfficeProjectCard from './office-project-card';

const officeProjects = [
  {
    id: 1,
    name: "Data Quest Hub (DQH)",
    description: "A comprehensive platform for data scientists and analysts to explore, analyze and visualize data through interactive notebooks and collaborative workspaces.",
    duration: "2023 - Present",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Docker", icon: FaDocker },
      { name: "GIThub", icon: FaGithub }
    ],
    contributions: [
      "Developed core backend services using Django and FastAPI",
      "Implemented real-time collaboration features using WebSockets",
      "Created RESTful APIs for data processing and analysis",
      "Integrated caching mechanisms using Redis for improved performance",
      "Containerized the application using Docker for consistent deployment"
    ]
  },
  {
    id: 2,
    name: "Context Creation and Management Tool",
    description: "An internal tool for creating, managing, and organizing contextual information for AI/ML models and data processing pipelines.",
    duration: "2022 - 2023",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "MYSQL", icon: SiMysql },
      { name: "React", icon: FaReact },
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
    name: "Work Assignment Tool",
    description: "An internal platform for managing and distributing work assignments across teams, tracking progress, and managing workflows.",
    duration: "2022",
    techStack: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "MYSQL", icon: SiMysql },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt  },
      { name: "JavaScript", icon: SiJavascript  }, 
      { name: "Amazon EC2", icon: SiAmazonec2   }, 
      { name: "BitBucket", icon: FaBitbucket  },
    ],
    contributions: [
      "Developed assignment distribution algorithms",
      "Created dashboard for work progress monitoring",
      "Implemented user authentication and authorization",
      "Built reporting and analytics features",
      "Integrated with existing internal systems"
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