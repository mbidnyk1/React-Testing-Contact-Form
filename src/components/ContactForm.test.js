import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('Inputs are visible', () => {
    const { getByLabelText } = render( <ContactForm />)
    
    getByLabelText(/first name/i)
    getByLabelText(/last name/i)
    getByLabelText(/email/i)
    getByLabelText(/message/i)
})
test('Text is visible', () => {
    const { getByText } = render( <ContactForm />)

    const nameText = getByText(/first name */i)
    expect(nameText).toBeVisible()
})

test('form input add contact info to form', () => {
    const {getByLabelText, getByText, getByTestId } = render( <ContactForm />)

    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    fireEvent.change(firstNameInput, { target: { value: 'Jim'}})
    fireEvent.change(lastNameInput, { target: { value: 'Cricket'}})
    fireEvent.change(emailInput, { target: { value: 'jcrick@gmail.com'}})
    fireEvent.change(messageInput, {target: { value: 'Stuck in a whale.'}})

    expect(firstNameInput.value).toBe('Jim')
    expect(lastNameInput.value).toBe('Cricket')
    expect(emailInput.value).toBe('jcrick@gmail.com')
    expect(messageInput.value).toBe('Stuck in a whale.')
})

test('get error validation in username', () => {
    
})