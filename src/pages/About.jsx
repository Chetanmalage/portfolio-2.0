import { FiAward } from 'react-icons/fi'
import { about, personal } from '../data/portfolio'

export default function About() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <p className="text-accent font-mono text-sm mb-2">01. About Me</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
                        Get to know me
                    </h1>
                </div>

                {/* Bio + Photo */}
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    <div className="md:col-span-2 space-y-4">
                        {about.paragraphs.map((p, i) => (
                            <p key={i} className="text-muted leading-relaxed">{p}</p>
                        ))}

                        <div className="flex flex-wrap gap-3 pt-6">
                            <a href={personal.github} target="_blank" rel="noopener noreferrer"
                                className="text-sm text-accent hover:text-accent-dim transition-colors">
                                github.com/Chetanmalage →
                            </a>
                            <a href={personal.leetcode} target="_blank" rel="noopener noreferrer"
                                className="text-sm text-accent hover:text-accent-dim transition-colors">
                                leetcode →
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl border border-border overflow-hidden bg-card">
                            <img
                                src={personal.profileImage}
                                alt={personal.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-text mb-8">Tech Stack</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {about.skills.map((skill) => (
                            <div key={skill.category}
                                className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors">
                                <h3 className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">
                                    {skill.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item) => (
                                        <span key={item}
                                            className="text-xs px-3 py-1 rounded-full bg-bg text-muted border border-border">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-2xl font-bold text-text mb-8">Education</h2>
                    <div className="space-y-4">
                        {about.education.map((edu, i) => (
                            <div key={i}
                                className="p-6 rounded-xl border border-border bg-card flex gap-4">
                                <div className="shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-accent">
                                        <FiAward />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-text font-semibold">{edu.degree}</h3>
                                    <p className="text-muted text-sm">{edu.school}</p>
                                    <p className="text-muted text-xs mt-1 font-mono">
                                        {edu.period} · {edu.location}
                                        {edu.extra && ` · ${edu.extra}`}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}