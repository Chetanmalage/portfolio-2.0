import { Link } from 'react-router-dom'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal, projects } from '../data/portfolio'

export default function Home() {
    const featured = projects.filter((p) => p.featured)

    return (
        <>
            {/* Hero */}
            <section className="min-h-screen flex items-center relative overflow-hidden">
                {/* Background glows */}
                <div
                    className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
                    style={{ background: '#10B981' }}
                ></div>
                <div
                    className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
                    style={{ background: '#06B6D4' }}
                ></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 pt-24 pb-32 w-full">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        {/* Text — 3 columns */}
                        <div className="md:col-span-3 fade-in-up">
                            <p className="text-accent mb-4 font-mono text-sm">
                                Hi, my name is
                            </p>

                            <h1 className="text-5xl md:text-7xl font-bold text-text mb-4 leading-tight">
                                {personal.name}.
                            </h1>

                            <h2 className="text-3xl md:text-5xl font-bold text-muted mb-6 leading-tight">
                                I build things for the web.
                            </h2>

                            <p className="text-muted max-w-xl mb-8 leading-relaxed">
                                {personal.tagline} Currently focused on building production-grade
                                applications with <span className="text-accent">Spring Boot</span>,{' '}
                                <span className="text-accent">React</span>, and{' '}
                                <span className="text-accent">MongoDB</span>.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <Link
                                    to="/projects"
                                    className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-black font-medium hover:bg-accent-dim transition-all"
                                >
                                    View Projects
                                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="px-6 py-3 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition-all"
                                >
                                    Get in touch
                                </Link>
                            </div>

                            <div className="flex gap-5 text-muted text-xl">
                                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href={personal.leetcode} target="_blank" rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors" aria-label="LeetCode">
                                    <SiLeetcode />
                                </a>
                            </div>
                        </div>

                        {/* Profile photo — 2 columns */}
                        <div className="md:col-span-2 flex justify-center md:justify-end">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 rounded-full blur-2xl opacity-30"
                                    style={{ background: '#10B981' }}
                                ></div>
                                <img
                                    src={personal.profileImage}
                                    alt={personal.name}
                                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent/30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted text-xs animate-bounce">
                        <span>Scroll</span>
                        <HiChevronDown />
                    </div>
                </div>
            </section>

            {/* Featured projects preview */}
            <section className="py-20 px-6 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <p className="text-accent font-mono text-sm mb-2">Featured Work</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-text">
                                What I've been building
                            </h2>
                        </div>
                        <Link
                            to="/projects"
                            className="hidden md:flex items-center gap-2 text-accent hover:text-accent-dim transition-colors text-sm"
                        >
                            All projects <HiArrowRight />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {featured.map((p) => (
                            <Link
                                key={p.id}
                                to="/projects"
                                className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all"
                            >
                                <div className="h-40 rounded-lg mb-4 overflow-hidden bg-bg flex items-center justify-center">
                                    {p.image ? (
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="text-4xl font-bold text-accent/40">
                                            {p.title.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-text mb-1 group-hover:text-accent transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-accent text-xs mb-3">{p.subtitle}</p>
                                <p className="text-muted text-sm line-clamp-2">{p.description}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-accent text-sm"
                        >
                            All projects <HiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}