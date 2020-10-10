import React from 'react'
import styles from './button.module.scss'
import classnames from 'classnames'

export const Button = ({title, positive}) => (
    <button className={classnames(styles.button, positive && styles.positive)}>{title}</button>
)