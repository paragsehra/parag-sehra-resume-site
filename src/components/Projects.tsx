
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Energy and Sustainability Application",
      description: "Developed to streamline the process of collecting and analyzing utility bill data for multiple clients. The primary goal was to help clients achieve their go green goals, optimize energy consumption, and save on utilities.",
      achievements: [
        "Led the development team in designing and implementing the application's architecture, ensuring scalability and security.",
        "Collaborated with stakeholders to gather requirements and translated them into user stories, estimates, and work plans.",
        "Developed robust data collection mechanisms to efficiently gather utility bill data from various sources and formats.",
        "Implemented data analysis algorithms and metrics to provide detailed insights into energy usage patterns and opportunities for improvement.",
        "Achieved a 25% increase in client satisfaction through the development of user-friendly dashboards.",
        "Ensure data accuracy, reliability, and data privacy compliance throughout the application.",
        "Collaborated with cross-functional teams, including business analysts and software architects, to ensure the application met the clients' requirements and industry standards."
      ],
      technologies: ["C#", ".NET Core", "Azure", "Angular", "REST API", "MongoDB", "DevOps CI/CD"]
    },
    {
      id: 2,
      title: "Education Learning and Life Learning Tool",
      description: "Configurable simulation app that equips students with practical life skills. In an interactive platform, students manage a persona, making decisions on taxes, housing, transportation, utilities, and more.",
      achievements: [
        "Led the development team in designing and implementing the simulation application's architecture and interactive features",
        "Collaborated with educators and stakeholders to define personas and create realistic scenarios that reflect different life situations and challenges.",
        "Developed a user-friendly interface that allows students to navigate through various aspects of life, make decisions, and observe the outcomes.",
        "Integrated interactive modules that provide information on topics such as taxes, housing options, transportation choices, utility management, budgeting, and financial planning.",
        "Implemented a scoring system to evaluate students' decision-making skills and financial literacy, providing feedback and suggestions for improvement.",
        "Designed comprehensive reports, aiding a 15% improvement in tracking student progress"
      ],
      technologies: ["C#", "ASP.NET MVC", "MS SQL", "Angular", "TypeScript", "Bootstrap", "Azure DevOps"]
    },
    {
      id: 3,
      title: "Healthcare Insurance Customer Support Portal",
      description: "A web-based platform for improving customer support in the healthcare insurance sector. It centralizes caller information, enabling efficient and personalized assistance from support representatives.",
      achievements: [
        "Developed a user-friendly interface that displays caller information in real-time, providing customer support representatives with immediate access to caller details.",
        "Implemented a ticketing system that tracks customer queries and requests, enabling support representatives to manage and prioritize incoming inquiries effectively.",
        "Incorporated search functionality to quickly retrieve relevant information from the knowledge base, ensuring accurate and timely responses to customer inquiries.",
        "Integrated with backend systems and databases to fetch and update customer information in real-time, ensuring data accuracy and consistency across the portal."
      ],
      technologies: ["C#", "ASP.NET", "SQL Server", "WCF", "jQuery", "Crystal Reports"]
    },
    {
      id: 4,
      title: "Supply Chain Management and Prediction Project",
      description: "The project aimed to optimize operations by utilizing advanced technologies and data analytics. It focused on improving the flow of goods and information, leading to precise demand forecasting and effective inventory management.",
      achievements: [
        "Developed software modules and components using technologies such as ASP.NET, C#, and MS SQL Server to support supply chain management functionalities.",
        "Implemented data integration mechanisms to connect various data sources within the supply chain, enabling real-time visibility and data-driven decision-making.",
        "Created intuitive user interfaces and dashboards to present supply chain insights, key performance indicators (KPIs), and analytics reports for stakeholders and management.",
        "Implemented data analytics and visualization techniques to identify bottlenecks, optimize inventory levels, and improve overall supply chain efficiency."
      ],
      technologies: ["ASP.NET", "C#", "MS SQL", "SSRS", "jQuery", "Crystal Reports"]
    }
  ]);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <Card key={project.id} className="project-card animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-resume-primary">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium text-sm text-resume-primary mb-2">Key Achievements</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    {project.achievements.slice(0, project.achievements.length).map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                    {/* {project.achievements.length > 3 && (
                      <li className="text-resume-accent font-medium cursor-pointer">
                        + {project.achievements.length - 3} more achievements
                      </li>
                    )} */}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-resume-primary mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
