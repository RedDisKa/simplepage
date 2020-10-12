import React from 'react'
import styles from './draganddropitem.module.scss'
import inputIcon from '../../../../resources/inputIcon.png'
import outputIcon from '../../../../resources/outputIcon.png'
import inputIconActive from '../../../../resources/inputIconActive.png'
import outputIconActive from '../../../../resources/outputIconActive.png'
import classnames from 'classnames'

export const DragAndDropItem = ({title, output, active, onDesc}) => {

    return (
        <div className={classnames(styles.drag_and_drop_item, onDesc ? styles.on_desc : (active && styles.active))}>
            <div className={styles.start_dot} />
            <div className={styles.end_dot} />
            <div className={styles.item_body} />
            <img 
                className={output ? (styles.item_icon_output) : styles.item_icon_input} 
                src={output ? (active ? outputIconActive : outputIcon) : (active ? inputIconActive : inputIcon)}
                alt=""
            />
            <p className={output ? styles.item_title_output : styles.item_title_input}>{title}</p>
            <div className={output ? styles.divider_output : styles.divider_input} />
        </div>
    )
}