
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Shopping cart state
  const [cart, setCart] = useState([])

  // Category filter state
  const [category, setCategory] = useState('all')

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  // Add product to cart
  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  // Handle category filtering
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>

      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <hr />

      {/* Category Filter */}
      <label htmlFor="category">
        Filter by Category:
      </label>

      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <hr />

      {/* Product List */}
      <ProductList
        category={category}
        addToCart={addToCart}
      />

      <hr />

      {/* Shopping Cart */}
      <Cart cart={cart} />

    </div>
  )
}

export default App
