// app/api/register/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()
    
    const hashedPasswordBuffer = new Uint8Array(
      password.match(/.{1,2}/g)!.map((byte: string) => parseInt(byte, 16))
    ).buffer

    const originalPassword = new TextDecoder().decode(hashedPasswordBuffer)
    
    const verifyEmail = await prisma.user.findFirst({
      where: { email: email }
    })

    if (verifyEmail) {
      return NextResponse.json({ error: `User with ${email} already exists` }, { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(originalPassword, 10)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}