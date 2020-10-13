import React, { useState } from 'react'
import { DragAndDropItem } from './components/item/DragAndDropItem'
import styles from './draganddroppage.module.scss'
import addIcon from '../../resources/addIcon.png'
import createEngine, {
    DefaultLinkModel,
    DiagramModel,
} from '@projectstorm/react-diagrams'
import { JSCustomNodeFactory } from './components/item/JSCustomNodeFactory'
import { JSCustomNodeModel } from './components/item/JSCustomNodeModel'
import { CanvasWidget } from '@projectstorm/react-canvas-core'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../contstants/ItemTypes'
import { CustomDragLayer } from './components/CustomDragLayer'
import {v1 as uuid} from 'uuid'

const engine = createEngine()
engine.getNodeFactories().registerFactory(new JSCustomNodeFactory())

export const DragAndDropPage = () => {
    const [inputs, setInputs] = useState([
        { id: '1', title: 'Events : all' },
        { id: '2', title: 'Events : all' },
        { id: '3', title: 'Events : all' },
        { id: '4', title: 'Events : all' },
        { id: '5', title: 'Events : all' },
        { id: '6', title: 'Events : all' },
        { id: '7', title: 'Events : all' },
        { id: '8', title: 'Events : all' },
        { id: '9', title: 'Events : all' },
        { id: '10', title: 'Events : all' },
    ])
    const [outputs, setOutputs] = useState([
        { id: '11', title: 'Debug' },
        { id: '12', title: 'Debug' },
        { id: '13', title: 'Debug' },
        { id: '14', title: 'Debug' },
        { id: '15', title: 'Debug' },
        { id: '16', title: 'Debug' },
        { id: '17', title: 'Debug' },
        { id: '18', title: 'Debug' },
        { id: '19', title: 'Debug' },
        { id: '20', title: 'Debug' },
    ])

    const [nodes, setNodes] = useState([
        {
            id: '21',
            color: 'rgb(192,255,0)',
            title: 'node sensor',
            x: 239,
            y: 493,
        },
        {
            id: '22',
            color: 'rgb(0,192,255)',
            title: 'json',
            x: 476,
            y: 409,
        },
        {
            id: '23',
            color: 'rgb(0,192,255)',
            title: 'switch',
            x: 476,
            y: 493,
        },
        {
            id: '24',
            color: 'rgb(0,192,255)',
            title: 'msg.payload',
            x: 675,
            y: 458,
        },
        {
            id: '25',
            color: 'rgb(0,192,255)',
            title: 'Set msg.payload.note',
            x: 675,
            y: 563,
        },
        {
            id: '26',
            color: 'rgb(0,192,255)',
            title: 'msg.payload',
            x: 958,
            y: 563,
        },
    ])

    const [links, setLinks] = useState([
        {
            sourceNode: '21',
            targetNode: '22',
        },
        {
            sourceNode: '22',
            targetNode: '23',
        },
        {
            sourceNode: '23',
            targetNode: '24',
        },
        {
            sourceNode: '23',
            targetNode: '25',
        },
        {
            sourceNode: '25',
            targetNode: '26',
        },
    ])

    const [model, setModel] = useState(new DiagramModel())

    nodes.forEach((node) => {
        const nodeModel = new JSCustomNodeModel(node)
        nodeModel.setPosition(node.x, node.y)
        model.addNode(nodeModel)
    })

    links.forEach((link) => {
        const linkModel = new DefaultLinkModel()
        const node1 = model.getNode(link.sourceNode)
        const node2 = model.getNode(link.targetNode)
        linkModel.setSourcePort(node1.getPort('out'))
        linkModel.setTargetPort(node2.getPort('in'))
        model.addLink(linkModel)
    })

    engine.setModel(model)

    const onAddInput = () => {
        const newInputs = inputs.slice(0)
        newInputs.push({ id: uuid(), title: 'Events : all' })
        setInputs(newInputs)
        console.log(newInputs)
    }

    const onAddOutput = () => {
        const newOutputs = outputs.slice(0)
        newOutputs.push({ id: uuid(), title: 'Debug' })
        setOutputs(newOutputs)
    }

    const processItemMove = (id, x, y) => {
        const index = inputs.findIndex((input) => input.id === id)
        if (index >= 0) {
            const item = inputs[index]
            const newInputs = inputs.slice(0)
            newInputs.splice(index, 1)
            setInputs(newInputs)

            const node = { x, y, id, color: null, title: item.title }
            const nodeModel = new JSCustomNodeModel(node)
            nodeModel.setPosition(node.x, node.y)
            model.addNode(nodeModel)

            const newNodes = nodes.slice(0)
            newNodes.push(node)
            setNodes(newNodes)
        } else {
            const index = outputs.findIndex((input) => input.id === id)
            if (index >= 0) {
                const item = outputs[index]
                const newOutputs = outputs.slice(0)
                newOutputs.splice(index, 1)
                setOutputs(newOutputs)

                const node = { x, y, id, color: null, title: item.title, output: true }
                const nodeModel = new JSCustomNodeModel(node)
                nodeModel.setPosition(node.x, node.y)
                model.addNode(nodeModel)

                const newNodes = nodes.slice(0)
                newNodes.push(node)
                setNodes(newNodes)
            }
        }
    }

    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop(item, monitor) {
            const delta = monitor.getSourceClientOffset();
            return ({ processItemMove, x: delta.x - 257, y: delta.y - 39 })
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    return (
        <React.Fragment>
            <CustomDragLayer />
            <div className={styles.container}>
                <div className={styles.header}>
                    <select className={styles.title_dropdown}>
                        <option value="" selected>
                            Mobile App Essentials
                        </option>
                    </select>
                    <select className={styles.scale_dropdown}>
                        <option value="scale_50" selected>
                            50%
                        </option>
                    </select>
                </div>
                <div className={styles.desc_container}>
                    <div className={styles.left_panel}>
                        <div className={styles.list_title}>
                            <p className={styles.title}>Input</p>
                            <button
                                className={styles.add_button}
                                onClick={onAddInput}
                            >
                                <img src={addIcon} alt="" />
                            </button>
                        </div>
                        <div className={styles.list}>
                            {inputs.map((item) => (
                                <DragAndDropItem
                                    id={item.id}
                                    title={item.title}
                                />
                            ))}
                        </div>
                        <div className={styles.list_title}>
                            <p className={styles.title}>output</p>
                            <button
                                className={styles.add_button}
                                onClick={onAddOutput}
                            >
                                <img src={addIcon} alt="" />
                            </button>
                        </div>
                        <div className={styles.list}>
                            {outputs.map((item) => (
                                <DragAndDropItem
                                    id={item.id}
                                    title={item.title}
                                    output={true}
                                />
                            ))}
                        </div>
                    </div>
                    <div ref={drop} className={styles.desc}>
                        <CanvasWidget
                            className={styles.drag_and_drop_desc}
                            engine={engine}
                        />
                    </div>
                    <div className={styles.info_panel}>
                        <p className={styles.title}>info</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
