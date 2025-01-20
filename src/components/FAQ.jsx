import React from 'react'

const FAQ = () => {
  const questions = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time and you won't be charged for the next billing cycle."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices, including custom fields and notes."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly and annual billing options. You'll be charged at the beginning of each billing cycle."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email in your account settings. We'll send a confirmation to both email addresses."
    }
  ]

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="h3 fw-bold">Frequently asked questions</h2>
        <p className="text-muted">Everything you need to know about the product and billing</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="accordion" id="faqAccordion">
            {questions.map((item, index) => (
              <div className="accordion-item border-0 mb-3" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-light rounded"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <div>
                <h4 className='mb-1 mt-4'>Still have questions?</h4>
                <p className='text-muted' style={{fontSize: 15}}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            </div>
            <button className="btn btn-red">Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default FAQ

