import { Resend } from 'resend'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { success: false, message: 'Unable to send your message. Please try again later.' })
  }

  let formData
  try {
    formData = JSON.parse(event.body || '')
  } catch {
    return jsonResponse(400, { success: false, message: 'Please complete all required fields.' })
  }

  const { name, email, subject, message } = formData || {}
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim() ||
    !emailPattern.test(email.trim())
  ) {
    return jsonResponse(400, { success: false, message: 'Please complete all required fields with a valid email address.' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Contact email delivery is not configured: RESEND_API_KEY is missing.')
    return jsonResponse(500, { success: false, message: 'Unable to send your message. Please try again later.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['stepheneotieno20@gmail.com'],
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Subject: ${subject.trim()}`,
        '',
        'Message:',
        message.trim()
      ].join('\n')
    })

    if (error) {
      console.error('Resend rejected the contact email request.')
      return jsonResponse(502, { success: false, message: 'Unable to send your message. Please try again later.' })
    }

    return jsonResponse(200, { success: true, message: 'Message sent successfully.' })
  } catch {
    console.error('Contact email delivery failed.')
    return jsonResponse(500, { success: false, message: 'Unable to send your message. Please try again later.' })
  }
}
