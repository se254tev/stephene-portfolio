import { useState } from 'react'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitted(false)
    setSubmissionError(false)
  }

  const validateForm = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.'
    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateForm()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      setSubmissionError(false)
      return
    }

    setSending(true)
    setSubmitted(false)
    setSubmissionError(false)
    setErrors({})

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json()

      if (!response.ok || result.success !== true) {
        throw new Error('Contact message delivery failed.')
      }

      setSubmitted(true)
      setFormData(initialForm)
    } catch {
      setSubmissionError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s Build Something Useful.</h2>
          <ul className="contact-list">
            <li><strong>Email:</strong> stepheneotieno20@gmail.com</li>
            <li><strong>Phone/WhatsApp:</strong> +254797819571</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/se254tev" target="_blank" rel="noreferrer">github.com/se254tev</a></li>
            <li><strong>LinkedIn:</strong> <a href="www.linkedin.com/in/stephene-otieno-880551399" target="_blank" rel="noreferrer">linkedin.com/in/stephene</a></li>
            <li><strong>Location:</strong> Kenya</li>
          </ul>
          <p className="form-note">
            This contact form is ready for a backend email service such as Formspree, Resend, or EmailJS.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="button primary" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
          {submitted && <p className="success-message">Your message has been sent successfully. Thank you for contacting me.</p>}
          {submissionError && <p className="error-message">Unable to send your message. Please try again later.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
