import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Cloud, BookOpen, ExternalLink } from 'lucide-react';

export default function Honors() {
  const certifications = [
    {
      title: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure',
      organization: 'Microsoft',
      year: '2026',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Professional certification validating expertise in Azure AI services, machine learning workloads, and cloud-based AI solutions',
      skills: ['Machine Learning', 'Artificial Intelligence', 'Azure AI Foundry', 'Cloud Computing'],
      badge: '☁️',
      credentialLabel: 'View Certificate',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/824b63dc751ffd50068c1aedc404ce553c864c5f05176d705f81'
    },
    {
      title: 'Introduction to Data Science',
      organization: 'Cisco Networking Academy',
      year: '2026',
      icon: Code,
      color: 'from-cyan-600 to-blue-600',
      description: 'Certification validating foundational data science concepts, analytical thinking, and practical data manipulation techniques',
      skills: ['Data Analysis', 'Data Science', 'Machine Learning', 'Data Engineering'],
      badge: '📊',
      credentialLabel: 'View Badge',
      credentialUrl: 'https://www.credly.com/badges/97b2b938-0322-4408-bc68-04086ba08392'
    },
    {
      title: 'AI Planet Python Certification',
      organization: 'AI Planet',
      year: '2022',
      icon: Code,
      color: 'from-blue-600 to-blue-800',
      description: 'Professional certification validating Python programming skills with focus on AI and machine learning applications',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'AI Fundamentals'],
      badge: '🐍',
      credentialLabel: null,
      credentialUrl: null
    },
    {
      title: 'Google Cloud Facilitator Program',
      organization: 'Google Cloud',
      year: '2021',
      icon: Cloud,
      color: 'from-green-600 to-teal-600',
      description: 'Served as facilitator to guide peers through Google Cloud training programs and promote cloud computing adoption',
      skills: ['Cloud Computing', 'GCP', 'Leadership', 'Technical Training'],
      badge: '☁️',
      credentialLabel: 'View Profile',
      credentialUrl: 'https://www.skills.google/public_profiles/5386ef02-83ae-4c92-8366-3befc065ed4f'
    },
    {
      title: 'SheCodes Plus',
      organization: 'SheCodes',
      year: '2022',
      icon: Code,
      color: 'from-amber-500 to-orange-600',
      description: 'Advanced front-end development certification covering responsive design, JavaScript, and API integration',
      skills: ['Front-End Development', 'JavaScript', 'HTML5', 'Node.js'],
      badge: '⚛️',
      credentialLabel: 'View Certificate',
      credentialUrl: 'https://www.shecodes.io/certificates/4b19ae2bd1c70af7e01c64abb9b8cb09'
    },
    {
      title: 'SheCodes Basics',
      organization: 'SheCodes',
      year: '2021',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      description: 'Foundational web development certification covering HTML, CSS, and JavaScript fundamentals',
      skills: ['Front-End Development', 'HTML5', 'CSS3', 'JavaScript Basics'],
      badge: '</>',
      credentialLabel: 'View Certificate',
      credentialUrl: 'https://www.shecodes.io/certificates/ae7a48c2c84af3fce466fafee5533b24'
    }
  ];

  const activities = [
    {
      title: 'Teaching Assistant, Statistics',
      organization: 'Rutgers University',
      year: '2026 - Present',
      icon: BookOpen,
      color: 'from-emerald-600 to-teal-700',
      description: 'Supporting students with statistics concepts, problem solving, and applied quantitative analysis.',
      impact: 'Helping students build confidence with statistical reasoning',
      type: 'Academic Role'
    },
    {
      title: 'Teaching Assistant, Data Wrangling',
      organization: 'Rutgers University',
      year: '2025',
      icon: BookOpen,
      color: 'from-purple-600 to-purple-800',
      description: 'Supported undergraduate students with data wrangling assignments and provided detailed feedback.',
      impact: 'Helping students build practical data skills',
      type: 'Academic Role'
    },
    {
      title: 'WomenTech Network',
      organization: 'Session Facilitator',
      year: '2022',
      icon: Users,
      color: 'from-pink-600 to-rose-600',
      description: 'Facilitated technical sessions and mentored aspiring developers in an inclusive tech community.',
      impact: 'Promoting diversity and inclusion in tech',
      type: 'Community Leadership'
    },
    {
      title: 'GirlScript Summer of Code',
      organization: 'Open Source Contributor',
      year: '2022',
      icon: Code,
      color: 'from-amber-500 to-orange-600',
      description: 'Contributed bug fixes and features to open-source projects during India\'s largest student developer program.',
      impact: 'Gained practical experience in collaborative development',
      type: 'Open Source'
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
              Certifications <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">& Training</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Building expertise across data science, cloud computing, and full-stack development through professional certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    {cert.badge && <div className="text-5xl" aria-hidden="true">{cert.badge}</div>}
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
                  {cert.credentialLabel && (
                    <div className="mt-6 flex items-center gap-2 text-blue-800 font-semibold">
                      <ExternalLink className="w-4 h-4" />
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {cert.credentialLabel}
                        </a>
                      ) : (
                        <span>{cert.credentialLabel}</span>
                      )}
                    </div>
                  )}
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
                    <p className="text-slate-600 leading-relaxed">{activity.description}</p>
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
