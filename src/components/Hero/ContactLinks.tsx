import { Mail } from "lucide-react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { BrandIcon } from "@/components/shared/icons";

export function ContactLinks() {
  return (
    <div className="contact-links" role="group" aria-label="Contact and social profiles">
      <a href="mailto:tiarexine@gmail.com">
        <Mail aria-hidden="true" />
        <span>Email me</span>
      </a>
      <a href="https://www.linkedin.com/in/tia-rexine-781528b6" target="_blank" rel="noreferrer">
        <BrandIcon icon={faLinkedinIn} />
        <span>LinkedIn</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a href="https://github.com/makapiatia" target="_blank" rel="noreferrer">
        <BrandIcon icon={faGithub} />
        <span>GitHub</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
