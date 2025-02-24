export default function ProjectCard({ project }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <span className="inline-block bg-secondary text-white text-sm px-3 py-1 rounded-full mb-2">
              {project.category}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((technology, index) => (
            <span 
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    )
  }
