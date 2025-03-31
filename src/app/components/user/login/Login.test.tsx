import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginPage from './page'

describe('LoginPage', () => {
    it('should render the login form', () => {
        render(<LoginPage />)
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    })

    xit('should display validation errors when inputs are empty', async () => {
        render(<LoginPage />)
        const loginButton = screen.getByRole('button', { name: /login/i })
        fireEvent.click(loginButton)

        await waitFor(() => {
            expect(screen.findByText(/Email is required/i)).toBeInTheDocument()
            expect(screen.findByText(/Password is required/i)).toBeInTheDocument()
        })
    })

    xit('should log email and password on form submission', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
        render(<LoginPage />)

        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        const loginButton = screen.getByRole('button', { name: /login/i })

        fireEvent.change(emailInput, { target: { value: 'user@example.com' } })
        fireEvent.change(passwordInput, { target: { value: 'password123' } })
        fireEvent.click(loginButton)

        expect(consoleSpy).toHaveBeenCalledWith('Email:', 'user@example.com')
        expect(consoleSpy).toHaveBeenCalledWith('Password:', 'password123')

        consoleSpy.mockRestore()
    })
})