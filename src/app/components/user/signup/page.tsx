'use client'
// This is a user signup page component
// It contains a form to create a new user account
// The form is submitted to the server using a POST request
// The server creates a new user in the database and returns the user object
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../../../components/ui/card'
import { Label } from '../../../../components/ui/label'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
import Link from 'next/link'

const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()        
        // Hash the password before sending it to the server
        const hashedPassword = await crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(formData.password)
        )
        const hashedPasswordHex = Array.from(new Uint8Array(hashedPassword))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('')

        const secureFormData = { ...formData, password: hashedPasswordHex }

        fetch('/api/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(secureFormData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle successful user creation
                if (data.error) {
                    alert(`Error: ${data.error}`)
                    return
                } else {
                    alert(`User created: ${JSON.stringify(data)}`)

                }
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Create an Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Your Password" value={formData.password} onChange={handleChange} />
                            </div>
                        </div>
                        <CardFooter className="mt-4 flex flex-col items-center space-y-2">
                            <Button type="submit" className="w-full">Sign Up</Button>
                            <p className="text-sm">
                                Already have an account?{' '}
                                <Link href="/components/user/login">
                                    <Button variant="link" className="p-0 text-blue-500 hover:underline">
                                        Back to Login
                                    </Button>
                                </Link>
                            </p>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignupPage