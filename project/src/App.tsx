import React from 'react';
import { Shield, Lock, Search, FileCheck, Settings, Users, ChevronRight, Star, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "We have deep experience in cybersecurity consulting. We build a complete picture of your cybersecurity status & provide a clear vision of how to secure your business.",
      tagline: "Stay up and running",
      features: ["Risk Assessment", "Security Strategy", "Compliance Consulting", "Security Architecture"]
    },
    {
      icon: Search,
      title: "Cybersecurity Testing",
      description: "Our security testing services address mission-critical security challenges faced by enterprises. Our experience enables us to ensure that your business is hack-proof.",
      tagline: "Defend your data",
      features: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Threat Modeling"]
    },
    {
      icon: FileCheck,
      title: "Cybersecurity Compliance",
      description: "Our cyber security compliance services help companies put an end to regulatory confusion, respond to business threats, and pinpoint operational inefficiencies.",
      tagline: "Compliant your business",
      features: ["Regulatory Compliance", "2nd Party Verification", "Policy Development", "Audit Support"]
    },
    {
      icon: Lock,
      title: "Cyber Forensics & Investigation",
      description: "Our cyber forensics & investigation solutions provide attack context, infrastructure-wide visibility, codified expertise, and insights from front-line experience.",
      tagline: "Find out the truth",
      features: ["Digital Forensics", "Incident Response", "Threat Intelligence", "Evidence Collection"]
    },
    {
      icon: Settings,
      title: "Managed Security Solutions",
      description: "Looking to outsource your managed cyber security solutions? We provide comprehensive evaluation and implementation to achieve the best results for your business.",
      tagline: "Complete security management",
      features: ["OS Hardening", "Network Security", "Cloud Security", "24/7 Monitoring"]
    }
  ];

  const team = [
    {
      name: "Anurag Pandey",
      role: "Chief Security Officer",
      expertise: "Penetration Testing & Security Architecture",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQH6_yJ1YXTxrw/profile-displayphoto-shrink_200_200/B4DZPdwMcJHcAc-/0/1734592219918?e=1754524800&v=beta&t=Oj_dzzBADKFxlbLHI98l78Cjizfy0jkMpGOYSajzeUM",
      linkedin: "https://linkedin.com/in/anurag-pandey7",
      github: "https://github.com/Anurag7645"
    },
    {
      name: "Raunak Raj",
      role: "Cyber Forensics Specialist",
      expertise: "Digital Forensics & Incident Response",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQGNpCLGl4X43A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663049927134?e=1754524800&v=beta&t=oj1-GEn3thxwLDL51iA96CwaDTEJ6eklXoLPfZKtzdE",
      linkedin: "https://linkedin.com/in/raunak40",
      github: "https://github.com/"
    },
    {
      name: "A V S Sai Teja",
      role: "Compliance Director",
      expertise: "Regulatory Compliance & Risk Management",
      image: "https://media.licdn.com/dms/image/v2/D5603AQH-bzT7lZPYmw/profile-displayphoto-shrink_200_200/B56ZOzVRqEG8Ac-/0/1733880520350?e=1754524800&v=beta&t=KV0012CFdyjRaXsJ3VGmR1Q7rGe6xXy0xfI4c8PfANc",
      linkedin: "https://linkedin.com/in/a-v-s-sai-teja-69596b189",
      github: "https://github.com/saiteja2108"
    }
  ];

  const testimonials = [
    {
      name: "Abhay Prasad",
      company: "TechCorp Industries",
      role: "CTO",
      content: "Cerberus transformed our security posture completely. Their comprehensive approach and attention to detail exceeded our expectations. The team's expertise in both compliance and practical security implementation is outstanding.",
      rating: 5
    },
    {
      name: "Adtya Singh",
      company: "Financial Solutions Inc.",
      role: "CISO",
      content: "Working with Cerberus was a game-changer for our organization. Their forensics investigation helped us understand and mitigate a critical security incident. Professional, thorough, and highly recommended.",
      rating: 5
    },
    {
      name: "Neha Sharma",
      company: "Healthcare Systems LLC",
      role: "IT Director",
      content: "The managed security solutions provided by Cerberus have given us peace of mind. Their proactive monitoring and rapid response capabilities are exactly what we needed for our critical healthcare infrastructure.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "Enterprise Security Overhaul",
      category: "Security Consulting",
      description: "Complete security transformation for a Fortune 500 company, including infrastructure hardening and compliance framework implementation.",
      technologies: ["Network Security", "Cloud Security", "Compliance"]
    },
    {
      title: "Critical Infrastructure Protection",
      category: "Managed Security",
      description: "24/7 security monitoring and incident response for critical infrastructure provider, ensuring zero downtime and regulatory compliance.",
      technologies: ["SIEM", "Threat Intelligence", "Incident Response"]
    },
    {
      title: "Financial Services Forensics",
      category: "Cyber Forensics",
      description: "Comprehensive digital forensics investigation for financial services firm, identifying attack vectors and securing sensitive data.",
      technologies: ["Digital Forensics", "Malware Analysis", "Evidence Collection"]
    },
    {
      title: "Healthcare Compliance Suite",
      category: "Compliance",
      description: "HIPAA compliance implementation and ongoing monitoring for healthcare network, ensuring patient data protection.",
      technologies: ["HIPAA Compliance", "Risk Assessment", "Policy Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-xl font-bold text-white">Cerberus</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="#team" className="text-slate-300 hover:text-cyan-400 transition-colors">Team</a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition-colors">Testimonials</a>
              <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Secure Your Digital Future
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Expert cybersecurity consulting, testing, and managed solutions to protect your business from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center">
                Get Security Assessment <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Cybersecurity Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your business and ensure compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-all hover:scale-105 border border-slate-700">
                <service.icon className="h-12 w-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-orange-400 text-sm mb-4 font-medium">{service.tagline}</p>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <ChevronRight className="h-4 w-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team of cybersecurity professionals brings decades of combined experience in protecting businesses from digital threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400"
                />
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                <p className="text-slate-300 mb-6">{member.expertise}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={member.github} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing our successful cybersecurity implementations and solutions across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-all hover:scale-105 border border-slate-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with Cerberus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to secure your business? Contact us for a free consultation and cybersecurity assessment
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">contact@cerberus-security.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-slate-300">123 Security Blvd, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors">
                    <option>Select a service</option>
                    <option>Cybersecurity Consulting</option>
                    <option>Security Testing</option>
                    <option>Compliance Services</option>
                    <option>Forensics & Investigation</option>
                    <option>Managed Security Solutions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Tell us about your cybersecurity requirements..."
                  ></textarea>
                </div>
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-cyan-400 mr-3" />
                <span className="text-xl font-bold text-white">Cerberus</span>
              </div>
              <p className="text-slate-400">
                Protecting businesses from digital threats with expert cybersecurity solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Security Consulting</li>
                <li>Penetration Testing</li>
                <li>Compliance Services</li>
                <li>Forensics & Investigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Whitepapers</li>
                <li>Security Alerts</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Cerberus Cybersecurity. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
