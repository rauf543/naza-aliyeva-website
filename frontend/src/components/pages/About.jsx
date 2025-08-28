import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen } from 'lucide-react'
import nazaHeadshot from '../../assets/naza-headshot.jpg'

const About = () => {
  const navigate = useNavigate()
  
  const handleBookConsultation = () => {
    const message = encodeURIComponent("Hi Naza, I would like to book a free 15-minute consultation to discuss how you can help me. Please let me know your availability. Thank you!")
    navigate(`/contact?message=${message}`)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              About Naza
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Photo */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src={nazaHeadshot} 
                  alt="Naza Aliyeva, MSc - Professional Headshot" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-green-600/20"></div>
              </div>
            </div>

            {/* Philosophy Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                My Philosophy
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I believe that healing begins in a space where you feel truly seen and accepted without judgment. 
                My approach to therapy is rooted in the understanding that every person carries within them the 
                capacity for growth, resilience, and positive change. The therapeutic relationship we build together 
                serves as a foundation for this transformation—a safe harbor where you can explore your thoughts, 
                feelings, and experiences with complete honesty and vulnerability. When you feel genuinely understood 
                and supported, you naturally begin to develop a deeper understanding of yourself and your patterns, 
                which becomes the catalyst for meaningful change.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                What drives my passion for this work is witnessing the profound shifts that occur when people develop 
                practical, real-world skills that enhance their daily lives. Therapy isn't just about talking through 
                problems; it's about equipping you with concrete tools and strategies that you can use long after our 
                sessions end. Whether it's learning to manage anxiety in the moment, developing healthier communication 
                patterns, or building confidence to pursue your goals, I am committed to helping you translate insights 
                into actionable steps that create lasting positive change.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                I see each person as the expert of their own life, and my role is to walk alongside you as a guide 
                and collaborator in your journey toward greater well-being. Together, we'll work to identify your 
                strengths, understand the obstacles that may be holding you back, and develop personalized strategies 
                that align with your values and goals. This collaborative approach ensures that the work we do together 
                feels authentic to who you are and sustainable in your everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Education & Credentials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Master of Science</h4>
                  <p className="text-slate-600">Psychology Therapies in Mental Health</p>
                  <p className="text-sm text-slate-500">Queen Mary University of London</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Bachelor of Science</h4>
                  <p className="text-slate-600">Psychology</p>
                  <p className="text-sm text-slate-500">University of Exeter</p>
                </div>
              </div>
            </div>

            {/* Professional Membership */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Professional Membership</h3>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">British Psychological Association (BPA)</h4>
                <p className="text-slate-600 leading-relaxed">
                  I adhere to their strict code of ethics and professional conduct, ensuring you receive 
                  safe, confidential, and high-quality care.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I hold a Master of Science in Psychology Therapies in Mental Health from Queen Mary University of London 
              and a Bachelor of Science in Psychology from the University of Exeter. I am a member of the British 
              Psychological Association (BPA) and adhere to their strict code of ethics and professional conduct, 
              ensuring you receive safe, confidential, and high-quality care.
            </p>
            
            <Button 
              onClick={handleBookConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book a Free 15-Minute Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

