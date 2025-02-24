export default function CertificationCard({ certification }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img 
            src={certification.logo} 
            alt={certification.issuer}
            className="h-12 w-12 mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{certification.title}</h3>
            <p className="text-gray-600">{certification.issuer}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{certification.date}</span>
          <a 
            href={certification.link}
            className="text-secondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Credential
          </a>
        </div>
      </div>
    )
  }
