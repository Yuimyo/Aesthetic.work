import styles from "./BracketEnd.module.css";

interface BracketEndProps {
    width: number;
    height: number;
    thickness: number;
}

export default function BracketEnd({ width, height, thickness }: BracketEndProps) {
    return (
        <div>
            <div className={styles.bracket}>
                <div className={styles.bracket_above}></div>
                <div className={styles.bracket_below}></div>
            </div>
        </div>
    );
}
