// app/api/login/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json()
            
        const hashedPasswordBuffer = new Uint8Array(
            password.match(/.{1,2}/g)!.map((byte: string) => parseInt(byte, 16))
        ).buffer
    
        const originalPassword = new TextDecoder().decode(hashedPasswordBuffer)
        const user = await prisma.user.findFirst({
            where: { email: email }
        })

        if (user && await bcrypt.compare(originalPassword, user.password)) {
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            )
            // Set the token as a cookie
            Cookies.set('authToken', token, {
                secure: process.env.NODE_ENV === 'production', 
                expires: 1 / 24, // 1 hour
            })
          
            // Send the token as a response
            return NextResponse.json({message: 'Logged In Successfully', userId: user.id, status: 201 })
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to find user' }, { status: 500 })
    }
}