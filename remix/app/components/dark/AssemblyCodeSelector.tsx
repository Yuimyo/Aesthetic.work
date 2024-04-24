import { ChangeEvent, useEffect, useState } from "react";
import styles from "./AssemblyCodeSelector.module.css";

interface AssemblyCodeSelectorProps {
    onChange?: (lineNumber: number) => void;
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
        if (onChange) {
            onChange(lineNumber);
        }
    };

    return (
        <div>
            <div className={styles.viewer}>
                {data.map((line, index) => (
                    <button className={styles.asm_line} key={index} onClick={() => handleButtonClick(index + 1)}>
                        {line}
                    </button>
                ))}
            </div>
        </div>
    );
}
