// Client-side JWT validation helper
export function isTokenExpired(token: string): boolean {
  try {
    // Parse JWT without validation (client-side check only)
    const parts = token.split('.')
    if (parts.length !== 3) return true
    
    const payload = JSON.parse(atob(parts[1]))
    
    // Check if token has expiration
    if (!payload.exp) return true
    
    // Check if token is expired (exp is in seconds, Date.now() is in milliseconds)
    return payload.exp * 1000 < Date.now()
  } catch {
    return true
  }
}
