'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../../../components/ui/card'
import { Label } from '../../../../components/ui/label'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
import { useRouter } from 'next/navigation'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors: { email?: string; password?: string } = {}

        if (!email) newErrors.email = 'Email is required'
        if (!password) newErrors.password = 'Password is required'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        const hashedPassword = await crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(password)
        )
        const hashedPasswordHex = Array.from(new Uint8Array(hashedPassword))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('')

        try {
            // Simulate login API call
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password: hashedPasswordHex }),
            })

            if (!response.ok) {
                throw new Error('Login failed')
            }

            const data = await response.json()
            if (data.status === 201) {
                console.log('Login successful')
                router.push(`/user/${data.userId}`)
            }
        } catch (error) {
            setErrors({ email: 'Invalid credentials' }) // Example error handling
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                aria-label='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Your Password"
                                required
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="text-center">
                    <p className="text-sm">
                        Don&apos;t have an account?{' '}
                        <Link href="/components/user/signup">
                            <Button variant="link" className="p-0 text-blue-500 hover:underline">
                                Sign up here
                            </Button>
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginPage