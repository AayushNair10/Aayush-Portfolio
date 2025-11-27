import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "C / C++", level: 92, category: "languages" },
  { name: "Python", level: 90, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 88, category: "languages" },
  { name: "SQL", level: 88, category: "languages" },

  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "HTML & CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Responsive UI Design", level: 92, category: "frontend" },

  // Backend
  { name: "Node.js", level: 82, category: "backend" },
  { name: "PHP", level: 78, category: "backend" },
  { name: "FastAPI", level: 86, category: "backend" },
  { name: "Flask", level: 82, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "Backend Architecture", level: 85, category: "backend" },

  // Databases & Storage
  { name: "PostgreSQL", level: 86, category: "databases" },
  { name: "MySQL", level: 82, category: "databases" },
  { name: "MongoDB", level: 78, category: "databases" },
  { name: "Database Design", level: 85, category: "databases" },
  { name: "Indexing & Query Optimization", level: 84, category: "databases" },

  // Machine Learning & AI
  { name: "ML Fundamentals", level: 88, category: "ml" },
  { name: "Deep Learning", level: 86, category: "ml" },
  { name: "NLP & Embeddings", level: 84, category: "ml" },
  { name: "RAG (Retrieval-Augmented Generation)", level: 82, category: "ml" },
  { name: "Model Training & Evaluation", level: 88, category: "ml" },
  { name: "Time-Series Modeling", level: 82, category: "ml" },
  { name: "Data Preprocessing", level: 90, category: "ml" },

  // Distributed Systems & CS Fundamentals
  { name: "Distributed Systems", level: 85, category: "systems" },
  { name: "Consensus Algorithms", level: 82, category: "systems" },
  { name: "Transactions & Concurrency", level: 84, category: "systems" },
  { name: "System Design", level: 88, category: "systems" },
  { name: "Scalability & Fault Tolerance", level: 86, category: "systems" },

  // Tools & DevOps
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 82, category: "tools" },
  { name: "AWS (EC2, S3)", level: 80, category: "tools" },
  { name: "Linux / Shell", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 82, category: "tools" },
  { name: "CI/CD Basics", level: 78, category: "tools" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "databases",
  "ml",
  "systems",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
