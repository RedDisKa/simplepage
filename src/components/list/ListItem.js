import React from 'react'
import styles from './list.module.scss'

export const ListItem = ({title, description}) => {

    return (
        <li>
            <div className={styles.item_content}></div>
            <p className={styles.item_title}>{title}</p>
            <p className={styles.item_description}>{description}</p>
        </li>
    )
}