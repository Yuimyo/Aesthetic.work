import styles from "./StackItem.module.css";
import BracketEnd from "~/components/dark/BracketEnd";

interface StackItemProps {
    description: string;
    lore: string;
    width: number;
    height: number;
}

export default function StackItem({ description, lore, width, height }: StackItemProps) {
    return (
        <div>
            <div className={styles.stk}>
                <div className={styles.stk_inside}>
                    <div className={styles.stk_description}>
                        {description}</div>
                </div>
                <div className={styles.stk_outside}>
                    <BracketEnd width={width} height={height} thickness={2}></BracketEnd>
                    <div className={styles.stk_lore}>
                        {lore}
                    </div>
                </div>
            </div>
        </div>
    );
}