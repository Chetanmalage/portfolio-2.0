import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal } from '../data/portfolio'

export default function Contact() {
    const [status, setStatus] = useState('idle')  // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        const formData = new FormData(e.target)
        try {
            const res = await fetch(personal.formspree, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            })
            if (res.ok) {
                setStatus('success')
                e.target.reset()
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <p className="text-accent font-mono text-sm mb-2">04. Contact</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Let's talk</h1>
                    <p className="text-muted max-w-xl mx-auto">
                        Have a project, opportunity, or just want to say hi? My inbox is always open.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left — Contact info */}
                    <div className="space-y-4">
                        <a href={`mailto:${personal.email}`}
                            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center text-accent">
                                <FiMail />
                            </div>
                            <div>
                                <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                                <p className="text-text text-sm">{personal.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${personal.phone}`}
                            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center text-accent">
                                <FiPhone />
                            </div>
                            <div>
                                <p className="text-xs text-muted uppercase tracking-wider">Phone</p>
                                <p className="text-text text-sm">{personal.phone}</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                            <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center text-accent">
                                <FiMapPin />
                            </div>
                            <div>
                                <p className="text-xs text-muted uppercase tracking-wider">Location</p>
                                <p className="text-text text-sm">Solapur, Maharashtra, India</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="pt-6">
                            <p className="text-xs text-muted uppercase tracking-wider mb-3">Find me online</p>
                            <div className="flex gap-3">
                                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors text-lg"
                                    aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors text-lg"
                                    aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href={personal.leetcode} target="_blank" rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors text-lg"
                                    aria-label="LeetCode">
                                    <SiLeetcode />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-xs text-muted uppercase tracking-wider block mb-2">Name</label>
                                <input type="text" name="name" required
                                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                                    placeholder="Your name" />
                            </div>

                            <div>
                                <label className="text-xs text-muted uppercase tracking-wider block mb-2">Email</label>
                                <input type="email" name="email" required
                                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text placeholder:text-muted focus:border-accent focus:outline-none transition-colors"
                                    placeholder="you@example.com" />
                            </div>

                            <div>
                                <label className="text-xs text-muted uppercase tracking-wider block mb-2">Message</label>
                                <textarea name="message" required rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text placeholder:text-muted focus:border-accent focus:outline-none transition-colors resize-none"
                                    placeholder="What's on your mind?" />
                            </div>

                            <button type="submit" disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-black font-medium hover:bg-accent-dim transition-colors disabled:opacity-50">
                                <FiSend />
                                {status === 'sending' ? 'Sending…' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-sm text-center text-accent">✓ Message sent! I'll get back to you soon.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-center text-red-400">✗ Something went wrong. Try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}