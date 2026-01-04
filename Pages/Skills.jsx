import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Wrench, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    
    setTimeout(() => {
      const element = document.getElementById('skills-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: Code2,
      color: 'from-blue-600 to-blue-800',
      skills: [
        { name: 'Python', level: 95, category: 'languages' },
        { name: 'SQL', level: 90, category: 'languages' },
        { name: 'JavaScript', level: 85, category: 'languages' },
        { name: 'HTML5 & CSS3', level: 90, category: 'languages' },
        { name: 'R', level: 75, category: 'languages' }
      ]
    },
    {
      id: 'ml',
      name: 'Machine Learning & Data Science',
      icon: Brain,
      color: 'from-purple-600 to-purple-800',
      skills: [
        { name: 'Natural Language Processing', level: 90, category: 'ml' },
        { name: 'scikit-learn', level: 95, category: 'ml' },
        { name: 'TF-IDF & Feature Engineering', level: 90, category: 'ml' },
        { name: 'NLTK', level: 85, category: 'ml' },
        { name: 'Model Evaluation', level: 90, category: 'ml' },
        { name: 'Statistical Learning', level: 85, category: 'ml' }
      ]
    },
    {
      id: 'data',
      name: 'Data Tools & Libraries',
      icon: TrendingUp,
      color: 'from-green-600 to-green-800',
      skills: [
        { name: 'pandas', level: 95, category: 'data' },
        { name: 'NumPy', level: 90, category: 'data' },
        { name: 'Matplotlib', level: 85, category: 'data' },
        { name: 'Seaborn', level: 85, category: 'data' },
        { name: 'Data Preprocessing', level: 90, category: 'data' },
        { name: 'Data Visualization', level: 90, category: 'data' }
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Tools',
      icon: Wrench,
      color: 'from-amber-600 to-orange-600',
      skills: [
        { name: 'Flask', level: 90, category: 'frameworks' },
        { name: 'React', level: 85, category: 'frameworks' },
        { name: 'Bootstrap 5', level: 90, category: 'frameworks' },
        { name: 'Git & GitHub', level: 95, category: 'frameworks' },
        { name: 'Jupyter Notebook', level: 95, category: 'frameworks' },
        { name: 'VS Code', level: 90, category: 'frameworks' },
        { name: 'Quarto', level: 80, category: 'frameworks' }
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: Database,
      color: 'from-pink-600 to-pink-800',
      skills: [
        { name: 'SQLite', level: 90, category: 'databases' },
        { name: 'Database Design', level: 85, category: 'databases' },
        { name: 'SQL Queries & Optimization', level: 90, category: 'databases' }
      ]
    }
  ];

  const technicalAreas = [
    'Natural Language Processing',
    'Machine Learning',
    'Feature Engineering',
    'Data Preprocessing',
    'Data Visualization',
    'Model Evaluation',
    'Full-Stack Development',
    'Database Design',
    'API Development',
    'Web Applications',
    'Data Analysis',
    'Statistical Learning'
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

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
              Technical <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A comprehensive toolkit spanning machine learning, data engineering, and full-stack development—
              battle-tested through academic projects and real-world applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-slate-200 sticky top-20 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="skills-section" style={{ position: 'absolute', top: '-130px' }}></div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900">{skill.name}</h3>
                  <span className="text-sm font-semibold text-blue-800">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Areas of Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized domains where I've delivered measurable impact
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex items-center gap-3 group"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="font-medium text-slate-800 group-hover:text-blue-800 transition-colors">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-200 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-slate-500 w-12 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Certified & Recognized</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Validated expertise through industry certifications and community recognition
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI Planet Python', 'Google Cloud Facilitator', 'WomenTech Network', 'GirlScript Summer of Code'].map(cert => (
                <div key={cert} className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl font-semibold">
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}