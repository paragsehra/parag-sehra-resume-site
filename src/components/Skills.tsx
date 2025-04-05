
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  years: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
}

const Skills = () => {
  const [skills] = useState<Skill[]>([
    // Languages
    { name: "C#", level: 95, years: "12+ years", category: "languages" },
    { name: "JavaScript", level: 90, years: "7+ years", category: "languages" },
    { name: "TypeScript", level: 85, years: "4+ years", category: "languages" },
    { name: "HTML/CSS", level: 90, years: "12+ years", category: "languages" },
    
    // Frameworks
    { name: "ASP.NET", level: 95, years: "12+ years", category: "frameworks" },
    { name: ".NET Core", level: 90, years: "4+ years", category: "frameworks" },
    { name: "Angular", level: 85, years: "4+ years", category: "frameworks" },
    { name: "React", level: 80, years: "2+ years", category: "frameworks" },
    { name: "REST API", level: 90, years: "7+ years", category: "frameworks" },
    
    // Databases
    { name: "MS SQL", level: 90, years: "12+ years", category: "databases" },
    { name: "MongoDB", level: 80, years: "3+ years", category: "databases" },
    
    // Tools
    { name: "Azure DevOps", level: 85, years: "4+ years", category: "tools" },
    { name: "Git", level: 90, years: "7+ years", category: "tools" },
    { name: "AWS", level: 75, years: "2+ years", category: "tools" },
    { name: "Cypress", level: 75, years: "2+ years", category: "tools" }
  ]);

  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleSkills(skills);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [skills]);

  const categories = {
    languages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    databases: "Databases",
    tools: "Tools & Platforms"
  };

  return (
    <section id="skills" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {(Object.keys(categories) as Array<keyof typeof categories>).map(category => (
            <Card key={category} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-resume-primary mb-6">
                  {categories[category]}
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium text-resume-primary">{skill.name}</span>
                            <span className="text-sm text-resume-muted ml-2">{skill.years}</span>
                          </div>
                          <span className="text-sm font-medium text-resume-accent">
                            {visibleSkills.includes(skill) ? `${skill.level}%` : '0%'}
                          </span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-bar-fill" 
                            style={{ 
                              width: visibleSkills.includes(skill) ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
