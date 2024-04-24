import styles from "./BracketEnd.module.css";

export default function AssemblyCodeSelector() {
    return (
        <div>
            <div className={styles.bracket}>
                <div className={styles.bracket_above}></div>
                <div className={styles.bracket_below}></div>
            </div>
        </div>
    );
}
