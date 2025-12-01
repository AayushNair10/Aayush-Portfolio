import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I am a Computer Science graduate student at Stony Brook University, passionate 
              about building reliable, scalable software and applying machine learning 
              to real-world problems. My experience spans full-stack development, ML 
              pipelines, performance-oriented systems engineering and distributed systems.
            </p>

            <p className="text-muted-foreground">
              I enjoy working end-to-end—designing APIs, optimizing backend logic, building 
              intuitive front-end interfaces, and developing ML models that are both accurate 
              and efficient. I have previously worked on projects ranging from a low-latency 
              C++ matching engine to ML-based security models and full-stack applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="https://drive.google.com/uc?export=download&id=1yr4KWGzpf36fQ7PJAuaWtm_NEeHVaT3l"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button">
                {" "}
                Download Resume
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Get In Touch
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
                  <h4 className="font-semibold text-lg"> Machine Learning & AI</h4>
                  <p className="text-muted-foreground">
                    Building data-driven solutions and modern workflows such as embeddings and RAG-based retrieval for enhanced applications.
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
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, functional applications across frontend and backend using modern frameworks and clean engineering practices.
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
                  <h4 className="font-semibold text-lg">Distributed Systems Engineering</h4>
                  <p className="text-muted-foreground">
                    Working with concepts like replication, consensus, and fault-tolerant architectures to design systems that scale reliably.
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
