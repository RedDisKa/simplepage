import React from 'react'
import {ListItem} from './ListItem'
import styles from './list.module.scss'

export const List = ({title, description, items, rightComponent}) => {

    return (
        <div className={styles.list_container}>
            <div className={styles.list_header}>
                <p className={styles.list_title}>{title}</p>
                <div className={styles.description_container}>
                    <p className={styles.list_description}>{description}</p>
                    {rightComponent}
                </div>
            </div>
            <ul className={styles.list}>
                {items.map(item => (
                    <ListItem title={item.title} description={item.description}/>
                ))}
            </ul>
        </div>
    )
}