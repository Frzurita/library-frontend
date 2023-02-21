// Material UI
import Text from '../../atoms/Text'
import styles from './section-title.module.css'

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div className={styles.title}>
      <Text variant="h5" component="h3" text={text} />
    </div>
  )
}
