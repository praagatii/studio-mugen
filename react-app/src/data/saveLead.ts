export interface Lead {
  company: string
  name: string
  email: string
  phone: string
  projectType: string
  message: string
  createdAt: string
}

const STORAGE_KEY = 'mugen-leads'

function loadLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveLead(data: Lead): void {
  const existing = loadLeads()
  existing.push(data)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing, null, 2))
}
