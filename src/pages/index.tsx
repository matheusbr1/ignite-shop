import { HomeContainer, Product } from "../styles/pages/home";
import Image from 'next/image'

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider" >
      <Product className='keen-slider__slide' >
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide' >
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide' >
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide' >
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide' >
        <Image src={camiseta1} width={520} height={480} alt='camiseta' />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
