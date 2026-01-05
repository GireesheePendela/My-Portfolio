import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Star, ExternalLink, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const degrees = [
    {
      degree: 'Master of Science in Data Science',
      school: 'Rutgers University',
      location: 'New Brunswick, NJ, USA',
      period: '2024 - Expected May 2026',
      gpa: '3.57 / 4.0',
      current: true,
      icon: GraduationCap,
      color: 'from-blue-600 to-purple-600',
      description: 'Specializing in machine learning, NLP, and statistical analysis with hands-on experience in database systems.',
      coursework: [
        {
          name: 'Natural Language Processing',
          description: 'Text processing, sentiment analysis, and language model implementation',
          skills: ['NLTK', 'TF-IDF', 'Text Classification', 'Feature Engineering']
        },
        {
          name: 'Database and Management Systems',
          description: 'Relational database design, SQL optimization, and data management',
          skills: ['SQL', 'Database Design', 'Normalization', 'Query Optimization']
        },
        {
          name: 'Statistical Learning',
          description: 'Statistical methods and ML algorithms with practical applications',
          skills: ['Regression', 'Classification', 'Model Evaluation', 'Cross-Validation']
        },
        {
          name: 'Data Structures & Algorithms',
          description: 'Fundamental algorithms, data structures, and computational complexity analysis',
          skills: ['Algorithms', 'Data Structures', 'Complexity Analysis', 'Problem Solving']
        },
        {
          name: 'Regression & Time Series Analysis',
          description: 'Statistical modeling techniques for prediction and temporal data analysis',
          skills: ['Linear Regression', 'Time Series', 'Forecasting', 'ANOVA']
        },
        {
          name: 'Data Mining',
          description: 'Techniques for discovering patterns and insights from large datasets',
          skills: ['Clustering', 'Association Rules', 'Pattern Recognition', 'Big Data']
        }
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Indian Institute of Information Technology and Management',
      location: 'Madhya Pradesh, India',
      period: '2020 - 2024',
      gpa: '7.31 / 10.0',
      current: false,
      icon: Award,
      color: 'from-purple-600 to-pink-600',
      description: 'Computer science foundation covering algorithms, data structures, software engineering, and application development.',
      coursework: [
        {
          name: 'Data Mining and Data Warehouse',
          description: 'Techniques for discovering patterns and insights from large datasets',
          skills: ['Data Mining', 'Data Warehousing', 'Pattern Recognition', 'Knowledge Discovery']
        },
        {
          name: 'Machine Learning',
          description: 'Introduction to supervised and unsupervised learning algorithms',
          skills: ['Python', 'scikit-learn', 'Classification', 'Clustering']
        },
        {
          name: 'Big Data Analytics',
          description: 'Processing and analyzing large-scale datasets using distributed systems',
          skills: ['Hadoop', 'Spark', 'MapReduce', 'Distributed Computing']
        },
        {
          name: 'Computer Vision',
          description: 'Image processing, object detection, and visual recognition techniques',
          skills: ['Computer Vision', 'CNN Applications', 'Image Classification', 'Edge Detection']
        }
      ]
    }
  ];

  const highlights = [
    {
      icon: Star,
      title: 'Strong Foundation',
      description: 'Solid academic grounding through rigorous coursework and continuous learning',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      icon: BookOpen,
      title: 'Hands-On Learning',
      description: 'Balanced theoretical knowledge with practical project implementation',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Award,
      title: 'Academic Contribution',
      description: 'Experience as a grader for Data Wrangling',
      color: 'bg-purple-100 text-purple-800'
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
              Academic <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Background</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Computer science foundation with graduate specialization in data science,
               machine learning, and NLP
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <highlight.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{highlight.title}</h3>
                <p className="text-slate-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Degrees */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {degrees.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-200"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${edu.color} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                        <edu.icon className="w-10 h-10" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-white/90 text-xl font-semibold">{edu.school}</p>
                      </div>
                    </div>
                    {edu.current && (
                      <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-xl font-semibold">
                        In Progress
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed text-lg mb-8">{edu.description}</p>

                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                      Relevant Coursework
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {edu.coursework.map((course, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200">
                          <h5 className="font-bold text-slate-900 text-lg mb-2">{course.name}</h5>
                          <p className="text-slate-600 text-sm mb-4">{course.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.map(skill => (
                              <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
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
