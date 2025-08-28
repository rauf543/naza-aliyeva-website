import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Clock, Shield, CheckCircle } from 'lucide-react'

const Approach = () => {
  const handleBookConsultation = () => {
    window.open('#', '_blank')
  }

  const areasOfFocus = [
    'Anxiety Disorders',
    'Depression',
    'Stress Management',
    'Relationship Issues',
    'Self-Esteem & Confidence',
    'Life Transitions'
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              My Approach & Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8">
              My Therapeutic Approach
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center">
              My approach is integrative, drawing primarily from evidence-based practices like 
              <span className="font-semibold text-blue-600"> Cognitive Behavioral Therapy (CBT)</span> and 
              <span className="font-semibold text-green-600"> person-centered therapy</span>. 
              This means our work is both practical and collaborative. We will explore how your thoughts and 
              behaviors are connected while ensuring our sessions are a supportive space where your unique 
              experiences are valued. My goal is to equip you with real-world tools while fostering genuine 
              understanding and self-compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Areas of Focus
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfFocus.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Session Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Format */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Format</h3>
              <p className="text-slate-600 text-lg">Individual Therapy</p>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Location</h3>
              <p className="text-slate-600 leading-relaxed">
                All sessions are conducted via a secure online video platform, offering you complete privacy, 
                comfort, and convenience.
              </p>
            </div>

            {/* Session Length */}
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Session Length</h3>
              <p className="text-slate-600 text-lg">50 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Take the first step towards positive change with a complimentary consultation.
          </p>
          <Button 
            onClick={handleBookConsultation}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book a Free 15-Minute Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Approach

