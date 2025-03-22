import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Dna, FlaskRound as Flask, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-emerald-600">Sruthi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            MSc Biology and Chemical Engineering Student | Aspiring Bioinformatician
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <Dna size={32} className="text-emerald-600" />
            <Flask size={32} className="text-blue-600" />
            <Code size={32} className="text-purple-600" />
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                alt="DNA Analysis Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DNA Sequence Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Implemented Python scripts for DNA sequence analysis and visualization using BioPython and modern bioinformatics tools.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                alt="Chemical Process Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chemical Process Simulation</h3>
                <p className="text-gray-600 mb-4">
                  Developed models for chemical process optimization using Python and specialized engineering software.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=800&q=80"
                alt="Biotech Data Analysis"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Biotech Data Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Created data visualization tools for analyzing large-scale biological datasets using R and modern statistical methods.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">About Me</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                I'm a third-year MSc student pursuing a dual degree in Biology and Chemical Engineering, with a growing passion for bioinformatics and computational biology. My unique background combines the precision of engineering with the complexity of biological systems.
              </p>
              <p className="text-gray-600 mb-6">
                My technical interests span across molecular biology, chemical process engineering, and computational methods in bioinformatics. I'm particularly fascinated by the application of modern computing techniques to solve complex biological problems.
              </p>
              <p className="text-gray-600 mb-6">
                Currently, I'm focusing on developing my skills in Python, R, and various bioinformatics tools while exploring opportunities in computational biology and biotechnology research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm interested in research opportunities and collaborations in bioinformatics and computational biology. Whether you have a question about my projects or want to discuss potential opportunities, I'd love to hear from you!
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sruthi. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;