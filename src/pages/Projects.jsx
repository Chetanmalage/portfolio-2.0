import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'

function ProjectCard({ project, featured }) {
    return (
        <div className={`rounded-2xl border bg-card transition-all hover:border-accent/50 overflow-hidden ${featured ? 'border-accent/30' : 'border-border'
            }`}>
            {/* Project image */}
            <div className="h-48 bg-gradient-to-br from-accent/20 via-bg to-accent/10 flex items-center justify-center relative overflow-hidden">
                {featured && (
                    <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-accent text-black font-medium z-10">
                        Featured
                    </span>
                )}
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-3xl font-bold text-accent/60">{project.title.charAt(0)}</span>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-text">{project.title}</h3>
                        <p className="text-accent text-xs mt-1">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors text-lg"
                                aria-label="GitHub">
                                <FiGithub />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors text-lg"
                                aria-label="Live">
                                <FiExternalLink />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-bg text-muted border border-border">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const featured = projects.filter((p) => p.featured)
    const others = projects.filter((p) => !p.featured)

    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <p className="text-accent font-mono text-sm mb-2">02. Projects</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Things I've built</h1>
                    <p className="text-muted max-w-2xl">
                        From production ecommerce platforms to smaller experiments — here's what I've shipped.
                    </p>
                </div>

                {/* Featured projects */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {featured.map((p) => (
                        <ProjectCard key={p.id} project={p} featured />
                    ))}
                </div>

                {/* Other projects */}
                {others.length > 0 && (
                    <>
                        <h2 className="text-2xl font-bold text-text mb-6">Other projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {others.map((p) => (
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}