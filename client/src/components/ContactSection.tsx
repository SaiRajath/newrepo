import { useRef, useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (isIntersecting && sectionRef.current) {
      const animateElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        el.classList.add('visible');
      });
    }
  }, [isIntersecting]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a server
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-[hsl(var(--bg-light))] dark:bg-[hsl(var(--bg-dark))]"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-2 font-sans text-center mx-auto relative inline-block">
          Get In Touch
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[hsl(var(--secondary))]"></span>
        </h2>
        <p className="text-center mb-10 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
        </p>
        
        <div className="bg-white dark:bg-[hsl(var(--primary-light))] p-8 rounded-lg shadow-md animate-on-scroll">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))] dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))] dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))] dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))] dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[hsl(var(--primary))] dark:bg-[hsl(var(--secondary))] text-white dark:text-[hsl(var(--primary))] px-6 py-3 rounded font-medium hover:bg-[hsl(var(--primary-light))] dark:hover:bg-[hsl(var(--secondary-dark))] transition-colors duration-300 w-full md:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          
          {/* Alternative Contact Methods */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Or reach out directly:</h3>
            
            <div className="space-y-4">
              <a href="mailto:cbsairajath@gmail.com" className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--secondary))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  <FaEnvelope />
                </div>
                <span className="group-hover:text-[hsl(var(--secondary))] transition-colors duration-300">cbsairajath@gmail.com</span>
              </a>
              
              <a href="tel:+917019658120" className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--secondary))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  <FaPhone />
                </div>
                <span className="group-hover:text-[hsl(var(--secondary))] transition-colors duration-300">+91 7019658120</span>
              </a>
              
              <a href="https://www.linkedin.com/in/cbsairajath/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-[hsl(var(--secondary))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  <FaLinkedin />
                </div>
                <span className="group-hover:text-[hsl(var(--secondary))] transition-colors duration-300">linkedin.com/in/cbsairajath</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
