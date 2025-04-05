
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, FileText } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">Education & Certification</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="shadow-md animate-slide-in">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-full bg-blue-100">
                <Award className="h-6 w-6 text-resume-accent" />
              </div>
              <div>
                <CardTitle className="text-xl text-resume-primary">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-resume-accent pl-4 py-2">
                  <h3 className="font-semibold text-resume-primary">Bachelor of Engineering in Computer Science</h3>
                  <p className="text-resume-muted">2006 - 2010</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md animate-slide-in animate-delay-200">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-full bg-blue-100">
                <FileText className="h-6 w-6 text-resume-accent" />
              </div>
              <div>
                <CardTitle className="text-xl text-resume-primary">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-resume-accent pl-4 py-2">
                  <h3 className="font-semibold text-resume-primary">486 Developing ASP.NET MVC Web Applications</h3>
                  <p className="text-resume-muted">Microsoft Certification</p>
                </div>
                <div className="border-l-2 border-resume-accent pl-4 py-2">
                  <h3 className="font-semibold text-resume-primary">461 Querying Microsoft SQL Server 2012</h3>
                  <p className="text-resume-muted">Microsoft Certification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <Card className="shadow-md animate-slide-in animate-delay-300">
            <CardHeader>
              <CardTitle className="text-xl text-resume-primary">Additional Information and Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Adept problem-solving and analytical skills</li>
                <li>Excellent written and verbal communication, leadership, and interpersonal skills</li>
                <li>Proven track record of delivering high-quality software solutions within deadlines</li>
                <li>Recipient of multiple monthly and quarterly excellence awards in the current organization</li>
                <li>Acknowledged with client appreciation in multiple emails featured on the organization's Yammer board</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
