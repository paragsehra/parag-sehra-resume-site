import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_a4mkifk';
    const templateID = 'template_g3yzlla';
    const userID = 'onttXp0FjwM0V-P6A';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email error:', error);
        toast({
          title: "Failed to send",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-slide-in">
            <h3 className="text-xl font-semibold text-resume-primary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Phone className="h-5 w-5 text-resume-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-resume-muted">Phone</p>
                      <p className="font-medium">(509) 230-9168</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Mail className="h-5 w-5 text-resume-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-resume-muted">Email</p>
                      <p className="font-medium">sehra.parag@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <Linkedin className="h-5 w-5 text-resume-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-resume-muted">LinkedIn</p>
                      <p className="font-medium">linkedin.com/in/paragsehra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100">
                      <MapPin className="h-5 w-5 text-resume-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-resume-muted">Location</p>
                      <p className="font-medium">Seattle, WA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-slide-in animate-delay-200">
            <h3 className="text-xl font-semibold text-resume-primary mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-resume-muted mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-resume-muted mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-resume-muted mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Mail Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-resume-muted mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-resume-accent hover:bg-resume-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
