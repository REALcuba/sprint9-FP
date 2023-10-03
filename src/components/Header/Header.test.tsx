import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Header from './Header'

describe('Header Component', () => {
  test('renders logo correctly', () => {
    render(<Header />)
    const logo = screen.getByAltText('logo')
    expect(logo).toMatchSnapshot()
  })

  test('renders home link correctly', () => {
    render(<Header />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toMatchSnapshot()
    expect(homeLink.getAttribute('href')).toBe('/')
  })

  test('renders products link correctly', () => {
    render(<Header />)
    const productsLink = screen.getByText('Products')
    expect(productsLink).toMatchSnapshot()
    expect(productsLink.getAttribute('href')).toBe('/product')
  })

  test('renders login button correctly', () => {
    render(<Header />)
    const loginButton = screen.getByText('Login')
    expect(loginButton).toMatchSnapshot()
    expect(loginButton.getAttribute('href')).toBe('/login')
  })

  test('renders sign-up button correctly', () => {
    render(<Header />)
    const signUpButton = screen.getByText('Sign Up')
    expect(signUpButton).toMatchSnapshot()
    expect(signUpButton.getAttribute('href')).toBe('/register')
  })

  test('renders profile link correctly when logged in', () => {
    render(<Header />)
    const profileLink = screen.getByText('Profile')
    expect(profileLink).toMatchSnapshot()
    expect(profileLink.getAttribute('href')).toBe('/profile')
  })

  test('renders basket link correctly when logged in', () => {
    render(<Header />)
    const basketLink = screen.getByText('Basket')
    expect(basketLink).toMatchSnapshot()
    expect(basketLink.getAttribute('href')).toBe('/basket')
  })

  test('renders about us link correctly when logged in', () => {
    render(<Header />)
    const aboutUsLink = screen.getByText('About Us')
    expect(aboutUsLink).toMatchSnapshot()
    expect(aboutUsLink.getAttribute('href')).toBe('/about')
  })

  //   test('renders profile link correctly when not logged in', () => {
  //     // Mocking isLogged to be true
  //     vitest.spyOn(React, 'useState').mockImplementation(() => [true])

  //     render(<Header />)
  //     const profileLink = screen.getByText('Profile')
  //     expect(profileLink).toMatchSnapshot()
  //     expect(profileLink.getAttribute('href')).toBe('/profile')
  //   })

  //   test('renders basket link correctly when not logged in', () => {
  //     // Mocking isLogged to be true
  //     vitest.spyOn(React, 'useState').mockImplementation(() => [true])

  //     render(<Header />)
  //     const basketLink = screen.getByText('Basket')
  //     expect(basketLink).toMatchSnapshot()
  //     expect(basketLink.getAttribute('href')).toBe('/basket')
  //   })

  // Add more tests for other links and buttons
})
