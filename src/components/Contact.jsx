import { useRef, useState } from 'react'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const requestTimeoutMs = 15000

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const submissionInProgress = useRef(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSubmitted(false)
    setSendError('')
  }

  const validateForm = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!formData.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (!formData.message.trim()) nextErrors.message = 'Please enter your message.'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submissionInProgress.current) return

    const nextErrors = validateForm()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      setSendError('')
      return
    }

    submissionInProgress.current = true
    setSending(true)
    setSubmitted(false)
    setSendError('')
    setErrors({})
    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), requestTimeoutMs)

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      })

      if (!response.ok) {
        setSendError('server')
        return
      }

      let result
      try {
        result = await response.json()
      } catch {
        setSendError('server')
        return
      }

      if (result.success !== true) {
        setSendError('server')
        return
      }

      setSubmitted(true)
      setErrors({})
      setFormData(initialForm)
    } catch (error) {
      setSendError(error.name === 'AbortError' ? 'timeout' : 'network')
    } finally {
      window.clearTimeout(timeoutId)
      submissionInProgress.current = false
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
          {sending && <p className="form-note" role="status" aria-live="polite">Sending your message...</p>}
          {submitted && (
            <div className="success-message" role="status" aria-live="polite">
              <p>Message sent successfully!</p>
              <p>Thank you for contacting me. I’ll get back to you as soon as possible.</p>
            </div>
          )}
          {sendError === 'server' && (
            <div className="error-message" role="alert">
              <p>Unable to send your message.</p>
              <p>Please try again in a moment. If the problem continues, contact me directly by email or WhatsApp.</p>
            </div>
          )}
          {sendError === 'network' && (
            <div className="error-message" role="alert">
              <p>Connection error.</p>
              <p>Your message could not be sent. Please check your internet connection and try again.</p>
            </div>
          )}
          {sendError === 'timeout' && (
            <div className="error-message" role="alert">
              <p>The request timed out.</p>
              <p>Please check your connection and try again.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
