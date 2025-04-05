
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  techStack: string[];
  achievements: string[];
}

const Experience = () => {
  const [experiences] = useState<ExperienceItem[]>([
    {
      id: 1,
      company: "Nagarro Inc",
      position: "Sr Staff Engineer",
      duration: "July 2019 – Present",
      location: "Seattle, WA",
      techStack: [
        "C#", ".net Core", "REST API", "MS SQL", "MongoDB", "Azure DevOps CI/CD", 
        "Angular", "React", "TypeScript", "GIT", "AWS", "JavaScript", 
        "jQuery", "Knockout", "HTML", "CSS", "Cypress", "GitHub"
      ],
      achievements: [
        "Spearheaded a re-architecture initiative, resulting in a 10x improvement in application performance.",
        "Introduced best practices, leading to a 15% reduction in bug count and a 20% increase in overall code quality.",
        "Mentored team members, contributing to a 30% improvement in their technical skills and efficiency.",
        "Collaborated with software developers, business analysts, and software architects to plan, design, develop, test, and maintain web- and desktop-based business applications built on Microsoft technologies.",
        "Successfully integrated RESTful APIs using .NET Web API, reducing API response time by 25%.",
        "Worked with Angular and React frameworks to build responsive and user-friendly interfaces.",
        "Employed C# for server-side development, ensuring efficient and reliable application functionality."
      ]
    },
    {
      id: 2,
      company: "Nagarro India",
      position: "Associate Lead",
      duration: "October 2013 – July 2019",
      location: "Gurgaon, India",
      techStack: [
        "ASP.Net C#", ".NET Core", "MVC", "REST API", "MS SQL", "SSRS", "SSIS", 
        "Azure DevOps CI/CD", "Angular", "GIT", "JavaScript", "jQuery", "Knockout", 
        "Bootstrap", "HTML", "CSS", "TFS", "JIRA", "Unit testing", "GitHub"
      ],
      achievements: [
        "Guided team development efforts throughout the Software Development Lifecycle (SDLC).",
        "Followed agile development processes and organized daily scrum meetings with customers to provide status updates.",
        "Developed modules using ASP.NET MVC, resulting in a 25% improvement in application responsiveness.",
        "Utilized AWS services for scalable cloud deployments.",
        "Integrated and consumed RESTful APIs using .NET Web API.",
        "Created unit test cases using MOQ and check 80% code coverage for each tier",
        "Utilized TypeScript, JavaScript, HTML, and CSS to create responsive user interfaces."
      ]
    },
    {
      id: 3,
      company: "Chetu India",
      position: "Sr Software developer",
      duration: "May 2012 – October 2013",
      location: "Noida, India",
      techStack: [
        "Asp.net", "C#", "WCF", "MS SQL", "SSRS", "SSIS", "Web Forms", "Git", 
        "Crystal Reports", "Ajax Toolkit", "Entity Framework", "jQuery", "TFS"
      ],
      achievements: [
        "Designed, developed, and maintained computer programs and integrations.",
        "Guided the team in troubleshooting and exhibited strong decision-making skills.",
        "Utilized ASP.NET, C#, and .NET framework for application development.",
        "Implemented and optimized SQL Server databases for efficient data storage and retrieval."
      ]
    },
    {
      id: 4,
      company: "Accord Soft Solutions",
      position: "Software developer",
      duration: "September 2010 - May 2012",
      location: "Delhi, India",
      techStack: [
        "Asp.net", "C#", "MS SQL", "SSRS", "SSIS", "Web Forms", "Crystal Reports", 
        "Ajax Toolkit", "Entity Framework", "jQuery", "TFS"
      ],
      achievements: [
        "Designed, developed, and maintained computer programs and integrations.",
        "Utilized ASP.NET, C#, and .NET framework for application development.",
        "Designed and optimized SQL Server databases for efficient data management.",
        "Implemented SSRS reports for generating insightful reports."
      ]
    }
  ]);

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Work Experience</h2>
        <div className="mt-10 space-y-2">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="timeline-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-resume-primary">{exp.position}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 items-center mt-1 mb-2">
                <span className="text-resume-accent font-medium">{exp.company}</span>
                <span className="text-resume-muted text-sm">{exp.duration}</span>
                <span className="text-resume-muted text-sm">{exp.location}</span>
              </div>
              
              <div className="mb-4">
                <p className="font-medium text-sm text-resume-muted mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 text-resume-primary hover:bg-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
