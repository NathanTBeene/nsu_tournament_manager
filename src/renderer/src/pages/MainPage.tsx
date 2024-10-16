import TeamContainer from './../components/MainPage/TeamContainer'
import styles from './MainPage.module.css'
import Timer from './../components/MainPage/Timer'

const MainPage = () => {
  return (
    <div className={styles.container}>
      <TeamContainer />
      <Timer />
      <TeamContainer />
    </div>
  )
}
export default MainPage
