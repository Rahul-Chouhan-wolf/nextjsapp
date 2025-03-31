import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

// Handle GET request
export async function GET(
    req: NextRequest,
    context: { params: { userId: string } }
  ) {
    // Access params through the context parameter and await it
    const { params } = context
    const userId = params.userId

    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }
    const taskArray = await prisma.task.findMany({
        where: { user_id: Number(userId) },
        select: { id: true, task: true }
    }).then(tasks => tasks.map(task => ({ id: task.id, task: task.task })))

    if (!taskArray || taskArray.length === 0) {
        return NextResponse.json({ error: 'No tasks found for the given User ID' }, { status: 404 })
    }
    return NextResponse.json({tasks: taskArray, status: 200})
}

// Handle POST request
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { task, userId } = body

        if (!task) {
            return NextResponse.json({ error: 'Task is required' }, { status: 400 })
        }

        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
        }

        const newTask = await prisma.task.create({
            data: {
                task: task,
                user_id: Number(userId),
            },
        })

        return NextResponse.json(newTask, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
}

// Handle PUT request (Edit task)
export async function PUT(req: NextRequest) {
    try {
        const body = await req.json()
        const { taskId, task } = body

        if (!taskId) {
            return NextResponse.json({ error: 'Task ID is required' }, { status: 400 })
        }

        if (!task) {
            return NextResponse.json({ error: 'Task is required' }, { status: 400 })
        }

        const updatedTask = await prisma.task.update({
            where: { id: Number(taskId) },
            data: { task: task },
        })

        return NextResponse.json(updatedTask, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
}

// Handle DELETE request (Delete task)
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const taskId = searchParams.get('taskId')

        if (!taskId) {
            return NextResponse.json({ error: 'Task ID is required' }, { status: 400 })
        }

        await prisma.task.delete({
            where: { id: Number(taskId) },
        })

        return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
}