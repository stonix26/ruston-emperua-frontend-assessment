import { FC } from 'react'

interface HeadingProps {
  title: string
  description: string
}

const Heading: FC<HeadingProps> = ({ title, description }) => (
  <section className="section-heading">
    <div className="flex h-full flex-col items-center justify-center gap-y-4 bg-black/50 p-4 backdrop-sepia-0">
      <h1 className="text-center text-6xl font-bold leading-normal text-white">
        {title}
      </h1>
      <p className="text-center text-lg text-white">{description}</p>
    </div>
  </section>
)

export default Heading
