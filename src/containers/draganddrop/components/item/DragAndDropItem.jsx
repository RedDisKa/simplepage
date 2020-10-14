import React from 'react'
import { useDrag } from 'react-dnd'
import { Item } from './Item'
import { ItemTypes } from '../../../../contstants/ItemTypes';
import styles from './draganddropitem.module.scss'

export const DragAndDropItem = ({id, title, output}) => {

    const [{ isDragging }, drag] = useDrag({
        item: { id, type: ItemTypes.ITEM, title, output },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                const {processItemMove, x, y } = dropResult
                processItemMove(id, x, y)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} className={isDragging ? styles.dragging_item : null}>
            {!isDragging && <Item active={isDragging} id={id} title={title} output={output} />}
        </div>
    )
}