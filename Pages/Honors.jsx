import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code, Cloud, BookOpen, Trophy, Star, ExternalLink } from 'lucide-react';

export default function Honors() {
  const certifications = [
    {
      title: 'AI Planet Python Certification',
      organization: 'AI Planet',
      year: '2022',
      icon: Code,
      color: 'from-blue-600 to-blue-800',
      description: 'Professional certification validating Python programming skills with focus on AI and machine learning applications.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'AI Fundamentals'],
      badge: '🐍'
    },
    {
      title: 'Google Cloud Facilitator Program',
      organization: 'Google Cloud',
      year: '2021',
      icon: Cloud,
      color: 'from-green-600 to-teal-600',
      description: 'Selected as facilitator to guide peers through Google Cloud training programs and promote cloud computing adoption.',
      skills: ['Cloud Computing', 'GCP', 'Leadership', 'Technical Training'],
      badge: '☁️'
    }
  ];

  const activities = [
    {
      title: 'Data Wrangling Grader',
      organization: 'Rutgers University',
      year: '2025',
      icon: BookOpen,
      color: 'from-purple-600 to-purple-800',
      description: 'Evaluated student assignments, provided feedback, and supported data science education at graduate level.',
      impact: 'Contributing to the next generation of data scientists',
      type: 'Academic Role'
    },
    {
      title: 'WomenTech Network',
      organization: 'Session Monitor and Facilitator',
      year: '2022',
      icon: Users,
      color: 'from-pink-600 to-rose-600',
      description: 'Facilitated technical sessions and supported women in technology through mentorship and community building.',
      impact: 'Promoting diversity and inclusion in tech',
      type: 'Community Leadership'
    },
    {
      title: 'GirlScript Summer of Code',
      organization: 'Open Source Contributor',
      year: '2022',
      icon: Code,
      color: 'from-amber-500 to-orange-600',
      description: 'Participated in India\'s largest open-source program for students, contributing to real-world projects.',
      impact: 'Gained practical experience in collaborative development',
      type: 'Open Source'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Maintained 3.57 GPA in graduate studies while working as grader',
      highlight: '3.57 GPA'
    },
    {
      icon: Star,
      title: 'Teaching Recognition',
      description: 'Selected as grader for Data Wrangling course at Rutgers University',
      highlight: 'Grader Role'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Active participant in multiple tech communities promoting diversity',
      highlight: '3+ Communities'
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Completed two successful internships with measurable impact',
      highlight: '2 Internships'
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
              Certifications & <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Professional certifications, community contributions, and recognition for technical excellence 
              and leadership in data science and software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-blue-800" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{achievement.highlight}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{achievement.title}</h3>
                <p className="text-slate-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Certifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Validated expertise through industry-recognized certification programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-200 hover:border-blue-300 transition-all group"
              >
                <div className={`bg-gradient-to-br ${cert.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <cert.icon className="w-8 h-8" />
                    </div>
                    <div className="text-6xl">{cert.badge}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/90 font-medium">{cert.organization}</p>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-lg text-sm font-semibold">
                      {cert.year}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">{cert.description}</p>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Skills Validated</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-lg text-sm font-medium">
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

      {/* Activities & Community Involvement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Community Involvement</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Active participation in technical communities, mentorship, and open-source contributions
            </p>
          </motion.div>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-200 hover:border-blue-300 transition-all shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{activity.title}</h3>
                        <p className="text-slate-600 font-medium">{activity.organization}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 md:mt-0">
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl font-semibold text-sm">
                          {activity.type}
                        </span>
                        <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-semibold text-sm">
                          {activity.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{activity.description}</p>
                    <div className="flex items-center gap-2 text-amber-600 font-semibold">
                      <Star className="w-5 h-5" />
                      <span>{activity.impact}</span>
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
