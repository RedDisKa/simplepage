import React from 'react'
import { ItemTypes } from '../../../contstants/ItemTypes'
import { Item } from './item/Item'
import { useDragLayer } from 'react-dnd'
import styles from '../draganddroppage.module.scss'

export const CustomDragLayer = () => {
    const {
        itemType,
        isDragging,
        item,
        initialOffset,
        currentOffset,
    } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }))

    const renderItem = () => {
        switch (itemType) {
            case ItemTypes.ITEM:
                return <Item title={item.title} active={true} />
            default:
                return null
        }
    }

    const getItemStyles = (initialOffset, currentOffset) => {
        if (!initialOffset || !currentOffset) {
            return {
                display: 'none',
            }
        }
        let { x, y } = currentOffset
        const transform = `translate(${x}px, ${y}px)`
        return {
            transform,
            WebkitTransform: transform,
        }
    }

    if (!isDragging) {
        return null
    }

    return (
        <div className={styles.custom_drag_layer}>
            <div style={getItemStyles(initialOffset, currentOffset)}>
                {renderItem()}
            </div>
        </div>
    )
}
