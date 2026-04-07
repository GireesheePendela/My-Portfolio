import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Brain, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'nyc-311-response-predictor',
      title: 'NYC 311 Response Predictor',
      tagline: 'Resolution Time Intelligence App',
      year: 'Mar 2026',
      category: 'Machine Learning',
      icon: LineChart,
      color: 'from-emerald-600 to-teal-600',
      description: 'Built an end-to-end machine learning system for estimating NYC 311 complaint resolution time, from SQL-based analysis and feature engineering to model training, dashboarding, and deployment.',
      challenge: '311 resolution time is influenced by agency, complaint type, borough, filing time, and seasonal behavior, so the raw records are noisy and not directly predictive.',
      solution: 'Built a complete pipeline that cleans and structures the 311 data, engineers predictive features, compares regression models, and exposes results through a Plotly dashboard plus Gradio and FastAPI interfaces.',
      impact: [
        'Analyzed 589,802 NYC 311 complaints to uncover response-time patterns',
        'Trained a Random Forest model that reached about 0.79 R²',
        'Delivered an interactive dashboard and end-user prediction interface',
        'Packaged the project for local execution and Hugging Face deployment'
      ],
      tech: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'Plotly', 'FastAPI', 'Gradio', 'SQLAlchemy', 'PostgreSQL', 'Joblib'],
      metrics: {
        records: '589K+',
        r2: '0.79',
        model: 'Random Forest'
      },
      github: 'https://github.com/GireesheePendela/nyc-311-response-predictor',
      demo: 'https://huggingface.co/spaces/Gireeshee/nyc-311-response-predictor'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      tagline: 'Interactive Personal Portfolio',
      year: 'Jan 2026',
      category: 'Front-End Development',
      icon: Code,
      color: 'from-cyan-600 to-blue-600',
      description: 'Built a modern, fully responsive portfolio website that presents projects, skills, and experience with clean navigation and smooth motion design.',
      challenge: 'The goal was to create a portfolio that feels polished and distinctive while still loading quickly and working smoothly across devices.',
      solution: 'Developed with React and Vite for speed, Tailwind CSS for responsive layout, and Framer Motion for subtle animation. The site includes multi-page navigation, automatic scroll-to-top behavior, skills filtering, and contact interactions.',
      impact: [
        'Smooth page transitions with automatic scroll-to-top navigation',
        'Interactive skills filter with category-based sorting',
        'Email clipboard copy functionality with visual feedback',
        'Fully responsive design optimized for mobile, tablet, and desktop',
        'Fast load times with Vite build optimization'
      ],
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'JavaScript', 'HTML/CSS'],
      metrics: {
        pages: '8',
        components: '15+',
        responsive: '100%'
      },
      github: 'https://github.com/GireesheePendela/My-Portfolio',
      demo: null
    },
    {
      id: 'hospital-system',
      title: 'Hospital Management System',
      tagline: 'Full-Stack Healthcare Platform',
      year: 'Oct 2025',
      category: 'Full-Stack Development',
      icon: Database,
      color: 'from-purple-600 to-pink-600',
      description: 'Designed and built a hospital management system with role-based access control, automated workflows, and structured data management for admins, doctors, and patients.',
      challenge: 'Healthcare systems need strict validation, clear role separation, and reliable data relationships across appointments, billing, and medical records.',
      solution: 'Built a Flask application with an SQLite backend, normalized tables, automated database triggers, and role-specific routes served through reusable Jinja2 templates.',
      impact: [
        '32+ role-specific application routes for streamlined workflows',
        '12+ normalized database tables with relational integrity',
        '10+ automated triggers for validation and consistency',
        'Reduced frontend duplication by about 40% through reusable templates',
        '17+ dynamic pages built around shared layout components'
      ],
      tech: ['Python', 'Flask', 'SQLite', 'Bootstrap 5', 'JavaScript', 'HTML/CSS', 'Jinja2'],
      metrics: {
        routes: '32+',
        tables: '12+',
        optimization: '40%'
      },
      github: 'https://github.com/DBMS16-954-694-01-HMS/DBMS_HMS_PROJ',
      demo: null
    },
    {
      id: 'fake-news',
      title: 'Fake News Detection using NLP',
      tagline: 'ML-Powered Misinformation Classifier',
      year: 'Jun 2025',
      category: 'Machine Learning',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      description: 'Engineered an NLP system for classifying news articles as real or fake using machine learning, preprocessing, and feature engineering.',
      challenge: 'With 44,000+ news articles, the challenge was to extract useful signals and build a classifier that stayed precise while minimizing false positives.',
      solution: 'Implemented a full NLP pipeline using NLTK preprocessing, TF-IDF feature extraction, and two classifiers: Logistic Regression and Multinomial Naive Bayes.',
      impact: [
        '98.45% accuracy with 98% precision and recall on 8,854 test samples',
        '218,495 TF-IDF features engineered from 44,000+ articles',
        'Interactive documentation published on GitHub Pages using Quarto',
        '5+ visualizations including confusion matrices and word clouds'
      ],
      tech: ['Python', 'scikit-learn', 'NLTK', 'pandas', 'NumPy', 'TF-IDF', 'Matplotlib', 'Seaborn', 'Jupyter', 'Quarto'],
      metrics: {
        accuracy: '98.45%',
        features: '218K+',
        samples: '44,000+'
      },
      github: 'https://github.com/GireesheePendela/fake_news_detection',
      demo: null
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
              Featured <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Machine learning and full-stack projects where I experiment, learn, and build—each one 
              pushing my skills a little further
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                      {project.year}
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-medium mb-4">{project.tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-slate-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-800">{value}</div>
                      <div className="text-xs text-slate-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className={`bg-gradient-to-br ${selectedProject.color} p-8 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <selectedProject.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-1">{selectedProject.title}</h2>
                      <p className="text-white/90">{selectedProject.tagline}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg font-semibold">
                    {selectedProject.category}
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg font-semibold">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              <div className="p-8">
                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Overview</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Impact & Results</h3>
                  <div className="space-y-3">
                    {selectedProject.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-blue-50 text-blue-800 rounded-xl font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(selectedProject.github || selectedProject.demo) && (
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-xl font-semibold hover:bg-blue-900 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Github className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-4xl font-bold mb-6">Explore More on GitHub</h2>
            <p className="text-xl text-blue-100 mb-8">
              These projects are part of my continuous learning journey. Check out my GitHub for code, 
              documentation, and ongoing experiments in ML and data science.
            </p>
            <a
              href="https://github.com/GireesheePendela"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-slate-100 transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}