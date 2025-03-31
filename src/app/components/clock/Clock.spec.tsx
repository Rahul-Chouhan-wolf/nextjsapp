import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Clock from './page'

describe('Clock Component', () => {
  test('renders Clock component', () => {
    render(<Clock />)
    expect(screen.getByText('Clock')).toBeInTheDocument()
  })

  test('renders hours, minutes, and seconds', () => {
    render(<Clock />)
    expect(screen.getByLabelText('hours')).toBeInTheDocument()
    expect(screen.getByLabelText('minutes')).toBeInTheDocument()
    expect(screen.getByLabelText('seconds')).toBeInTheDocument()
  })

  test('renders back button', () => {
    render(<Clock />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
