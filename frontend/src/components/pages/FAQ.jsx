import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const navigate = useNavigate()

  const handleBookConsultation = () => {
    const message = encodeURIComponent("Hi Naza, I would like to book a free 15-minute consultation to discuss how you can help me. Please let me know your availability. Thank you!")
    navigate(`/contact?message=${message}`)
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What happens during the first session?",
      answer: "Our first session is a chance for us to get to know each other. You can share what's bringing you to therapy, and I can answer any questions you have. We'll explore your goals and collaboratively decide if we are a good fit to work together."
    },
    {
      question: "Is what I say in therapy confidential?",
      answer: "Yes, absolutely. Confidentiality is a cornerstone of therapy. Everything we discuss is kept strictly private, in accordance with the ethical guidelines of the British Psychological Association (BPA)."
    },
    {
      question: "Do you accept insurance?",
      answer: "I do not directly bill insurance companies at this time. I can provide you with a detailed receipt for my services that you may be able to submit to your provider for potential reimbursement, depending on your plan and location."
    },
    {
      question: "How do I know if you're the right therapist for me?",
      answer: "Finding the right fit is essential. That's why I offer a free 15-minute consultation. It's a no-pressure opportunity for us to talk, for you to ask questions, and to see if you feel comfortable and understood."
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              I'm here to help address any concerns you may have. The best way to get your questions answered 
              is through a free consultation where we can discuss your specific needs and how I can support you.
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

      {/* Trust & Safety Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">BPA</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Professional Standards</h3>
              <p className="text-slate-600">
                Member of the British Psychological Association with strict ethical guidelines
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure Platform</h3>
              <p className="text-slate-600">
                All sessions conducted via encrypted, HIPAA-compliant video technology
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Evidence-Based</h3>
              <p className="text-slate-600">
                Utilizing proven therapeutic approaches like CBT and person-centered therapy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

