import { ChangeEvent } from 'react';
import styles from "./AssemblyCodeInput.module.css";

interface AssemblyCodeInputProps {
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}

export default function AssemblyCodeInput({ onChange, placeholder }: AssemblyCodeInputProps) {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div>
            <textarea className={styles.asm_form} onChange={handleChange} placeholder={placeholder} spellCheck="false"></textarea>
        </div>
    );
}
