import styles from "./StackItem.module.css";
import BracketEnd from "~/components/dark/BracketEnd";

export default function StackItem({ description, lore }: { description: string, lore: string }) {
    return (
        <div>
            <div className={styles.stk}>
                <div className={styles.stk_inside}>
                    <div className={styles.stk_description}>
                        {description}</div>
                </div>
                <div className={styles.stk_outside}>
                    <BracketEnd></BracketEnd>
                    <div className={styles.stk_lore}>
                        {lore}
                    </div>
                </div>
            </div>
        </div>
    );
}