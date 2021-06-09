import styles from "./HighlightCardPanel.module.css";

export const HighlightCardPanel = ({ children }) => {
    return (
        <div className={styles.HighlightCardPanel}>
            <h2 className={styles.title}>Today's Highlights</h2>
            {children}
        </div>
    );
};
