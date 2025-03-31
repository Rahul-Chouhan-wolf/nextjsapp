import { NextResponse } from 'next/server'

export async function GET() {
    // Clear the authentication cookies or session
    const response = NextResponse.json({ message: 'Logged out successfully' })
    response.cookies.set('authToken', '', { maxAge: 0 })
    return response
}