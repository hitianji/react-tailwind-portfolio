import { Description } from "@radix-ui/react-toast";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "Job Placement Prediction",
      description: "A machine learning model that predicts job placement based on user input",
      image: "/projects/20210330112333_image1.jpg",
      tags: ["pandas", "scikit-learn", "R", "Machine Learning"],
      demoUrl: "#", // live demo
      githubUrl: "https://github.com/hitianji/job-placement-prediction", //github repository
    },

    {
      id: 2,
      title: "Post-Pandemic Mobility Trend Analysis",
      description: 
      "Analyzing Post-Pandemic Mobility Trends: A Time-Series Approach Using the Box-Jenkins and Spectral Analysis Methods",
      image: "/projects/post_pandemic_analysis.png",
      tags: ["Python", "pandas", "matplotlib", "statsmodels", "Time Series Analysis"],
      demoUrl: "#", // live demo
      githubUrl: "https://github.com/hitianji/post-pandemic-mobility", //github repository
    },

    {
      id: 3,
      title: "Global Happiness Analysis",
      description: 
      "Analysis of Global Happiness Trends and Economic Indicators",
      image: "/projects/global_happiness.png",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "R", "Data Analysis"],
      demoUrl: "#", // live demo
      githubUrl: "https://github.com/hitianji/happiness-economy-analysis", //github repository
    },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "} 
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I have worked on. These projects showcase my skills in web development and 
          my ability to create visually appealing and functional websites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full 
                  object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium rounded-full 
                      bg-secondary text-secondary-forground">
                      {tag}
                      </span>
                    ))}
                </div>

              <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  > 
                    <ExternalLink size={20}/>
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
               target="_blank" 
               href="https://github.com/hitianji"
            >
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};