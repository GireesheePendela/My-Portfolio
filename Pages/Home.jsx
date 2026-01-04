import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Database, Brain, Github, Linkedin, Mail, Download } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function Home() {
  const stats = [
    { value: '98.45%', label: 'ML Model Accuracy', icon: Brain },
    { value: '1,000+', label: 'Users Served', icon: Code },
    { value: '32+', label: 'App Routes Built', icon: Database },
    { value: '40%', label: 'Code Optimization', icon: Sparkles }
  ];

  const featuredProjects = [
    {
      title: 'Fake News Detection',
      description: 'NLP-powered classifier achieving 98.45% accuracy using TF-IDF and Logistic Regression',
      tech: ['Python', 'NLTK', 'scikit-learn', 'TF-IDF'],
      metric: '218K+ Features',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Hospital Management System',
      description: 'Full-stack Flask application with role-based workflows and automated data validation',
      tech: ['Flask', 'SQLite', 'Bootstrap', 'JavaScript'],
      metric: '12+ DB Tables',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Gireeshee Pendela</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-4 font-medium">
              Turning Data into Decisions, Code into Impact
            </p>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Data Science graduate student at Rutgers University building intelligent systems with machine learning 
              and natural language processing. Passionate about creating solutions that scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to={createPageUrl('Projects')}
                className="group w-full sm:w-auto px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('Contact')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-xl font-semibold border-2 border-slate-200 transition-all"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/GireesheePendela"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-slate-900 border-2 border-slate-200 hover:border-slate-900 rounded-xl flex items-center justify-center transition-all group"
              >
                <Github className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/gireeshee-pendela"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white hover:bg-blue-800 border-2 border-slate-200 hover:border-blue-800 rounded-xl flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:gp590@scarletmail.rutgers.edu"
                className="w-12 h-12 bg-white hover:bg-purple-600 border-2 border-slate-200 hover:border-purple-600 rounded-xl flex items-center justify-center transition-all group"
              >
                <Mail className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-blue-800" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-world applications combining machine learning, data engineering, and full-stack development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl mb-4 flex items-center justify-center`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-amber-600 font-semibold text-sm">{project.metric}</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={createPageUrl('Projects')}
              className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              I'm actively seeking internships and full-time opportunities in Data Science, Machine Learning, 
              and Software Engineering. Let's connect and create impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-slate-100 transition-all shadow-lg"
              >
                Contact Me
              </Link>
              <a
                href="/Gireeshee_Pendela_Resume .pdf"
                download="Gireeshee_Pendela_Resume"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}