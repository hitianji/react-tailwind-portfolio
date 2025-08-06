import { Code, User, Briefcase } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Self <span className="text-primary"> Introduction </span>
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-1.5xl font-semibold"> 
              Hello! My name is Tianji Li. </h3>

            <p className="text-muted-foreground text-sm text-left">
              I am 22 years old and recently graduated from the University of California, Santa Barbara, 
              with a Bachelor of Science degree in Statistics and Data Science and a GPA of 3.73/4. Following my graduation, 
              I have been employed at The Hitachi Group, one of Japan's most distinguished companies, where I engage 
              in research on artificial intelligence and machine learning at the Hitachi Research Institute.
              Starting Fall 2025, I will begin my Master's study in Electrical and Computer Engineering 
              at Duke University with research focus on software engineering. My long-term aspiration is to develop 
              innovative technologies that integrate the strengths of both Japanese and American advancements in AI.
            </p>

            <p className="text-muted-foreground text-sm text-left">
              Outside of my academic and professional pursuits, I am passionate about travel and exploration. 
              I have independently driven across various regions of the United States, including the west, 
              south, east, northeast, even Canada. In June 2025, I undertook a solo 19-day road trip across Japan, 
              covering approximately 4,000 kilometers through Kansai, Chugoku, Kyushuu, Shikoku, and Toukai, and reached
              as far as the southernmost and westernmost points of Japan main island. During my time in Santa Barbara, 
              I often spent my free time skateboarding along the coastline. I also possess a wide range of personal interests 
              and skills, which I would be glad to discuss further. Thank you very much for this opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact
              </a>

              <a href="/projects/Tianji's resume (Duke).pdf" className="px-6 py-2 rounded-full border border-primary 
                text-primary hover:bg-primary/10 transition-colors duration-300">
                  {" "}
                  Curriculum Vitae
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> AI, Software & Large Language Models </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications using modern frameworks, 
                    such as React, Next.js, and Angular.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> Data Science & Machine Learning </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-friendly interfaces for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> Management </h4>
                  <p className="text-muted-foreground">
                    Learning projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>            
            </div>



          </div>
        </div>
      </div>
        
    </section>
  );
};