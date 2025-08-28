import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Heart, Brain, ArrowRight } from 'lucide-react'
import heroBackground from '../../assets/hero-background.jpg'

const Home = () => {
  const navigate = useNavigate()
  
  const handleBookConsultation = () => {
    const message = encodeURIComponent("Hi Naza, I would like to book a free 15-minute consultation to discuss how you can help me. Please let me know your availability. Thank you!")
    navigate(`/contact?message=${message}`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            Helping You Navigate Life's Challenges and Find Your Path Forward
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-blue-100">
            Compassionate, evidence-based online therapy for adults.
          </p>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-blue-50">
              My name is Naza Aliyeva, and I believe everyone deserves a space to be heard and understood. 
              My practice is dedicated to providing you with the confidential support and practical tools you need 
              to overcome obstacles and build a more fulfilling life, all from the comfort of your own space.
            </p>
          </div>
          <Button 
            onClick={handleBookConsultation}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book a Free 15-Minute Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              How I Can Help
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Anxiety & Stress */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Anxiety & Stress
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Learn to manage overwhelming thoughts and feelings with proven strategies.
              </p>
            </div>

            {/* Depression & Burnout */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Depression & Burnout
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rediscover your energy and sense of purpose.
              </p>
            </div>

            {/* Life Transitions */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Life Transitions
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Navigate career changes, relationship shifts, and personal growth with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Reaching out is a sign of strength. Let's talk about how I can support you. 
            Schedule a complimentary, no-obligation consultation today.
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

export default Home

