import styles from './Timer.module.css'

const Timer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <span>00:</span>
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>
      <div className={styles.timer_input}>
        <p>Hours</p>
        <p>Minutes</p>
        <p>Seconds</p>
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </div>
      <div className={styles.timer_controller}>
        <button>Start</button>
        <button>Set</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  )
}
export default Timer
