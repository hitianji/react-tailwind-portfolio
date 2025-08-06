import { School, GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-1">
            <h3 className="text-1.5xl font-semibold text-left overflow-auto whitespace-pre">
              Duke University, Durham, NC
            </h3>

            <p className="text-muted-foreground text-sm text-left italic overflow-auto whitespace-pre">
              M.S. in Electrical & Computer Engineering - Software Engineering
            </p>

            <p className="text-muted-foreground text-sm text-left">
              August 2025 - August 2027
            </p>

            <p className="text-muted-foreground text-sm text-left">
              Cumulative GPA: 
            </p>

            <p className="text-muted-foreground text-sm text-left">
              Relevant Courses: Software Engineering, Operating Systems, Large-Scale Data Systems, Cloud Computing, 
              Software Reliability, Secure Software Systems, Database Systems, Distributed Systems, Machine Learning
            </p>
 
            <p className="h-4" />

            <h3 className="text-1.5xl font-semibold text-left overflow-auto whitespace-pre">
              University of California, Santa Barbara
            </h3>

            <p className="text-muted-foreground text-sm text-left italic overflow-auto whitespace-pre">
              Bachelor of Science (B.S.) in Statistics & Data Science 
            </p>

            <p className="text-muted-foreground text-sm text-left">
              September 2020 - September 2024
            </p>
            
            <p className="text-muted-foreground text-sm text-left">
              Cumulative GPA: 3.73/4.0
            </p>

            <p className="text-muted-foreground text-sm text-left">
              Relevant Courses: Time Series, Statistical Machine Learning, Regression Analysis, Real Number Analysis, 
              Stochastic Process, Sampling Techniques, Design and Analysis of Experiments, Data Science Concepts and Analysis, 
              SAS, R, Python, C++
            </p>

            <p className="h-4" />

            <h3 className="text-1.5xl font-semibold text-left overflow-auto whitespace-pre">
              Johns Hopkins University - Center for Talented Youth
            </h3>

            <p className="text-muted-foreground text-sm text-left italic overflow-auto whitespace-pre">
              Summer Program
            </p>

            <p className="text-muted-foreground text-sm text-left">
              July 2018 - August 2018
            </p>

            <p className="text-muted-foreground text-sm text-left">
              Grade: A
            </p>

            <p className="text-muted-foreground text-sm text-left">
              Relevant Courses: Principle of Engineering Design, Physics, Calculus
            </p>


            </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> Duke University</h4>
                  <p className="text-muted-foreground">
                    https://www.duke.edu/
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> UC Santa Barbara </h4>
                  <p className="text-muted-foreground">
                    https://www.ucsb.edu/
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semi-bold text-lg"> Johns Hopkins University - CTY </h4>
                  <p className="text-muted-foreground">
                    https://cty.jhu.edu/
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