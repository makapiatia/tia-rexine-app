import classNames from "classnames";
import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { BrandIcon } from "@/components/shared/icons";

const link = classNames(
  "-my-1 inline-flex items-center py-1 transition-colors duration-180 hover:text-white",
  "gap-1.25 text-[11px] min-[401px]:gap-1.5 min-[401px]:text-[12px]",
  "[&_svg]:size-4 [&_svg]:stroke-[1.8]",
);

export function ContactLinks({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center text-sand/82",
        "flex-wrap gap-3.25 min-[401px]:gap-4.5 md:flex-nowrap",
        className,
      )}
      role="group"
      aria-label="Contact and social profiles"
    >
      <a className={link} href="mailto:tiarexine@gmail.com">
        <Mail aria-hidden="true" />
        <span>Email me</span>
      </a>
      <a className={link} href="https://www.linkedin.com/in/tia-rexine-781528b6" target="_blank" rel="noreferrer">
        <BrandIcon icon={faLinkedinIn} />
        <span>LinkedIn</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <a className={link} href="https://github.com/makapiatia" target="_blank" rel="noreferrer">
        <BrandIcon icon={faGithub} />
        <span>GitHub</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      <Link className={link} href="/resume">
        <FileText aria-hidden="true" />
        <span>Resume</span>
      </Link>
    </div>
  );
}
