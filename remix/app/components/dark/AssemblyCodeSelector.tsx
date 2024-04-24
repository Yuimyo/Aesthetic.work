import styles from "./AssemblyCodeSelector.module.css";

export default function AssemblyCodeSelector() {
    return (
        <div>
            <div className={styles.viewer}>
                <button className={styles.asm_line}>mov 2, rax</button>
                <button className={styles.asm_line}>sub rax, 8</button>
            </div>
        </div>
    );
}
