import React from 'react'
import styles from './search.module.scss'
import searchIcon from '../../resources/searchIcon.png'

export const SearchField = () => (
    <div className={styles.search_container}>
        <p className={styles.search_title}>Search</p>
        <input className={styles.search_input} placeholder="search recent projects" />
        <img className={styles.search_icon} src={searchIcon} alt="" />
    </div>
)