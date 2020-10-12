import React from 'react'
import styles from './app.module.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DragAndDropPage } from './containers/draganddrop/DragAndDropPage'
import { MainPage } from './containers/main/MainPage'

function App() {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Switch>
                    <Route
                        path="/main"
                        component={MainPage}
                        exact
                    />
                    <Route path="/drag-and-drop" component={DragAndDropPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
