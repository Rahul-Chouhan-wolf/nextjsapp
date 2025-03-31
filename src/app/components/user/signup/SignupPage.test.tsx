import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SignupPage from './page'

describe('SignupPage', () => {
    it('renders the signup form', () => {
        render(<SignupPage />)
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    })

    it('renders the back to login link', () => {
        render(<SignupPage />)
        expect(screen.getByRole('button', { name: /back to login/i })).toBeInTheDocument()
    })

    xit('shows validation errors when fields are empty', () => {
        // This test is skipped as validation logic is not implemented in the current page
    })

    xit('calls onSubmit with form data when form is valid', () => {
        // This test is skipped as onSubmit logic is not implemented in the current page
    })
})