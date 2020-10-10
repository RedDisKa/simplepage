import React from 'react';
import styles from './app.module.scss';
import {List} from './components/list/List'
import { Menu } from './components/menu/Menu';
import {SearchField} from './components/search/SearchField'
import avatarIcon from './resources/avatarIcon.png'
import arrowIcon from './resources/arrowIcon.png'

function App() {

  const buildSkillsItems = []
  for (let i = 0; i < 4; i++) {
    buildSkillsItems.push({ title: "Mobile App", description: "Building Blocks for a Successful App"})
  }

  const recentProjectsItems = []
  for (let i = 0; i < 6; i++) {
    recentProjectsItems.push({ title: "Mobile App Essentials", description: "4 days ago"})
  }

  const getLearnMore = () => (
    <div className={styles.learn_more_container}>
      <p className={styles.learn_more}>Learn more</p>
      <img className={styles.learn_more_arrow} src={arrowIcon} alt="" />
    </div>
  )

  return (
    <div className={styles.app}>
      <div className={styles.menu_panel}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>Logo</div>
          <div className={styles.logo_description_container}>
            <p className={styles.logo_title}>Personal</p>
            <p className={styles.logo_description}>projects.com</p>
          </div>
        </div>
        <Menu />
      </div>
      <div className={styles.main_panel}>
        <List title="Build Your Skills" description="Find information that may be useful to you" items={buildSkillsItems} rightComponent={getLearnMore()}/>
        <div className={styles.recent_projects_container}>
          <List title="Recent Projects" description="Continue working on your latest files created" items={recentProjectsItems} rightComponent={<SearchField />}/>
        </div>
      </div>
      <div className={styles.right_panel}>
        <img src={avatarIcon} className={styles.avatar_icon} alt="" />
      </div>
      <div className={styles.small_logo}>Logo</div>
    </div>
  );
}

export default App;
