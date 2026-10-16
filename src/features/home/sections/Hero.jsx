import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div>
        <p className={styles.kicker}>CTO · Technology &amp; AI Leadership</p>
        <h1 className={styles.name}>
          Gabriel <br />
          Rigon
        </h1>
      </div>
      <div className={styles.intro}>
        <p className={styles.lead}>
          Technology and AI leadership for work that can&apos;t afford to go wrong
        </p>
        <p className={styles.sub}>
          Head of Technology at a small company with an outsized footprint, 16 years into a career
          built in Brazil and on international projects. The platforms I run serve over 2 million
          people a month across public health and education, where a bad call costs more than a
          rollback.
        </p>
      </div>
    </header>
  )
}
