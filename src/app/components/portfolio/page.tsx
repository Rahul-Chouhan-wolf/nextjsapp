import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const PortfolioPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
            <header className="py-10 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight hover:text-indigo-300 transition-colors duration-300">
                    John Doe
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Full-Stack Developer | Ruby on Rails | React | Next.js | Prisma | Docker
                </p>
                <p className="mt-2 text-sm text-gray-400 italic">WOW Award Winner at company.xyz</p>
            </header>

            <main className="container mx-auto px-4">
                {/* About Section */}
                <section className="my-10">
                    <Card className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-2xl">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">
                                I am a passionate full-stack developer with expertise in building scalable and
                                efficient web applications. I specialize in Ruby on Rails, React, and Next.js, with
                                a strong focus on backend technologies like MongoDB, PostgreSQL, and Prisma. I love
                                working with Docker to containerize applications and ensure seamless deployments.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Skills Section */}
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        {[
                            'Ruby on Rails',
                            'React',
                            'Next.js',
                            'MongoDB',
                            'PostgreSQL',
                            'Prisma',
                            'Docker',
                            'JavaScript',
                            'TypeScript',
                            'HTML',
                            'CSS',
                            'Git',
                        ].map((skill) => (
                            <Badge
                                key={skill}
                                className="bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                    <Card className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-xl">WOW Award Winner</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">
                                Recognized for outstanding contributions and excellence at company.xyz. This award
                                highlights my dedication to delivering high-quality solutions and fostering innovation.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Work Experience Section */}
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                    <Card className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-xl">Software Engineer at company.xyz</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">
                                At company.xyz, I work on developing and maintaining scalable web applications,
                                collaborating with cross-functional teams, and implementing best practices in software
                                development. My role involves leveraging modern technologies to deliver impactful
                                solutions.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Projects Section */}
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'E-Commerce Platform',
                                description:
                                    'A full-stack e-commerce platform built with Ruby on Rails, React, and PostgreSQL.',
                            },
                            {
                                title: 'Portfolio Website',
                                description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
                            },
                            {
                                title: 'Task Manager',
                                description:
                                    'A task management app built with Prisma, MongoDB, and Docker for deployment.',
                            },
                        ].map((project, index) => (
                            <Card
                                key={index}
                                className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl hover:text-indigo-300 transition-colors duration-300">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300">{project.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="my-10 text-center">
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-400 mb-6">
                        Feel free to reach out to me for collaboration or just to say hi!
                    </p>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                        Contact Me
                    </Button>
                </section>
            </main>

            <footer className="py-6 text-center text-gray-500">
                © {new Date().getFullYear()} John Doe. All rights reserved.
            </footer>
        </div>
    )
}

export default PortfolioPage