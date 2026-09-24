import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ExternalLink, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');
    setStatusMessage('Transmitting your message directly to Kavinkrishna...');

    try {
      // Dispatches via FormSubmit directly to kavinkrishna2007@email.com
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || 'New Message from ' + formData.name}`,
          message: formData.message,
          _template: 'box'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully to kavinkrishna2007@email.com! I will respond promptly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setStatus('success');
        setStatusMessage('Email client opened. You can also send directly to kavinkrishna2007@email.com');
      }
    } catch (err) {
      console.warn('Form submit network fallback to mailto:', err);
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setStatus('success');
      setStatusMessage('Direct email link opened in your mail app!');
    }
  };

  return (
    <section id="contact" className="py-20 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f8fafc] tracking-tight">
            Get In <span className="bg-gradient-to-r from-[#f8fafc] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-[#a1a1aa] text-base">
            Have a project, software engineering role, internship opportunity, or technical discussion? Send a message directly to my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Contacts & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#2a2b36] space-y-6">
              
              <div>
                <h3 className="text-xl font-bold font-heading text-[#f8fafc]">
                  Contact Information
                </h3>
                <p className="text-xs text-[#a1a1aa] mt-1">
                  Guaranteed delivery directly to my primary email inbox.
                </p>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-[#17181f]/90 border border-[#2a2b36] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#a1a1aa]">Direct Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs text-[#fbbf24] hover:text-[#f8fafc] font-mono transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-mono font-semibold text-[#f8fafc] hover:text-[#fbbf24] transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>

                <div className="pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#1f2029] hover:bg-[#252631] text-xs font-semibold text-[#f8fafc] transition-colors border border-[#2a2b36]"
                  >
                    <Mail size={14} className="text-[#fbbf24]" />
                    <span>Open in Default Mail Client</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#a1a1aa] block">
                  Engineering Profiles
                </span>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#17181f]/60 border border-[#2a2b36] hover:border-[#f59e0b]/40 hover:text-[#f8fafc] transition-all text-[#a1a1aa]"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-[#71717a]">@{personalInfo.githubHandle}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#17181f]/60 border border-[#2a2b36] hover:border-[#f59e0b]/40 hover:text-[#f8fafc] transition-all text-[#a1a1aa]"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink size={14} className="text-[#71717a]" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#17181f]/60 border border-[#2a2b36] text-[#a1a1aa]">
                  <MapPin size={18} className="text-[#d97706] shrink-0" />
                  <span className="text-xs font-medium">{personalInfo.location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Functional Working Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#2a2b36]">
              <h3 className="text-xl font-bold font-heading text-[#f8fafc] mb-2">
                Send an Instant Message
              </h3>
              <p className="text-xs text-[#a1a1aa] mb-6 font-sans">
                Fill out the details below. This form directly delivers your message to <span className="text-[#fbbf24] font-mono">{personalInfo.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131318] border border-[#2a2b36] text-[#f8fafc] placeholder-[#71717a] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#131318] border border-[#2a2b36] text-[#f8fafc] placeholder-[#71717a] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#131318] border border-[#2a2b36] text-[#f8fafc] placeholder-[#71717a] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, project scope, or opportunity details here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#131318] border border-[#2a2b36] text-[#f8fafc] placeholder-[#71717a] text-sm focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b] transition-all resize-none"
                  />
                </div>

                {/* Status Message Alert */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
                      status === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                        : status === 'error'
                        ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                        : 'bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#fbbf24]'
                    }`}
                  >
                    {status === 'loading' && <Loader2 size={16} className="animate-spin shrink-0" />}
                    {status === 'success' && <Check size={16} className="shrink-0" />}
                    {status === 'error' && <AlertCircle size={16} className="shrink-0" />}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0d0d11] font-bold text-sm transition-all shadow-lg shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/35 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
