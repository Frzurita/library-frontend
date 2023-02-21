import React from 'react'
import { FormError } from '../../../../types/error'
import styles from './error-list.module.css'

export default function ErrorList({ errors }: { errors: FormError }) {
  return (
    <ul className={styles['error-list']}>
      {Object.entries(errors).map(([key, keyErrors], index) =>
        keyErrors.map(error => <li key={index}>{error}</li>)
      )}
    </ul>
  )
}
