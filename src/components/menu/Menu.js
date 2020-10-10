import React from 'react'
import { Button } from '../button/Button'
import styles from './menu.module.scss'
import classnames from 'classnames'

const MenuItem = ({title, active}) => (
    <div className={classnames(styles.menu_item, active && styles.active)}>
        {title}
    </div>
)

export const Menu = () => (
    <div className={styles.menu}>
        <MenuItem title="Home" active={true} />
        <MenuItem title="Learn" />
        <p className={styles.menu_subtitle}>Your work</p>
        <MenuItem title="Cloud Documents" />
        <MenuItem title="Plugins" />
        <MenuItem title="Deleted" />
        <div className={styles.buttons_container}>
            <Button title="Create New" positive={true} />
            <Button title="Open" positive={false} />
        </div>
    </div>
)