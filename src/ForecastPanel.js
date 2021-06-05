import styles from "./ForecastPanel.module.css"

export const ForecastPanel = ({children}) => {
    return (
        <div className={styles.forecastPanel}>
            {children}
        </div>
    )
}