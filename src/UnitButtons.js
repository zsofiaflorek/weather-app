import styles from "./UnitButtons.module.css"

export function UnitButtons ({containerClassName})  {
    return (
        <div className={containerClassName}>
            <button className={styles.unitButton}>
                °C
            </button>
            <button className={styles.unitButton}>
                °F
            </button>
        </div>
    )
}