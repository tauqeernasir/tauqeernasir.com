import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Work</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" aria-label="About Me">
        <h1 itemProp="name">Muhammad Tauqeer Nasir</h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1.25rem' }} itemProp="jobTitle">Engineering Lead</p>
        <p style={{ marginTop: '1.5rem', maxWidth: '600px' }}>
          I am a seasoned Engineering Lead and Fullstack Architect with a passion for building scalable, high-performance distributed systems. With over 7 years of experience ranging from high-growth startups to large-scale e-commerce platforms. I specialize in bridging the gap between complex technical architecture and seamless user experiences.
        </p>
        <p style={{ marginTop: '1.5rem', maxWidth: '600px' }}>
          My expertise lies in leading cross-functional teams, refining microservices architectures, and optimizing data-driven workflows. Whether it’s architecting robust backends in Node.js, Go, or Python or crafting responsive frontends in React and Next.js, I focus on delivering clean, maintainable code that solves real-world business challenges.
        </p>
        <div className="social-links">
          <a href="https://linkedin.com/in/tauqeer-nasir" target="_blank" className="social-link">LinkedIn</a>
          <a href="https://github.com/tauqeernasir" target="_blank" className="social-link">GitHub</a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

          <ExperienceItem
            title="Engineering Lead"
            company="Tenderd"
            location="Dubai, UAE"
            period="Oct 2024 - Present"
            description={[
              "Lead and manage a team of 7 engineers, conducting mentorship and recruitment.",
              "Maintain high code quality standards through comprehensive code reviews.",
              "Collaborate with product team on backlog grooming and sprint planning.",
              "Built custom binary parser for telematics data ingestion and visualization tool.",
              "Directed planning and development of Nexus dashboard and Logistics modules."
            ]}
            tech={["Typescript", "NodeJS", "Python", "NestJS", "Mongoose", "React", "Zustand", "Redis", "Mongodb", "Kafka"]}
          />

          <ExperienceItem
            title="Sr. Software Engineer (Fullstack)"
            company="Mumzworld"
            location="Dubai, UAE"
            period="Aug 2021 - Oct 2024"
            description={[
              "Led Image Optimizer Lambda Service development, reducing manual processing by ~80%.",
              "Developed Automated data validation engine for PIM, cutting manual review by ~40%.",
              "Introduced Google Sheet AppScripts, reducing effort by ~400%.",
              "Implemented System/Audit Logs for API debugging and tracking.",
              "Implemented AWS SQS for asynchronous file processing and MJML for emails."
            ]}
            tech={["Typescript", "NodeJS", "NestJS", "TypeORM", "GraphQL", "React", "Redux", "AWS Lambda", "PostgreSQL"]}
          />

          <ExperienceItem
            title="Sr. Software Engineer (Fullstack)"
            company="Tradeling"
            location="Dubai, UAE"
            period="Feb 2020 - Aug 2021"
            description={[
              "Implemented dynamic data validation system, reducing QC checks by ~30%.",
              "Enhanced main search feature with ElasticSearch, boosting performance by 40%.",
              "Developed VS Code plugin for English/Arabic code migration, reducing efforts by ~80%.",
              "Contributed to automation of SDK creation and release for 8 microservices."
            ]}
            tech={["Typescript", "Golang", "PHP", "NodeJS", "React", "Redux", "Elastic Search", "Kafka", "MongoDB"]}
          />

          <ExperienceItem
            title="Sr. Software Engineer (Fullstack)"
            company="Repairdesk.co"
            location="Lahore, Pakistan"
            period="Apr 2019 - Feb 2020"
            description={[
              "Launched Schedule appointment service for repair tracking.",
              "Introduced and guided adoption of Microservices Architecture.",
              "Oversaw initial release of Product Information Management system.",
              "Engineered bulk import feature for seamless Excel uploads."
            ]}
            tech={["Typescript", "NodeJS", "TypeORM", "Express", "React", "Redux", "PostgreSQL", "Docker"]}
          />

          <ExperienceItem
            title="Software Engineer (Fullstack)"
            company="QBatch"
            location="Lahore, Pakistan"
            period="Sep 2018 - Apr 2019"
            description={[
              "Collaborated on SaaS application for Amazon sellers management.",
              "Developed automated repricing feature based on market trends.",
              "Integrated AgGrid to enhance data tables for product info editing.",
              "Enhanced Bulk Import feature for large files and async processing."
            ]}
            tech={["JavaScript", "NodeJS", "MeteorJS", "Blaze", "Redis", "PostgreSQL", "AWS"]}
          />

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <SkillCategory title="Frontend" skills={["ReactJS", "NextJS", "Redux", "SASS", "Styled-components"]} />
          <SkillCategory title="Backend" skills={["NodeJS", "NestJS", "ExpressJS", "PHP", "Golang", "Python"]} />
          <SkillCategory title="Architecture & APIs" skills={["Monolith", "Microservices", "REST", "GraphQL", "Swagger"]} />
          <SkillCategory title="Databases & Caching" skills={["MongoDB", "Firebase", "MySQL", "Postgres", "Elastic Search", "Redis"]} />
          <SkillCategory title="Cloud & DevOps" skills={["AWS", "GCP", "Docker", "Github Actions", "ArgoCD", "Kubernetes"]} />
          <SkillCategory title="Testing & Monitoring" skills={["Jest", "Cypress", "Playwright", "Sentry", "Datadog", "Prometheus"]} />
        </div>
      </section>

      {/* Education & Languages */}
      <section id="education" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div>
          <h2>Education</h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>BS in Computer Science</h3>
              <span className="text-muted text-small">Government College University, Faisalabad</span>
            </div>
            <p className="text-small">2014 - 2018</p>
          </div>
        </div>
        <div>
          <h2>Languages</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span className="badge">English (Advanced)</span>
            <span className="badge">Urdu (Native)</span>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '4rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <p className="text-small text-muted">© {new Date().getFullYear()} Muhammad Tauqeer Nasir. Built with Next.js.</p>
      </footer>
    </div>
  );
}

function ExperienceItem({ title, company, location, period, description, tech }: {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div>
          <h3>{title}</h3>
          <p className="text-small" style={{ color: 'var(--foreground)' }}>{company} • {location}</p>
        </div>
        <span className="text-muted text-small" style={{ whiteSpace: 'nowrap' }}>{period}</span>
      </div>
      <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', color: 'var(--muted)', fontSize: '0.925rem' }}>
        {description.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.25rem' }}>{item}</li>
        ))}
      </ul>
      <div className="tech-stack">
        {tech.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skills.map((s) => (
          <span key={s} className="text-small" style={{ color: 'var(--foreground)' }}>{s}</span>
        ))}
      </div>
    </div>
  );
}
