import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './Accordion'

export type Data = {
  title: string
  content: string
}[]

export interface TabAccordionProps {
  value?: string
  onValueChange?: (value: string) => void
  items: Data
}

const TabAccordion: FC<TabAccordionProps> = ({
  value,
  onValueChange,
  items
}) => {
  return (
    <div className="flex flex-col">
      <div className="hidden md:block">
        <Tabs value={value} onValueChange={onValueChange} className="w-full">
          <TabsList>
            {items.map(item => (
              <TabsTrigger key={item.title} value={item.title}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <hr className="h-px bg-slate-800" />
          {items.map(item => (
            <TabsContent key={item.title} value={item.title}>
              <article
                className="prose"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="block md:hidden">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={value}
          onValueChange={onValueChange}
        >
          {items.map(item => (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <article
                  className="prose lg:prose-xl"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default TabAccordion
