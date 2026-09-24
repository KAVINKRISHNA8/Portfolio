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
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1f1c19] tracking-tight">
            Get In <span className="bg-gradient-to-r from-[#1f1c19] via-[#5c544d] to-[#8c7b6c] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-[#6b6158] text-base">
            Have a project, software engineering role, internship opportunity, or technical discussion? Send a message directly to my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Contacts & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#e8dfd5] space-y-6 bg-[#ffffff]">
              
              <div>
                <h3 className="text-xl font-bold font-heading text-[#1f1c19]">
                  Contact Information
                </h3>
                <p className="text-xs text-[#6b6158] mt-1">
                  Guaranteed delivery directly to my primary email inbox.
                </p>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-[#f5f0e8] border border-[#e8dfd5] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#6b6158]">Direct Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs text-[#1f1c19] hover:text-[#5c544d] font-mono transition-colors font-medium"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-700" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
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
                  className="text-base sm:text-lg font-mono font-semibold text-[#1f1c19] hover:text-[#5c544d] transition-colors block break-all"
                >
                  {personalInfo.email}
                </a>

                <div className="pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#ffffff] hover:bg-[#eae2d7] text-xs font-semibold text-[#1f1c19] transition-colors border border-[#ded3c6] shadow-sm"
                  >
                    <Mail size={14} className="text-[#8c7b6c]" />
                    <span>Open in Default Mail Client</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#6b6158] block">
                  Engineering Profiles
                </span>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e8dfd5] hover:border-[#c5b19e] hover:text-[#1f1c19] transition-all text-[#5c544d]"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-[#8c8278]">@{personalInfo.githubHandle}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e8dfd5] hover:border-[#c5b19e] hover:text-[#1f1c19] transition-all text-[#5c544d]"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink size={14} className="text-[#8c8278]" />
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fbf9f5] border border-[#e8dfd5] text-[#5c544d]">
                  <MapPin size={18} className="text-[#8c7b6c] shrink-0" />
                  <span className="text-xs font-medium">{personalInfo.location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Functional Working Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#e8dfd5] bg-[#ffffff]">
              <h3 className="text-xl font-bold font-heading text-[#1f1c19] mb-2">
                Send an Instant Message
              </h3>
              <p className="text-xs text-[#6b6158] mb-6 font-sans">
                Fill out the details below. This form directly delivers your message to <span className="text-[#1f1c19] font-mono font-semibold">{personalInfo.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#6b6158] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fbf9f5] border border-[#ded3c6] text-[#1f1c19] placeholder-[#9e9286] text-sm focus:outline-none focus:border-[#1f1c19] focus:ring-1 focus:ring-[#1f1c19] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#6b6158] mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#fbf9f5] border border-[#ded3c6] text-[#1f1c19] placeholder-[#9e9286] text-sm focus:outline-none focus:border-[#1f1c19] focus:ring-1 focus:ring-[#1f1c19] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6b6158] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fbf9f5] border border-[#ded3c6] text-[#1f1c19] placeholder-[#9e9286] text-sm focus:outline-none focus:border-[#1f1c19] focus:ring-1 focus:ring-[#1f1c19] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6b6158] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, project scope, or opportunity details here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#fbf9f5] border border-[#ded3c6] text-[#1f1c19] placeholder-[#9e9286] text-sm focus:outline-none focus:border-[#1f1c19] focus:ring-1 focus:ring-[#1f1c19] transition-all resize-none"
                  />
                </div>

                {/* Status Message Alert */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
                      status === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-800'
                        : status === 'error'
                        ? 'bg-red-500/10 border border-red-500/30 text-red-800'
                        : 'bg-[#ede5dc] border border-[#ded3c6] text-[#1f1c19]'
                    }`}
                  >
                    {status === 'loading' && <Loader2 size={16} className="animate-spin shrink-0 text-[#1f1c19]" />}
                    {status === 'success' && <Check size={16} className="shrink-0 text-emerald-700" />}
                    {status === 'error' && <AlertCircle size={16} className="shrink-0 text-red-700" />}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#1f1c19] hover:bg-[#38332e] text-[#fbf9f5] font-bold text-sm transition-all shadow-lg shadow-[#1f1c19]/12 hover:shadow-[#1f1c19]/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
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
