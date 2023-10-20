declare global {
  interface MenuResponse {
    status: string,
    message: string | null,
    data: Array<Category>
  }

  interface Category {
    id: string,
    name: string,
    slug: string,
    imageUrl: string
    products: Array<Product>
  }

  interface Product {
    id: string,
    name: string,
    slug: string,
    imageUrl: string
    price: number
    description: string | null
    isOutOfStock: boolean
  }
}

export { MenuResponse };