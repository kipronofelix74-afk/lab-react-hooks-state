
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`card ${product.stock ? '' : 'outOfStock'}`}>
      <h3>{product.name}</h3>

      <p>Price: ${Number(product.price).toFixed(2)}</p>

      <p>Status: {product.stock ? 'In Stock' : 'Out of Stock'}</p>

      <button
  data-testid={`product-${product.id}`}
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>
    </div>
  )
}

export default ProductCard
