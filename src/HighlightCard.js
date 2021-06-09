import styles from "./HighlightCard.module.css"

export const HighlightCard = ({title,children}) => {
    return (
        <div className={styles.card}>
            <h4 className={styles.heading}>{title}</h4>
            <div>{children}</div>
        </div>
    )
}