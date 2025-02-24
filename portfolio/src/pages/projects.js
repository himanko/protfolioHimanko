import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">All Projects</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
