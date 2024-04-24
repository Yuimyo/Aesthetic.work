import styles from "./AssemblyCodeInput.module.css";

export default function AssemblyCodeInput() {
    return (
        <div>
            <textarea className={styles.asm_form} id="code-input" placeholder="addq $0x2A %rax" spellCheck="false"></textarea>
        </div>
    );
}
