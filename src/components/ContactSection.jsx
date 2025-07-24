import { 
    Mail, 
    Phone, 
    MapPin,
    Instagram, 
    Linkedin, 
    Youtube, 
    Facebook,
    Send,
} from "lucide-react";
import {cn} from "@/lib/utils";
import { useToast } from "/Users/nautilus/Desktop/BEAUTIFUL-PORTFOLIO/src/hooks/use-toast.js";
import { useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
          toast({
            title: 'Message sent',
            description: 'Congratulations! Your message has been sent successfully.',
          });
          setIsSubmitting(false);
        }, 1500);
    };
  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out to me via email 
          or any of the social media platforms listed below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
            
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                    <h4 className="font-medium text-left"> Email</h4>
                    <a href="mailto:tianji3201@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        tianji3201@gmail.com
                    </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                    <h4 className="font-medium text-left"> Phone</h4>
                    <a href="tel:+18058699039" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (805) 869-9039
                    </a>
                </div>
              </div>



              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                    <h4 className="font-medium text-left"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        Santa Barbara, CA United States
                    </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="www.linkedin.com/in/tianji-li-6418b0166" target="_blank">
                    <Linkedin />
                </a>

                <a href="www.instagram.com/tianji.li.14" target="_blank">
                    <Instagram />
                </a>

                <a href="#" target="_blank">
                    <Facebook />
                </a>

                <a href="#" target="_blank">
                    <Youtube />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs" 
              onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2"
                    > Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 rounded-md border border-input 
                      bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                      placeholder="Please Enter Here..."
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2"
                    > Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 rounded-md border border-input 
                      bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                      placeholder="Please Enter Here..."
                    />
                </div>

                <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2"
                    > 
                      {" "}
                      Your Message
                    </label>

                    <textarea
                      id="message" 
                      name="message" 
                      required 
                      className="w-full px-4 py-3 rounded-md border border-input 
                      bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Please Enter Here..."
                    />
                </div>

                <button 
                  typeof="submit" 
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",

                    )}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};