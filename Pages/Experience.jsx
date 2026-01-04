import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Zap, CheckCircle2, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Data Wrangling Grader',
      company: 'Rutgers University',
      location: 'New Brunswick, NJ',
      period: '2025',
      current: true,
      type: 'Academic',
      icon: Users,
      color: 'from-blue-600 to-blue-800',
      description: 'Contributing to data science education by evaluating student assignments and providing constructive feedback for Data Wrangling coursework.',
      responsibilities: [
        'Review and grade data preprocessing and transformation assignments',
        'Provide detailed feedback on code quality, efficiency, and best practices',
        'Help students understand complex data manipulation techniques',
        'Ensure consistent evaluation standards across assignments'
      ],
      skills: ['Python', 'pandas', 'Data Preprocessing', 'Teaching', 'Technical Communication'],
      impact: 'Supporting the next generation of data scientists while reinforcing my own mastery of data wrangling techniques'
    },
    {
      role: 'Project Intern',
      company: 'Matchday AI Technologies',
      location: 'India',
      period: '2023',
      current: false,
      type: 'Industry',
      icon: TrendingUp,
      color: 'from-purple-600 to-purple-800',
      description: 'Built high-performance web applications focused on real-time sports analytics and data visualization.',
      responsibilities: [
        'Implemented full-scale web application using ReactJS with optimized rendering',
        'Developed dynamic front-end dashboard for real-time sports analytics',
        'Optimized component architecture reducing page load time by ~20%',
        'Enhanced data visualization clarity improving user engagement by ~40%'
      ],
      skills: ['React', 'JavaScript', 'Data Visualization', 'Performance Optimization', 'REST APIs'],
      achievements: [
        '~20% reduction in page load time through optimized component rendering',
        '~40% increase in user engagement measured via interaction metrics',
        'Successfully delivered production-ready real-time analytics dashboard'
      ]
    },
    {
      role: 'Project Intern',
      company: 'FluentGrid Limited',
      location: 'India',
      period: '2023',
      current: false,
      type: 'Industry',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      description: 'Developed enterprise-scale web applications integrating Advanced Metering Infrastructure (AMI) for utility management.',
      responsibilities: [
        'Built end-to-end web application using ReactJS, Angular, Bootstrap, and CSS3',
        'Integrated AMI to optimize application workflows and reduce processing overhead',
        'Supported 1,000+ users with improved front-end performance',
        'Delivered complete solution within 3-month development cycle'
      ],
      skills: ['React', 'Angular', 'Bootstrap', 'CSS3', 'AMI Integration', 'Enterprise Development'],
      achievements: [
        'Application successfully serving 1,000+ users',
        '15% reduction in processing time achieved',
        'Met aggressive 3-month development timeline',
        'Improved overall front-end performance and user experience'
      ]
    }
  ];

  const timeline = [
    { year: '2024 - Present', event: 'MS Data Science at Rutgers University', type: 'education' },
    { year: '2025', event: 'Data Wrangling Grader', type: 'work' },
    { year: '2024', event: 'Graduated with BTech in Computer Science', type: 'education' },
    { year: '2023', event: 'Project Intern at Matchday AI & FluentGrid', type: 'work' },
    { year: '2022', event: 'Active in WomenTech & GirlScript Communities', type: 'community' },
    { year: '2021', event: 'Google Cloud Facilitator Program', type: 'certification' }
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
              Professional <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              From building enterprise applications serving 1,000+ users to contributing to data science education—
              a track record of delivering measurable impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Timeline */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Career Highlights Timeline</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-amber-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-lg">
                      <div className="font-bold text-blue-800 text-sm mb-1">{item.year}</div>
                      <div className="font-semibold text-slate-900">{item.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Experience */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-200 hover:border-blue-300 transition-all"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${exp.color} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                        <exp.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-white/90 text-lg font-medium">{exp.company}</p>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-xl font-semibold text-sm">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span>•</span>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-lg text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Key Responsibilities</h4>
                    <div className="space-y-3">
                      {exp.responsibilities.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Key Achievements & Impact</h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-800 rounded-xl font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
