import { } from 'next'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  console.log(query)

  return (
    <div>product</div>
  )
}
