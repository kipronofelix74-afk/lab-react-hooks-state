
import ProductCard from './ProductCard'

export const sampleProducts = [
  {
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: 1.00,
    stock: true
  },
  {
    id: 2,
    name: 'Milk',
    category: 'Dairy',
    price: 2.50,
    stock: false
  }
]

const ProductList = ({ category, addToCart }) => {
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          product => product.category === category
        )

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList
