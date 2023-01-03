export const load = async ( { fetch } : { fetch : any } ) => {

  const fetchProducts = async () => {
    const productRes = await fetch('https://dummyjson.com/products')
    const productData = await productRes.json()
    return productData.products
  }

  return {
    products: fetchProducts()
  }
}