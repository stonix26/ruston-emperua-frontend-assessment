import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'
import Card from '../components/Card'
import mockData from '../mock-data/home-page.json'

type Data = {
  heading: {
    title: string
    description: string
  }
  cards: {
    id: number
    image: string
    content: string
  }[]
}

function Home() {
  const data = useMemo(() => {
    const strData = JSON.stringify(mockData)
    return JSON.parse(strData)
  }, []) as Data

  return (
    <div className="flex flex-col gap-y-6">
      <Heading {...data.heading} />
      <section className="flex flex-col items-center gap-y-10 overflow-x-auto p-4 md:flex-row md:items-start md:justify-center md:gap-x-6 md:gap-y-0">
        {data.cards.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </section>

      <Link className="text-center underline" to={'/exercise-2'}>
        Go to exercise 2
      </Link>
    </div>
  )
}

export default Home
