import { certifications } from '../data/certifications'
import CertificationCard from '../components/CertificationCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Certifications() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Certifications</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <CertificationCard 
                key={index} 
                certification={certification} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
