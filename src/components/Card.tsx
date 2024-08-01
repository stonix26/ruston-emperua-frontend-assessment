import { FC } from 'react'

interface CardProps {
  image: string
  content: string
}

const Card: FC<CardProps> = ({ image, content }) => (
  <div className="flex h-[26rem] max-w-72 flex-col items-center justify-between gap-y-4 rounded-md border p-4 shadow md:shrink-0">
    <div className="flex flex-col gap-y-4">
      <img src={image} alt="Content placeholder" className="rounded-md" />
      <p className="line-clamp-6 text-center text-sm">{content}</p>
    </div>
    <button className="rounded-full border-2 border-slate-800 px-4 py-1 font-bold uppercase text-slate-800 hover:bg-slate-800 hover:text-white">
      Read more
    </button>
  </div>
)

export default Card
