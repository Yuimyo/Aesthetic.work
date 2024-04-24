import { ChangeEvent, useEffect, useState } from "react";
import styles from "./AssemblyCodeSelector.module.css";

interface AssemblyCodeSelectorProps {
    onChange: (lineNumber: number) => void;
    defaultValue: number;
    data: string[];
}

export default function AssemblyCodeSelector({ onChange, defaultValue, data }: AssemblyCodeSelectorProps) {
    let [selectedLine, setSelectedLine] = useState(defaultValue);

    useEffect(() => {
        console.log("changed selected line:", selectedLine); // TODO
    }, [selectedLine]);


    const handleButtonClick = (lineNumber: number) => {
        setSelectedLine(prev => lineNumber);
        onChange(lineNumber);
    };

    return (
        <div>
            <div className={styles.viewer}>
                <button className={styles.asm_line}>mov 2, rax</button>
                <button className={styles.asm_line}>sub rax, 8</button>
                {data.map((line, index) => (
                    <button key={index} onClick={() => handleButtonClick(index + 1)}>
                        {line}
                    </button>
                ))}
            </div>
        </div>
    );
}
