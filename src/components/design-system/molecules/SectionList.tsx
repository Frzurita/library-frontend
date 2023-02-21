import ItemList from '../atoms/ItemList'
import { ReactNode } from 'react'

export default function SectionList({ children }: { children: ReactNode }) {
  return <ItemList spacing={2}>{children}</ItemList>
}
