import { FiBriefcase, FiAward } from 'react-icons/fi'
import { experience, about } from '../data/portfolio'

export default function Experience() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <p className="text-accent font-mono text-sm mb-2">03. Experience</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Where I've worked</h1>
                    <p className="text-muted">Building real products, one project at a time.</p>
                </div>

                {/* Work Experience */}
                <div className="space-y-6 mb-16">
                    {experience.map((exp, i) => (
                        <div key={i} className="p-6 md:p-8 rounded-2xl border border-border bg-card">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <FiBriefcase className="text-accent" />
                                        <h2 className="text-xl font-bold text-text">{exp.role}</h2>
                                    </div>
                                    <p className="text-accent text-sm font-medium">{exp.company}</p>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-text text-sm font-mono">{exp.period}</p>
                                    <p className="text-muted text-xs">{exp.location}</p>
                                </div>
                            </div>

                            <ul className="space-y-2 mt-4">
                                {exp.bullets.map((b, j) => (
                                    <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                                        <span className="text-accent mt-1.5">▹</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <h2 className="text-2xl font-bold text-text mb-6">Education</h2>
                <div className="space-y-4">
                    {about.education.map((edu, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-border bg-card flex gap-4">
                            <div className="shrink-0">
                                <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-accent">
                                    <FiAward />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                    <div>
                                        <h3 className="text-text font-semibold">{edu.degree}</h3>
                                        <p className="text-muted text-sm">{edu.school}</p>
                                    </div>
                                    <p className="text-muted text-xs font-mono shrink-0">{edu.period}</p>
                                </div>
                                {edu.extra && (
                                    <p className="text-muted text-xs mt-2">{edu.extra}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}