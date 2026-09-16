import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {personal.name}. Built with React + Tailwind.
          </p>
          <div className="flex gap-5 text-muted">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-lg"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-accent transition-colors text-lg"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}