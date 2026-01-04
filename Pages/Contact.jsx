import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { Button } from '../Components/ui/button';
import { Input } from '../Components/ui/input';
import { Textarea } from '../Components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'gp590@scarletmail.rutgers.edu';
    
    // Try to open mail client
    window.location.href = `mailto:${email}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gp590@scarletmail.rutgers.edu',
      link: 'mailto:gp590@scarletmail.rutgers.edu',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 848-391-4488',
      link: 'tel:+18483914488',
      color: 'from-purple-600 to-purple-800'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Brunswick, NJ 08901',
      link: null,
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/GireesheePendela',
      color: 'hover:bg-slate-900',
      username: '@GireesheePendela'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/gireeshee-pendela',
      color: 'hover:bg-blue-700',
      username: 'Gireeshee Pendela'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Let's <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              I'm actively seeking summer 2025 internships and full-time opportunities in Data Science, 
              Machine Learning, and Software Engineering. Let's discuss how I can contribute to your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {info.link ? (
                  info.label === 'Email' ? (
                    <button
                      onClick={handleEmailClick}
                      className="w-full text-left bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{info.label}</h3>
                      <p className="text-slate-600 leading-relaxed">{info.value}</p>
                      {showCopied && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-4 right-4 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg"
                        >
                          Email copied!
                        </motion.div>
                      )}
                    </button>
                  ) : (
                    <a
                      href={info.link}
                      className="block bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{info.label}</h3>
                      <p className="text-slate-600 leading-relaxed">{info.value}</p>
                    </a>
                  )
                ) : (
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-200">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{info.label}</h3>
                    <p className="text-slate-600 leading-relaxed">{info.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Social */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Me a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Opportunity Discussion"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity..."
                        rows={6}
                        required
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-800 hover:bg-blue-900 text-white py-6 text-lg font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Social & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Social Links */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect on Social</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-2xl ${social.color} transition-all group`}
                    >
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{social.label}</div>
                        <div className="text-sm text-slate-600">{social.username}</div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 ml-auto" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Download Resume</h3>
                <p className="text-slate-600 mb-6">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-6 text-lg font-semibold flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
