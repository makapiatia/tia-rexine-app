import Image from "next/image";
import { Mail } from "lucide-react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function BrandIcon({ icon }: { icon: typeof faGithub | typeof faLinkedinIn }) {
  const [width, height, , , path] = icon.icon;

  return (
    <svg aria-hidden="true" fill="currentColor" viewBox={`0 0 ${width} ${height}`}>
      {Array.isArray(path)
        ? path.map((segment, index) => <path d={segment} key={index} />)
        : <path d={path} />}
    </svg>
  );
}

const projects = [
  {
    name: "Rexine Spa Care",
    url: "https://www.rexinespacare.com/",
    logo: "/rexine-spa-logo.png",
    action: "Explore spa care",
    theme: "spa",
  },
  {
    name: "Free Space Therapy",
    url: "https://www.freespace-therapy.com/",
    logo: "/free-space-logo.svg",
    action: "Visit Free Space",
    theme: "space",
  },
];

export default function Home() {
  return (
    <main className="dark-shell" id="top">
      <section className="dark-hero" aria-labelledby="hero-title">
        <div className="dark-identity">
          <h1 id="hero-title">Tia Rexine</h1>
          <p>Full Stack Software Engineer</p>
          <div className="contact-links" aria-label="Contact and social profiles">
            <a href="mailto:tiarexine@gmail.com" aria-label="Email Tia">
              <Mail aria-hidden="true" />
              <span>Email me</span>
            </a>
            <a href="https://www.linkedin.com/in/tia-rexine-781528b6" target="_blank" rel="noreferrer">
              <BrandIcon icon={faLinkedinIn} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/makapiatia" target="_blank" rel="noreferrer">
              <BrandIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="dark-projects" id="work">
          {projects.map((project) => (
            <a
              className={`dark-project-link ${project.theme}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={project.name}
              aria-label={`Visit ${project.name}`}
            >
              <span className={`project-art ${project.theme}`}>
                <Image src={project.logo} alt="" width={180} height={140} className="project-logo" />
              </span>
              <span className="project-name">{project.name}</span>
              <span className="project-action">{project.action}</span>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}
