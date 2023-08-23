import { } from 'next'
import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 78,90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illo dolorem eos aliquam corrupti praesentium consectetur quam. Ducimus autem expedita aut blanditiis temporibus deserunt optio laborum sunt. Dolore, odio blanditiis.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
