import { ChangeEvent } from 'react';
import styles from "./AssemblyCodeInput.module.css";

interface AssemblyCodeInputProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function AssemblyCodeInput({ onChange }: AssemblyCodeInputProps) {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div>
            <textarea className={styles.asm_form} onChange={handleChange} id="code-input" placeholder="addq $0x2A %rax" spellCheck="false"></textarea>
        </div>
    );
}
