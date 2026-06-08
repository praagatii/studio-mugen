import { useState, useCallback } from 'react'

interface InquiryData {
  name: string
  company: string
  email: string
  phone: string
  message: string
  timestamp: string
}

const STORAGE_KEY = 'mugen-inquiries'

function loadInquiries(): InquiryData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveInquiry(data: InquiryData) {
  const existing = loadInquiries()
  existing.push(data)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing, null, 2))
}

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setSaving(true)

      const data: InquiryData = {
        ...form,
        timestamp: new Date().toISOString(),
      }

      saveInquiry(data)

      try {
        const blob = new Blob([JSON.stringify(loadInquiries(), null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'mugen-inquiries.json'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } catch {
        // download failed, data still in localStorage
      }

      setSaving(false)
      setSubmitted(true)
    },
    [form],
  )

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '10px 14px',
    color: '#fff',
    fontSize: '0.9rem',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '6px',
    fontFamily: "'Montserrat', sans-serif",
  }

  if (submitted) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: 'clamp(24px, 3vw, 36px)',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          textAlign: 'center',
        }}
      >
        <p
          className="text-white font-light"
          style={{ fontSize: '1.1rem', fontFamily: "'Montserrat', sans-serif" }}
        >
          Thank you for reaching out.
        </p>
        <p
          className="text-white/50 font-light"
          style={{ fontSize: '0.9rem', fontFamily: "'Montserrat', sans-serif" }}
        >
          We&apos;ll get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: 'clamp(24px, 3vw, 36px)',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
      }}
    >
      <div>
        <label style={labelStyle}>Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Company</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company name"
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 234 567 890"
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
          onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
        />
      </div>
      <button
        type="submit"
        disabled={saving}
        style={{
          marginTop: '4px',
          padding: '12px 24px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '0.8rem',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          cursor: saving ? 'default' : 'pointer',
          opacity: saving ? 0.5 : 1,
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={e => {
          if (!saving) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
          }
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
        }}
      >
        {saving ? 'Saving...' : 'Send Inquiry'}
      </button>
    </form>
  )
}
