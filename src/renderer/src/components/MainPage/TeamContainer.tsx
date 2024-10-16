import styles from './TeamContainer.module.css'

const TeamContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.team_name}>Team Name</h1>
      <p className={styles.team_score}>0</p>
      <div className={styles.button_grid}>
        <button>+1</button>
        <input type="number" />
        <button>-1</button>
        <button>SET</button>
      </div>
      <div className={styles.load_team_container}>
        <select name="" id=""></select>
        <button>Load Team</button>
      </div>
    </div>
  )
}
export default TeamContainer
