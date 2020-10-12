import React, { useState } from "react"
import { DragAndDropItem } from "./components/item/DragAndDropItem"
import styles from './draganddroppage.module.scss'
import addIcon from '../../resources/addIcon.png'

export const DragAndDropPage = () => {

    const [inputs, setInputs] = useState([
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" },
        { title: "Events : all" }
    ])
    const [outputs, setOutputs] = useState([
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" },
        { title: "Debug" }
    ])

    const onAddInput = () => {
        const newInputs = inputs.slice(0);
        newInputs.push({ title: "Events : all" })
        setInputs(newInputs)
    }

    const onAddOutput = () => {
        const newOutputs = outputs.slice(0);
        newOutputs.push({ title: "Debug" })
        setOutputs(newOutputs)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <select className={styles.title_dropdown}>
                    <option value="" selected>Mobile App Essentials</option>
                </select>
                <select className={styles.scale_dropdown}>
                    <option value="scale_50" selected>50%  </option>
                </select>
            </div>
            <div className={styles.desc_container}>
                <div className={styles.left_panel}>
                    <div className={styles.list_title}>
                        <p className={styles.title}>Input</p>
                        <button
                            className={styles.add_button}
                            onClick={onAddInput}>
                            <img src={addIcon} alt="" />
                        </button>
                    </div>
                    <div className={styles.list}>
                        {inputs.map(item => <DragAndDropItem title={item.title} />)}
                    </div>
                    <div className={styles.list_title}>
                        <p className={styles.title}>output</p>
                        <button className={styles.add_button}
                            onClick={onAddOutput}>
                            <img src={addIcon} alt="" />
                        </button>
                    </div>
                    <div className={styles.list}>
                        {outputs.map(item => <DragAndDropItem title={item.title} output={true} />)}
                    </div>
                </div>
                <div className={styles.desc}>

                </div>
                <div className={styles.info_panel}>
                    <p className={styles.title}>info</p>
                </div>
            </div>
        </div>
    );
};
