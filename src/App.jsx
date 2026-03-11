import { useState } from 'react'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
  name: "SWASTHYA SETU AI",
  short: "AI-powered multilingual rural healthcare assistant with emergency detection and hospital discovery",
  desc: `SWASTHYA SETU AI is an AI-powered multilingual healthcare assistant designed to improve healthcare accessibility for rural and semi-urban populations. The system provides symptom-based medical guidance, emergency risk detection, nearby hospital discovery, government health scheme information, and quick access to medical helplines. Built using a Retrieval-Augmented Generation (RAG) architecture with FastAPI and Azure OpenAI, the platform combines AI reasoning, location intelligence, and voice interaction to deliver safe, structured, and explainable healthcare guidance while prioritizing responsible AI guardrails.

Key Highlights

• AI-powered symptom triage using Retrieval-Augmented Generation (RAG)
• Multilingual voice interaction with automatic language detection (English + Hindi)
• Emergency detection engine identifying critical health risks and providing immediate guidance
• Nearby hospital discovery with geolocation and Google Maps navigation
• Government health scheme assistant with structured eligibility and benefits information
• Confidence scoring system for transparent and explainable AI responses`,
  tech: [
    "Python",
    "FastAPI",
    "Azure OpenAI",
    "ChromaDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Web Speech API",
    "Geolocation API",
    "Google Maps API"
  ],
  github: "https://github.com/Daniishhhhh/healthcare-ai-assistant",
  color: "purple"
},
    {
  name: "SkyChat",
  short: "Cloud-based real-time chat platform built on AWS serverless architecture",
  desc: `SkyChat is a full-stack real-time chat application built using a cloud-native serverless architecture on AWS. The platform enables authenticated users to communicate instantly through WebSockets while securely storing chat data in DynamoDB. By leveraging AWS managed services such as Cognito, API Gateway, and Lambda, the system delivers high scalability, fault tolerance, and minimal operational overhead. Combined with a responsive React frontend, SkyChat demonstrates modern cloud engineering practices for building scalable, secure, and globally accessible real-time applications.

Key Highlights

• Real-time messaging using WebSocket connections via AWS API Gateway
• Serverless backend powered by AWS Lambda with no dedicated servers
• Secure authentication and user management using AWS Cognito
• Persistent chat message storage using Amazon DynamoDB
• Cloud-native architecture ensuring scalability, reliability, and low maintenance
• Responsive React-based frontend optimized for desktop and mobile devices`,
  tech: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "AWS Cognito",
    "AWS API Gateway",
    "AWS Lambda",
    "Amazon DynamoDB",
    "Amazon S3",
    "CloudFront",
    "AWS IAM"
  ],
  github: "https://github.com/Daniishhhhh/skychat",
  color: "pink"
},
    {
  name: "AI-IPS",
  short: "AI-IPS — Intelligent Intrusion Prevention System",
  desc: `AI-IPS is an AI-powered Intrusion Detection and Prevention System that analyzes live network traffic to identify and mitigate malicious activity in real time. The system captures packets, generates flow-based network features, and processes them through a hybrid machine learning pipeline combining binary intrusion detection with multi-class attack classification. Predictions are translated into actionable security responses through an automated decision engine. Designed with a modular architecture and FastAPI-based integration layer, AI-IPS demonstrates how intelligent threat detection systems can enhance modern network security and adaptive cyber defense.

Key Highlights

• Real-time packet capture and flow-based traffic analysis
• Hybrid ML pipeline combining binary intrusion detection and multi-class attack classification
• Automated decision engine recommending mitigation actions (allow, alert, monitor, block)
• Modular architecture designed for firewall, SIEM, and security platform integration`,
  tech: ["Python", "Scikit-learn", "Scapy", "Joblib", "Pickle", "TensorFlow/Keras", "FastAPI", "Uvicorn"],
  github: "https://github.com/Daniishhhhh/AI-IPS",
  color: "indigo"
},
    {
      name: "Super Mario 2D Game",
      short: "Complete 2D platformer with physics & enemy AI",
      desc: "This project is a full-screen 2D platformer game, inspired by classic titles like Super Mario. It is implemented entirely in Java, leveraging the Java AWT and Swing graphics libraries for rendering sprites, maps, and animations.",
      tech: ["Unity", "java", "2D Physics","Java AWT/Swing libraries"],
      github: "https://github.com/Daniishhhhh/super-mario-2D-game",
      color: "green"
    },
    {
      name: "Chemical Equipment Visualizer",
      short: "Interactive 3D visualization tool for chemical engineering",
      desc: "A hybrid full-stack data analytics application designed to visualize and analyze chemical equipment parameters from CSV datasets. The system combines a React web interface and a PyQt5 desktop application powered by a shared Django REST API backend. Users can upload CSV files, generate real-time charts, view summary analytics, track upload history, and export automated PDF reports. The platform demonstrates cross-platform architecture where both web and desktop clients interact with a unified backend, enabling efficient data visualization, analytics, and reporting for chemical engineering datasets.",
      tech: ["React.js", "chart.js", "Tailwind CSS", "Python", "Django REST Framework", "PyQt5", "Matplotlib", "Pandas","SQLite",],
      github: "https://github.com/Daniishhhhh/Chemical-Equipment-Visualizer",
      color: "yellow"
    }
  ]

  const colorStyles = {
  purple: {
    card: "hover:border-purple-400/50 hover:bg-purple-500/5 hover:shadow-purple-500/20",
    tag: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  pink: {
    card: "hover:border-pink-400/50 hover:bg-pink-500/5 hover:shadow-pink-500/20",
    tag: "bg-pink-500/20 text-pink-300 border-pink-500/30"
  },
  indigo: {
    card: "hover:border-indigo-400/50 hover:bg-indigo-500/5 hover:shadow-indigo-500/20",
    tag: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
  },
  green: {
    card: "hover:border-green-400/50 hover:bg-green-500/5 hover:shadow-green-500/20",
    tag: "bg-green-500/20 text-green-300 border-green-500/30"
  },
  yellow: {
    card: "hover:border-yellow-400/50 hover:bg-yellow-500/5 hover:shadow-yellow-500/20",
    tag: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  }
}

  return (
    <div className="min-h-screen font-jakarta bg-gradient-to-br from-slate-900 via-purple-950/20 to-black">
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-20 relative">
          {/* Hero Text */}
          <div className="space-y-8 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping" />
              <h1 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
                Hello, I'm
              </h1>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent leading-tight">
              Danish Sidiq Rather
            </h2>
            
            {/* Updated Summary from Resume */}
            <p className="text-xl text-slate-200 leading-relaxed max-w-md">
              Computer Science undergraduate with hands-on experience building end-to-end AI and full-stack systems from concept
to deployment. Skilled in developing production-ready applications using Python, FastAPI, JavaScript, and ML/DL frameworks, with a
focus on rapid prototyping, modular architecture, and real-world problem solving. Comfortable working across backend, AI pipelines,
and frontend interfaces, with strong ownership mindset and ability to ship scalable, user-focused solutions
            </p>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl hover:bg-purple-500/20 transition-all duration-300">
                <span className="font-semibold text-purple-300">AI/ML Engineer</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl hover:bg-emerald-400/20 transition-all duration-300">
                <span className="font-semibold text-emerald-300">Fullstack Developer</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-2xl hover:bg-indigo-500/20 transition-all duration-300">
                <span className="font-semibold text-indigo-300">Cloud Security</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-2xl hover:bg-indigo-500/20 transition-all duration-300">
                <span className="font-semibold text-indigo-300">System Design</span>
              </div>
            </div>

            {/* THREE Social Buttons BELOW Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Resume Button */}
              <a 
                href="/resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-6 bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl border border-purple-500/30"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m5.5-5.5L16 12m0 0l5.5 5.5m-5.5-5.5l-5.5-5.5" />
                </svg>
                <span>Resume</span>
              </a>
              
              {/* GitHub Button */}
              <a 
                href="https://github.com/Daniishhhhh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-6 bg-gradient-to-br from-gray-800 to-slate-800 backdrop-blur-xl border border-gray-600/50 rounded-2xl text-white font-semibold hover:bg-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-gray-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.236 1.91 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/danish-sidiq-rather/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-6 bg-gradient-to-br from-blue-600 to-blue-700 backdrop-blur-xl border border-blue-500/50 rounded-2xl text-white font-semibold hover:bg-blue-600 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>


         {/* SKILLS SECTION - REPLACES Profile Image */}
<div className="lg:col-span-1 space-y-6">
  {/* Title */}
  <div className="text-center mb-8">
    <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Tech Skills
    </h3>
  </div>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Hard Skills */}
    <div className="group p-6 bg-gradient-to-br from-slate-800/80 to-purple-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 hover:border-purple-400/50 hover:shadow-purple-500/20 transition-all duration-300">
      <div className="w-3 h-3 bg-purple-400 rounded-full mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="font-bold text-white text-lg mb-3">Python</h4>
      <p className="text-slate-300 text-sm">FastAPI, Flask, ML pipelines</p>
    </div>

    <div className="group p-6 bg-gradient-to-br from-slate-800/80 to-emerald-900/50 backdrop-blur-xl rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all duration-300">
      <div className="w-3 h-3 bg-emerald-400 rounded-full mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="font-bold text-white text-lg mb-3">React</h4>
      <p className="text-slate-300 text-sm">Next.js, Tailwind, TypeScript</p>
    </div>

    <div className="group p-6 bg-gradient-to-br from-slate-800/80 to-indigo-900/50 backdrop-blur-xl rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 hover:shadow-indigo-500/20 transition-all duration-300">
      <div className="w-3 h-3 bg-indigo-400 rounded-full mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="font-bold text-white text-lg mb-3">AI/ML</h4>
      <p className="text-slate-300 text-sm">PyTorch, TensorFlow, Scikit-learn</p>
    </div>

    <div className="group p-6 bg-gradient-to-br from-slate-800/80 to-blue-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300">
      <div className="w-3 h-3 bg-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="font-bold text-white text-lg mb-3">Cloud</h4>
      <p className="text-slate-300 text-sm">AWS, Azure, Docker, Firebase</p>
    </div>

    <div className="group p-6 bg-gradient-to-br from-slate-800/80 to-yellow-900/50 backdrop-blur-xl rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 hover:shadow-yellow-500/20 transition-all duration-300">
      <div className="w-3 h-3 bg-yellow-400 rounded-full mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="font-bold text-white text-lg mb-3">Databases</h4>
      <p className="text-slate-300 text-sm">SQL, MongoDB, Redis</p>
    </div>

    <div className="group p-6 bg-gradient-to-br from-slate-800/80 to-pink-900/50 backdrop-blur-xl rounded-2xl border border-pink-500/30 hover:border-pink-400/50 hover:shadow-pink-500/20 transition-all duration-300">
      <div className="w-3 h-3 bg-pink-400 rounded-full mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="font-bold text-white text-lg mb-3">DevOps</h4>
      <p className="text-slate-300 text-sm">Git, CI/CD, Vercel, Kubernetes</p>
    </div>
  </div>

  {/* Soft Skills */}
  <div className="pt-8 border-t border-white/20">
    <h3 className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 text-center">
      Soft Skills
    </h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="group p-5 bg-gradient-to-br from-emerald-800/70 to-teal-800/70 backdrop-blur-xl rounded-xl border border-emerald-400/40 hover:border-emerald-400/60 hover:shadow-emerald-500/30 transition-all duration-300">
        <span className="font-bold text-emerald-300 text-lg block mb-2">🚀 Ownership</span>
        <span className="text-emerald-200 text-sm">Ship complete solutions</span>
      </div>
      <div className="group p-5 bg-gradient-to-br from-purple-800/70 to-pink-800/70 backdrop-blur-xl rounded-xl border border-purple-400/40 hover:border-purple-400/60 hover:shadow-purple-500/30 transition-all duration-300">
        <span className="font-bold text-purple-300 text-lg block mb-2">💡 Problem Solving</span>
        <span className="text-purple-200 text-sm">Real-world solutions</span>
      </div>
      <div className="group p-5 bg-gradient-to-br from-blue-800/70 to-indigo-800/70 backdrop-blur-xl rounded-xl border border-blue-400/40 hover:border-blue-400/60 hover:shadow-blue-500/30 transition-all duration-300">
        <span className="font-bold text-blue-300 text-lg block mb-2">⚡ Rapid Prototyping</span>
        <span className="text-blue-200 text-sm">From idea to deployment</span>
      </div>
      <div className="group p-5 bg-gradient-to-br from-orange-800/70 to-yellow-800/70 backdrop-blur-xl rounded-xl border border-orange-400/40 hover:border-orange-400/60 hover:shadow-orange-500/30 transition-all duration-300">
        <span className="font-bold text-orange-300 text-lg block mb-2">🎯Product Thinking</span>
        <span className="text-orange-200 text-sm">Scalable user solutions</span>
      </div>
    </div>
  </div>
</div>


        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. PROJECTS SECTION - Click to Expand */}
      <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Production AI/ML systems & fullstack apps from my GitHub
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <div 
              key={project.name} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className={`h-80 rounded-3xl p-8 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${colorStyles[project.color].card}`}>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 bg-clip-text">
                  {project.name}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.short}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0,3).map(tech => (
                    <span key={tech} className={`px-3 py-2 rounded-xl text-sm font-semibold border ${colorStyles[project.color].tag}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-400 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8" onClick={() => setSelectedProject(null)}>
            <div className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/20 p-12 w-full mx-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-4xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  {selectedProject.name}
                </h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed whitespace-pre-line">
  {selectedProject.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tech.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl text-purple-300 font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.236 1.91 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl text-slate-300 font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS CTA */}
        <div className="text-center">
          <a href="https://github.com/Daniishhhhh?tab=repositories" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300">
            View All Projects →
          </a>
        </div>
      </section>


      {/* 3. SKILLS SECTION - UPDATED TECH STACK */}
<section id="skills" className="py-32 px-8 max-w-6xl mx-auto">
  <div className="text-center mb-24">
    <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
      Tech Stack
    </h2>
  </div>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* Programming Languages */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
      <div className="grid grid-cols-2 gap-3">
        {["Python","Java","C","JavaScript","SQL","HTML","CSS"].map(skill => (
          <div key={skill} className="group p-4 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
            <span className="font-semibold text-white">{skill}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Frameworks & Libraries */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Frameworks & Libraries</h3>
      <div className="grid grid-cols-2 gap-3">
        {["FastAPI","Flask","React.js","PyTorch","TensorFlow","Scikit-learn","Tailwind CSS"].map(skill => (
          <div key={skill} className="group p-4 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <span className="font-semibold text-white">{skill}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Tools & Technologies */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Tools & Technologies</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          "Docker",
          "MongoDB",
          "AWS Cognito",
          "AWS Lambda",
          "AWS DynamoDB",
          "AWS S3",
          "Azure OpenAI",
          "ChromaDB",
          "Unity",
          "Git and GitHub",
          "Vercel",
          "Kubernetes"
        ].map(skill => (
          <div key={skill} className="group p-4 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
            <span className="font-semibold text-white">{skill}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>



      {/* 4. EXPERIENCE SECTION - FIXED VISIBILITY */}
      <section id="experience" className="py-32 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
          {/* NITTTR - FIXED COLORS */}
          <div className="group flex gap-8 p-8 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/30 hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-500">
            <div className="w-1 h-32 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mt-8 shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center font-bold text-white text-sm">
                  AI/ML
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI/ML Intern</h3>
                  <p className="text-purple-400 font-semibold">NITTTR Bhopal • June-July 2025</p>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Optimized 5+ supervised learning models improving prediction accuracy by 18%. Accelerated model training pipeline by 25% with efficient batch processing and feature selection.
              </p>
            </div>
          </div>

          {/* Cognifyz - FIXED COLORS */}
          <div className="group flex gap-8 p-8 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-emerald-500/20 transition-all duration-500">
            <div className="w-1 h-32 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full mt-8 shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center font-bold text-white text-sm">
                  Fullstack
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Fullstack Developer Intern</h3>
                  <p className="text-emerald-400 font-semibold">Cognifyz Technologies, Bengaluru</p>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed">
                worked on end-to-end data projects involving collection, cleaning, and analysis of datasets. I applied Python, Pandas, NumPy, Matplotlib, and Seaborn for EDA and visualization, and built machine learning models for predictive insights. This experience strengthened my skills in data preprocessing, feature engineering, and model evaluation, while enhancing teamwork, communication, and understanding of the complete Data Science lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS SECTION */}
<section id="certifications" className="py-32 px-8 max-w-6xl mx-auto">
  <div className="text-center mb-24">
    <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
      Certifications
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Column 1 */}
    <div className="p-8 bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 space-y-6">

      <div>
        <h3 className="font-bold text-white text-lg">
          IoT using Python – NPTEL (IIT Kharagpur)
        </h3>
        <p className="text-slate-300 text-sm">
          Elite Certificate with 82% score
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Elementary Data Structures – Saylor Academy
        </h3>
        <p className="text-slate-300 text-sm">
          Core foundations in data structures and algorithms
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Introduction to Python – Saylor Academy
        </h3>
        <p className="text-slate-300 text-sm">
          Python fundamentals for scripting and application development
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Introduction to MongoDB – MongoDB University
        </h3>
        <p className="text-slate-300 text-sm">
          NoSQL data modeling and CRUD operations
        </p>
      </div>

    </div>

    {/* Column 2 */}
    <div className="p-8 bg-gradient-to-br from-slate-800/80 to-indigo-900/40 backdrop-blur-xl rounded-3xl border border-indigo-500/30 space-y-6">

      <div>
        <h3 className="font-bold text-white text-lg">
          Introduction to Cyber Security – Infosys Springboard
        </h3>
        <p className="text-slate-300 text-sm">
          Completed August 7, 2024
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Software Engineering & Agile Development – Infosys Springboard
        </h3>
        <p className="text-slate-300 text-sm">
          Completed August 27, 2025
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Introduction to Packet Tracer – Cisco Networking Academy
        </h3>
        <p className="text-slate-300 text-sm">
          Completed October 9, 2025
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Introduction to Internet of Things – Cisco Networking Academy
        </h3>
        <p className="text-slate-300 text-sm">
          Covered IoT and AI-driven automation
        </p>
      </div>

      <div>
        <h3 className="font-bold text-white text-lg">
          Data Analyst Skill Certification – OneRoadmap
        </h3>
        <p className="text-slate-300 text-sm">
          Validated skills in data analysis and insights generation
        </p>
      </div>

    </div>

  </div>
</section>

      {/* 5. CONTACT SECTION - EMAIL BUTTON ONLY */}
      <section id="contact" className="py-32 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to build something amazing together? I'm always open to exciting opportunities.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          {/* Email Button */}
          <a 
            href="mailto:danishsidiq.rather@gmail.com" 
            className="group w-full flex items-center gap-4 p-8 bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.31.883 3.193 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Send Email</h3>
              <p className="text-slate-300">Danish Sidiq Rather</p>
            </div>
          </a>
        </div>


        <div className="max-w-md mx-auto space-y-6">
  {/* LinkedIn Button */}
  <a 
    href="https://www.linkedin.com/in/danish-sidiq-rather/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group w-full flex items-center gap-4 p-8 bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 shrink-0">
      {/* LinkedIn Icon */}
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6V24h-4v-8.2c0-2-0.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z"/>
      </svg>
    </div>
    <div className="flex-1 text-left">
      <h3 className="text-2xl font-bold text-white mb-2">Connect on LinkedIn</h3>
      <p className="text-slate-300">Danish Sidiq Rather</p>
    </div>
  </a>
</div>


        <div className="text-center mt-24 pt-12 border-t border-white/10">
          <p className="text-slate-400 text-lg">
            © 2026 Danish Sidiq Rather. Built with ❤️ in Bengaluru.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
