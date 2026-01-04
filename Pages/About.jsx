import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Target, Zap, BookOpen, Users, Award, Code2, Code, Briefcase, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'I believe in writing clean, efficient code that solves real problems. Every line matters.'
    },
    {
      icon: Heart,
      title: 'Impact-Driven',
      description: 'Building solutions that create measurable value, from 98% model accuracy to 40% engagement boosts.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'From grading Data Wrangling to exploring cutting-edge NLP techniques, I never stop growing.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Active in WomenTech Network, GirlScript, and academic communities. We grow together.'
    }
  ];

  const journey = [
    {
      year: '2024 - Present',
      title: 'Rutgers University',
      subtitle: 'Master of Science in Data Science',
      description: 'Deepening expertise in NLP, statistical learning, and database systems while contributing as a Data Wrangling grader.',
      icon: GraduationCap,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      year: '2020 - 2024',
      title: 'Indian Institute of Information Technology and Management (IIITM)',
      subtitle: 'Bachelor of Technology in Computer Science, India',
      description: 'Built a strong foundation in computer science fundamentals, spanning algorithms, data structures, databases, and scalable software systems.',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      year: '2023',
      title: 'Industry Experience',
      subtitle: 'Project Intern at Matchday AI & FluentGrid',
      description: 'Delivered production applications serving 1,000+ users, optimized dashboards by 40%, and reduced processing time by 15%.',
      icon: Briefcase,
      color: 'bg-amber-100 text-amber-800'
    },
    {
      year: '2021 - 2022',
      title: 'Community Builder',
      subtitle: 'Open Source & Tech Communities',
      description: 'Active participant in GirlScript Summer of Code, WomenTech Network, and Google Cloud Facilitator Program.',
      icon: Globe,
      color: 'bg-green-100 text-green-800'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Building Intelligent Systems,{' '}
              <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
                One Algorithm at a Time
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              I'm a Data Science graduate student at Rutgers University with a passion for transforming complex 
              data into actionable insights and user-facing applications. My work sits at the intersection of 
              machine learning and natural language processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img 
                  src="/my_photo.jpg" 
                  alt="Gireeshee Pendela" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                  />
                  <div className="text-9xl font-bold text-blue-800/20 hidden">GP</div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl">
                    Open to Opportunities
                    </div>
                    </div>
                    </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">My Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  My journey into data science started with a realization: while building web applications in India, 
                  I saw how much insight was locked in user data. I became obsessed with one question—<em>How can we 
                  make machines understand human language and make better decisions?</em> This drove me to pursue 
                  advanced studies in Machine Learning at Rutgers University.
                </p>
                <p>
                  My bachelor's in Computer Science at IIITM is where I discovered my passion for bridging data 
                  insights and user experiences. My internships at Matchday AI and FluentGrid taught me how to 
                  build scalable applications that serve real users—at FluentGrid, my work reached 1,000+ users 
                  and boosted engagement by 40%.
                </p>
                <p>
                  Today, I'm specializing in Natural Language Processing and Statistical Learning. I've contributed 
                  as a grader for Data Wrangling courses and worked on projects including a fake news detection system 
                  achieving 98.45% accuracy through careful feature engineering, and a hospital management platform 
                  handling 32+ routes with automated validation.
                </p>
                <p className="font-medium text-slate-800">
                  When I'm not coding, I'm active in communities like WomenTech Network and contributing to open-source 
                  projects. I believe the best solutions emerge from diverse perspectives and continuous collaboration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Drives Me</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide my work and define my approach to problem-solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Journey</h2>
            <p className="text-lg text-slate-600">Building intelligent systems, one project at a time</p>
          </motion.div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all">
                    <div className="text-sm font-semibold text-blue-800 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <div className="text-slate-600 font-medium mb-3">{item.subtitle}</div>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Target className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-4xl font-bold mb-6">Currently Focused On</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">🔬</div>
                <div className="font-semibold mb-2">Research Projects</div>
                <p className="text-blue-100 text-sm">Building ML systems that combine accuracy with real-world applicability</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">💼</div>
                <div className="font-semibold mb-2">Career Growth</div>
                <p className="text-blue-100 text-sm">Seeking summer 2025 internships in Data Science & ML Engineering</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">🎓</div>
                <div className="font-semibold mb-2">Academic Excellence</div>
                <p className="text-blue-100 text-sm">Maintaining 3.57 GPA while diving deep into NLP and Statistical Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}