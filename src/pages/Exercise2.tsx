import { useMemo, useState } from 'react'
import tabAccordionData from '../../data.json'
import TabAccordion from '../components/TabAccordion'
import { Link } from 'react-router-dom'

type Data = {
  title: string
  content: string
}[]

const Exercise2 = () => {
  const items = useMemo(() => {
    const stringifiedData = JSON.stringify(tabAccordionData)
    return JSON.parse(stringifiedData)
  }, []) as Data

  const [value, setValue] = useState<string>(items[0].title)

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-bold">Exercise 2</h1>
      <TabAccordion
        value={value}
        onValueChange={newVal => setValue(newVal)}
        items={items}
      />

      <div className="prose mt-8">
        <ul>
          <li>
            Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is
            banana.
          </li>
        </ul>
        <p>
          The expression ('b' + 'a' + + 'a' + 'a').toLowerCase() evaluates to
          "banana" because:
        </p>
        <ol>
          <li>'b' + 'a' results in 'ba'.</li>
          <li>+ 'a' converts 'a' to NaN.</li>
          <li>'ba' + NaN results in 'baNaN'.</li>
          <li>'baNaN' + 'a' results in 'baNaNa'.</li>
          <li>Finally, toLowerCase() converts 'baNaNa' to 'banana'.</li>
        </ol>
      </div>

      <Link className="mt-8 underline" to={'/'}>
        Back to home
      </Link>
    </div>
  )
}

export default Exercise2
