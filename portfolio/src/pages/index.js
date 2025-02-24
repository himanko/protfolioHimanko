import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Himanko Boruah
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Data Scientist & Analytics Professional
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16" id="projects">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {['All', 'Analytics', 'Data Science'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Preview Section */}
        <section className="py-16 bg-gray-50" id="certifications">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">AWS Certified Solutions Architect</h3>
                <p className="text-gray-600 mb-4">Amazon Web Services</p>
                <span className="text-sm text-gray-500">Issued Jan 2023</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Google Cloud Professional Data Engineer</h3>
                <p className="text-gray-600 mb-4">Google Cloud</p>
                <span className="text-sm text-gray-500">Issued Sept 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/himankoboruah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-indigo-700 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/himanko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-indigo-700 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}