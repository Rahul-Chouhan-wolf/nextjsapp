'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useParams } from 'next/navigation'


interface Task {
    id: number
    task: string
}

const Homepage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const { userId } = useParams()
    const handleLogout = () => {
        // Logic for logging out the user
        fetch('/api/logout', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/components/user/login'
            } else {
            console.error('Failed to log out')
            }
        })
        .catch(error => {
            console.error('An error occurred during logout:', error)
        })
    }

    const getTasks = async () => {
        // Fetch tasks from the backend
        const response = await fetch(`/api/${userId}/tasks`, {
            method: 'GET',
            credentials: 'include',
        })
        if (response.ok) {
            const data = await response.json()
            setTasks(data.tasks)
        } else {
            console.error('Failed to fetch tasks')
        }
    }
	useEffect(() => {
        // Fetch tasks from the backend
        getTasks()
	}, [])

	const handleTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		const textarea = document.querySelector('textarea') as HTMLTextAreaElement
		if (textarea && textarea.value.trim() !== '') {
			const newTask = textarea.value.trim()
			fetch(`/api/${userId}/tasks`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({ task: newTask, userId: userId }),
			})
			.then(response => {
				if (response.ok) {
					getTasks()
					textarea.value = ''
				} else {
					console.error('Failed to save task')
				}
			})
			.catch(error => {
				console.error('An error occurred while saving the task:', error)
			})
		} else {
			console.error('Task cannot be empty')
		}
	}

    const handleEditTask = (taskId: number, task: string): void => {
        const updatedTask = prompt('Edit task:', task)
        if (updatedTask) {
            fetch(`/api/${userId}/tasks&taskId=${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ task: updatedTask }),
            })
            .then(response => {
                if (response.ok) {
                    getTasks()
                } else {
                    console.error('Failed to update task')
                }
            })
            .catch(error => {
                console.error('An error occurred while updating the task:', error)
            })
        }
    }

    const handleDeleteTask = (taskId: number): void => {
        fetch(`/api/${userId}/tasks&taskId=${taskId}`, {
            method: 'DELETE',
            credentials: 'include',
        })
        .then(response => {
            if (response.ok) {
                getTasks()
            } else {
                console.error('Failed to delete task')
            }
        })
        .catch(error => {
            console.error('An error occurred while deleting the task:', error)
        })
    }

    return (
        <div className="p-6 font-sans">
            <header className="flex justify-between items-center bg-green-600 text-white p-4 rounded-lg">
                <h1 className="text-xl font-bold">Welcome to TaskLogger</h1>
                <Button variant="outline" onClick={handleLogout} className="text-green-600 bg-white">
                    Log Out
                </Button>
            </header>
            <main className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Your Tasks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">Start logging your tasks below:</p>
                        <Textarea placeholder="Log your tasks here..." className="mb-4" />
                        <Button className="bg-green-600 text-white" onClick={handleTask}>Save Task</Button>
                    </CardContent>
                    <CardContent>
                        <ul className="mb-4">
                            {/* Fetch and display tasks from the backend */}
                            {tasks.length > 0 ? (
                                tasks.map((task) => (
                                    <li key={task.id} className="mb-2 flex justify-between items-center">
                                        <span>{task.task}</span>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleEditTask(task.id, task.task)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDeleteTask(task.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p>No tasks available</p>
                            )}
                        </ul>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default Homepage
